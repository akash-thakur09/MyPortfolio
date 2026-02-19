import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { fadeInUpVariants, staggerContainerVariants } from '../../utils/animations';
import timelineData from '../../data/timeline.json';
import { FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa';

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate: string | null;
  description: string;
  type: 'work' | 'education' | 'certification';
}

const Timeline = () => {
  const { ref, controls } = useScrollAnimation();
  const items = timelineData.timeline as TimelineItem[];

  // Sort by start date (most recent first)
  const sortedItems = [...items].sort((a, b) => 
    new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <FaBriefcase className="text-green-400" />;
      case 'education':
        return <FaGraduationCap className="text-blue-400" />;
      case 'certification':
        return <FaCertificate className="text-purple-400" />;
      default:
        return <FaBriefcase className="text-green-400" />;
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={controls}
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.1 } }
      }}
      className="py-20 bg-gray-950 relative"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={fadeInUpVariants}>
          <h2 className="text-3xl lg:text-4xl font-bold font-code inline-block relative text-white mb-1">
            Experience & <span className="text-green-400">Education</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-green-500 opacity-70"></div>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div className="relative" variants={staggerContainerVariants}>
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800"></div>

          {sortedItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative pl-20 pb-12 last:pb-0"
              variants={fadeInUpVariants}
            >
              {/* Icon */}
              <div className="absolute left-0 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl border-4 border-gray-950">
                {getIcon(item.type)}
              </div>

              {/* Content */}
              <motion.div
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors"
                whileHover={{ x: 4 }}
              >
                <div className="flex flex-wrap items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <span className="text-sm text-gray-400">
                    {formatDate(item.startDate)} - {formatDate(item.endDate)}
                  </span>
                </div>
                <p className="text-green-400 font-semibold mb-3">{item.organization}</p>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Timeline;
