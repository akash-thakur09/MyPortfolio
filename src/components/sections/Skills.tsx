import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { fadeInUpVariants, staggerContainerVariants } from '../../utils/animations';
import skillsData from '../../data/skills.json';

interface Skill {
  name: string;
  category: string;
  level: 'expert' | 'advanced' | 'intermediate' | 'beginner';
  icon?: string;
}

const Skills = () => {
  const { ref, controls } = useScrollAnimation();
  const skills = skillsData.skills as Skill[];

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Get badge styling based on proficiency level
  const getLevelStyle = (level: string) => {
    switch (level) {
      case 'expert':
        return 'bg-green-500/20 text-green-400 border-green-500/50 ring-2 ring-green-500/30';
      case 'advanced':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50 ring-1 ring-blue-500/20';
      case 'intermediate':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'beginner':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getLevelDots = (level: string) => {
    const dots = {
      expert: 4,
      advanced: 3,
      intermediate: 2,
      beginner: 1,
    };
    return dots[level as keyof typeof dots] || 1;
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
      className="py-20 bg-gray-900/50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={fadeInUpVariants}>
          <h2 className="text-3xl lg:text-4xl font-bold font-code inline-block relative text-white mb-1">
            Technical <span className="text-green-400">Skills</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-green-500 opacity-70"></div>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing products
          </p>
        </motion.div>

        {/* Skills by Category */}
        <motion.div className="space-y-12" variants={staggerContainerVariants}>
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <motion.div key={category} variants={fadeInUpVariants}>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                {category}
              </h3>
              
              {/* Modern skill tags layout */}
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`
                      group relative px-4 py-2.5 rounded-lg border backdrop-blur-sm
                      transition-all duration-300 cursor-default
                      ${getLevelStyle(skill.level)}
                    `}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      
                      {/* Proficiency dots */}
                      <div className="flex gap-0.5">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 rounded-full transition-all ${
                              i < getLevelDots(skill.level)
                                ? 'bg-current opacity-100'
                                : 'bg-current opacity-20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-700">
                      {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)} Level
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-6 text-sm"
          variants={fadeInUpVariants}
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-green-400" />
              ))}
            </div>
            <span className="text-gray-400">Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < 3 ? 'bg-blue-400' : 'bg-blue-400 opacity-20'}`} />
              ))}
            </div>
            <span className="text-gray-400">Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < 2 ? 'bg-purple-400' : 'bg-purple-400 opacity-20'}`} />
              ))}
            </div>
            <span className="text-gray-400">Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < 1 ? 'bg-gray-400' : 'bg-gray-400 opacity-20'}`} />
              ))}
            </div>
            <span className="text-gray-400">Beginner</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
