import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BlogCard } from '../components/features/blog/BlogCard';
import { loadBlogPosts } from '../utils/markdown';
import type { BlogPost } from '../types/blog';
import { SEO } from '../utils/seo';
import { pageTransitionVariants, staggerContainerVariants, fadeInUpVariants } from '../utils/animations';

const BlogListPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const blogPosts = await loadBlogPosts();
        setPosts(blogPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(posts.map(post => post.category)));
    return ['all', ...uniqueCategories];
  }, [posts]);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  return (
    <>
      <SEO
        title="Blog"
        description="Read articles about web development, programming, and technology"
        keywords={['blog', 'articles', 'web development', 'programming', 'technology']}
      />
      <div className="w-full min-h-screen bg-gray-950 text-white">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
          <motion.div
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-gray-400 text-lg mb-8">
              Thoughts, tutorials, and insights on web development
            </p>

            {/* Search and Filter Controls */}
            <div className="mb-8 flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
              />
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                <p className="mt-4 text-gray-400">Loading posts...</p>
              </div>
            )}

            {/* Posts Grid */}
            {!loading && filteredPosts.length > 0 && (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainerVariants}
                initial="initial"
                animate="animate"
              >
                {filteredPosts.map((post) => (
                  <motion.div key={post.id} variants={fadeInUpVariants}>
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* No Results */}
            {!loading && filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  {posts.length === 0 
                    ? 'No blog posts yet. Check back soon!' 
                    : 'No posts match your search criteria.'}
                </p>
              </div>
            )}
          </motion.div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogListPage;
