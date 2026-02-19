import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import { SEO } from '../utils/seo';
import { pageTransitionVariants } from '../utils/animations';

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist"
        keywords={['404', 'not found', 'error']}
      />
      <div className="w-full min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <motion.div 
          className="text-center px-4"
          variants={pageTransitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div 
            className="mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-9xl font-bold text-green-400 mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/"
              className="py-3 px-6 bg-green-500 hover:bg-green-600 text-gray-900 font-bold rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <FaHome /> Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="py-3 px-6 bg-transparent hover:bg-gray-800 text-green-400 border border-green-400 font-bold rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <FaArrowLeft /> Go Back
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
