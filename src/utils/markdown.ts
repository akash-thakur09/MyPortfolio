import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { BlogFrontmatter, BlogPost } from '../types/blog';

export const parseMarkdown = async (content: string): Promise<{
  frontmatter: BlogFrontmatter;
  html: string;
}> => {
  const { data, content: markdown } = matter(content);
  
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(markdown);
  
  return {
    frontmatter: data as BlogFrontmatter,
    html: processedContent.toString()
  };
};

export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

// Blog content loader
export const loadBlogPosts = async (): Promise<BlogPost[]> => {
  const blogFiles = import.meta.glob('../content/blog/*.md', { as: 'raw' });
  const posts: BlogPost[] = [];
  
  for (const [path, loader] of Object.entries(blogFiles)) {
    const content = await loader();
    const { frontmatter, html } = await parseMarkdown(content);
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    posts.push({
      id: slug,
      slug,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      content: html,
      author: frontmatter.author || 'Portfolio Owner',
      publishDate: new Date(frontmatter.date),
      updatedDate: frontmatter.updatedDate ? new Date(frontmatter.updatedDate) : undefined,
      tags: frontmatter.tags,
      category: frontmatter.category,
      coverImage: frontmatter.coverImage,
      readingTime: calculateReadingTime(content)
    });
  }
  
  return posts.sort((a, b) => 
    b.publishDate.getTime() - a.publishDate.getTime()
  );
};
