import React from "react";
import type { Project } from "../types/project";
import Footer from "../components/Footer";

const projectList: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "React + TypeScript + Tailwind portfolio with animations.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "/assets/projects/portfolio.jpg",
    demo: "#",
    repo: "#",
  },
  {
    id: 2,
    title: "Dashboard App",
    description: "Realtime dashboard with charts and filters.",
    tech: ["React", "D3", "Node"],
    image: "/assets/projects/dashboard.jpg",
    demo: "#",
    repo: "#",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors pt-8 ml-[calc(18rem+1rem)] mr-6 pb-16">
      <main className="max-w-6xl mx-auto">
        <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectList.map((p) => (
              <article key={p.id} className="border rounded-lg overflow-hidden bg-white dark:bg-gray-700">
                <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded">{t}</span>
                    ))}
                  </div>
                  <div className="mt-3 flex gap-3">
                    <a href={p.demo} className="text-emerald-600 text-sm">Live</a>
                    <a href={p.repo} className="text-sm text-gray-500">Source</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Portfolio;
