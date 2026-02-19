export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: Date;
  updatedDate?: Date;
  tags: string[];
  category: string;
  coverImage: string;
  readingTime: number;
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: string;
  coverImage: string;
  author?: string;
  updatedDate?: string;
}
