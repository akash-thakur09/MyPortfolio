import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./features/projects/ProjectCard";
import { loadProjects, getAllTechnologies, filterProjectsByTech } from "../utils/projects";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { fadeInUpVariants, staggerContainerVariants } from "../utils/animations";

const Project: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  const projects = loadProjects();
  const [selectedTech, setSelectedTech] = useState<string>('all');
  
  const technologies = useMemo(() => {
    return ['all', ...getAllTechnologies(projects)];
  }, [projects]);
  
  const filteredProjects = useMemo(() => {
    return filterProjectsByTech(projects, selectedTech);
  }, [projects, selectedTech]);

  return (
    <motion.section 
      id="projects" 
      className="py-20 bg-gray-900/50 relative"
      ref={ref}
      initial="initial"
      animate={controls}
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.1 } }
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUpVariants}
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-code inline-block relative text-white mb-1">
            Latest <span className="text-green-400">Projects</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-green-500 opacity-70"></div>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of my recent work, showcasing innovative solutions and
            clean code. Click to explore details.
          </p>
        </motion.div>

        {/* Technology Filter */}
        <motion.div 
          className="mb-8 flex justify-center"
          variants={fadeInUpVariants}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {technologies.map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedTech === tech
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tech === 'all' ? 'All Projects' : tech}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainerVariants}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUpVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            variants={fadeInUpVariants}
          >
            <p className="text-gray-400 text-lg">
              No projects found with the selected technology.
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Project;
