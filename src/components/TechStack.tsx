import React from "react";
import { FaJs, FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaDocker, FaAws, FaBootstrap, FaVuejs, FaAngular, FaDatabase, FaLeaf, FaNpm } from "react-icons/fa";

function TechStack() {
  const stack = [
    { icon: <FaJs className="text-yellow-400 text-2xl" />, name: "JavaScript" },
    { icon: <FaReact className="text-blue-400 text-2xl" />, name: "React" },
    { icon: <FaNodeJs className="text-green-500 text-2xl" />, name: "Node.js" },
    { icon: <FaPython className="text-blue-500 text-2xl" />, name: "Python" },
    { icon: <FaHtml5 className="text-orange-500 text-2xl" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500 text-2xl" />, name: "CSS3" },
    { icon: <FaSass className="text-pink-500 text-2xl" />, name: "SASS" },
    { icon: <FaGitAlt className="text-orange-600 text-2xl" />, name: "Git" },
    { icon: <FaDocker className="text-blue-500 text-2xl" />, name: "Docker" },
    { icon: <FaAws className="text-orange-400 text-2xl" />, name: "AWS" },
    { icon: <FaBootstrap className="text-blue-600 text-2xl" />, name: "Bootstrap" },
    { icon: <FaVuejs className="text-green-400 text-2xl" />, name: "Vue.js" },
    { icon: <FaAngular className="text-red-500 text-2xl" />, name: "Angular" },
    { icon: <FaDatabase className="text-blue-700 text-2xl" />, name: "PostgreSQL" },
    { icon: <FaLeaf className="text-green-600 text-2xl" />, name: "MongoDB" },
    { icon: <FaNpm className="text-red-500 text-2xl" />, name: "NPM" },
  ];

  // duplicate list to make infinite effect
  const repeatedStack = [...stack, ...stack];

  return (
    <section className="relative h-16 bg-gray-800/50 backdrop-blur-sm overflow-hidden flex items-center">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {repeatedStack.map((tech, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-300">
            {tech.icon}
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
