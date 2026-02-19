import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getProjectBySlug } from '../utils/projects';
import type { Project } from '../types/project';
import { SEO } from '../utils/seo';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { pageTransitionVariants, fadeInUpVariants } from '../utils/animations';

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (slug) {
      const foundProject = getProjectBySlug(slug);
      setProject(foundProject || null);
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-gray-950 text-white">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
            <Link 
              to="/#projects" 
              className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEO
        title={project.title}
        description={project.shortDescription}
        keywords={project.techStack}
        ogImage={project.thumbnail}
      />
      <div className="w-full min-h-screen bg-gray-950 text-white">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
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
              <Link to="/#projects" className="text-gray-400 hover:text-green-400 transition-colors">
                Projects
              </Link>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-white">{project.title}</span>
            </nav>

            {/* Project Header */}
            <motion.header className="mb-12" variants={fadeInUpVariants}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{project.shortDescription}</p>
              
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
                  >
                    <FaExternalLinkAlt />
                    View Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
                  >
                    <FaGithub />
                    View Source Code
                  </a>
                )}
              </div>
            </motion.header>

            {/* Project Images */}
            <motion.div className="mb-12" variants={fadeInUpVariants}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <motion.div 
                    key={index} 
                    className="relative h-64 md:h-80 rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Project Description */}
            <motion.section className="mb-12" variants={fadeInUpVariants}>
              <h2 className="text-3xl font-bold mb-4">About This Project</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.fullDescription}
              </p>
            </motion.section>

            {/* Tech Stack */}
            <motion.section className="mb-12" variants={fadeInUpVariants}>
              <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Challenges */}
            <motion.section className="mb-12" variants={fadeInUpVariants}>
              <h2 className="text-3xl font-bold mb-4">Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Solutions */}
            <motion.section className="mb-12" variants={fadeInUpVariants}>
              <h2 className="text-3xl font-bold mb-4">Solutions</h2>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </motion.article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProjectDetailPage;
