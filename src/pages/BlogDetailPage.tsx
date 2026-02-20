import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShareButtons } from '../components/features/blog/ShareButtons';
import { ReadingProgress } from '../components/ui/ReadingProgress';
import { loadBlogPosts } from '../utils/markdown';
import type { BlogPost } from '../types/blog';
import { SEO } from '../utils/seo';
import { pageTransitionVariants, fadeInUpVariants } from '../utils/animations';

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await loadBlogPosts();
        const foundPost = posts.find(p => p.slug === slug);
        setPost(foundPost || null);
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-950 text-white">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
            <p className="mt-4 text-gray-400">Loading post...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="w-full min-h-screen bg-gray-950 text-white">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/blog" 
              className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedDate = post.publishDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags}
        ogImage={post.coverImage}
        ogType="article"
        article={{
          publishedTime: post.publishDate.toISOString(),
          author: post.author,
          tags: post.tags
        }}
      />
      <div className="w-full min-h-screen bg-gray-950 text-white">
        <ReadingProgress />
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
          <motion.article
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm">
              <Link to="/" className="text-gray-400 hover:text-green-400 transition-colors">
                Home
              </Link>
              <span className="mx-2 text-gray-600">/</span>
              <Link to="/blog" className="text-gray-400 hover:text-green-400 transition-colors">
                Blog
              </Link>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-white">{post.title}</span>
            </nav>

            {/* Cover Image */}
            <motion.div 
              className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8"
              variants={fadeInUpVariants}
            >
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Post Header */}
            <motion.header className="mb-8" variants={fadeInUpVariants}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                <time dateTime={post.publishDate.toISOString()}>{formattedDate}</time>
                <span>•</span>
                <span>{post.readingTime} min read</span>
                <span>•</span>
                <span>By {post.author}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium bg-green-900 text-green-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.header>

            {/* Post Content */}
            <motion.div 
              className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-green-400 prose-strong:text-white prose-code:text-green-400 prose-pre:bg-gray-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
              variants={fadeInUpVariants}
            />

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <ShareButtons 
                url={window.location.href} 
                title={post.title} 
              />
            </div>
          </motion.article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogDetailPage;
