import React from "react";
import img1 from "../assets/img1.webp"

const projects = [
  {
    title: "Taskify App",
    description:
      "A task management app with real-time collaboration, built using React, Node.js, and MongoDB.",
    image: img1,
    tags: ["React", "Node.js", "MongoDB"],
    icon: "fas fa-tasks",
    github: "#",
    live: "#",
  },
  {
    title: "E-Shop Platform",
    description:
      "A scalable e-commerce platform with Next.js, Stripe payments, and TailwindCSS.",
    image: img1,
    tags: ["Next.js", "Stripe", "TailwindCSS"],
    icon: "fas fa-shopping-cart",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Site",
    description:
      "My personal portfolio showcasing my work, built with HTML, TailwindCSS, and Alpine.js.",
    image: img1,
    tags: ["HTML", "TailwindCSS", "Alpine.js"],
    icon: "fas fa-user",
    github: "#",
    live: "#",
  },
];

const Project: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900/50 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-code inline-block relative text-white mb-1">
            Latest <span className="text-green-400">Projects</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-green-500 opacity-70"></div>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of my recent work, showcasing innovative solutions and
            clean code. Click to explore details.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-950 rounded-lg border border-gray-800 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 animated fadeInUp delay${
                (index + 1) * 100
              }`}
            >
              <a href={project.image} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </a>
              <div className="p-6">
                <h3 className="text-xl font-bold font-code text-white mb-2 flex items-center gap-2">
                  <i
                    className={`${project.icon} text-green-400 led-glow`}
                  ></i>{" "}
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <i className="fas fa-external-link-alt text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
