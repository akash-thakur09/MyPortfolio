import React from "react";
import Footer from "../components/Footer";

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8 ml-[calc(18rem+1rem)] mr-6 pb-16">
      <main className="max-w-4xl mx-auto">
        <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Resume</h2>

          <div className="space-y-6">
            <article>
              <h3 className="font-semibold">Senior Software Engineer — Awesome Co</h3>
              <p className="text-sm text-gray-600">2020 — Present</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
                <li>Led frontend development for customer portal used by 50k+ users.</li>
                <li>Built a reusable component system with TypeScript & Tailwind.</li>
              </ul>
            </article>

            <article>
              <h3 className="font-semibold">Frontend Engineer — Startup X</h3>
              <p className="text-sm text-gray-600">2017 — 2020</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
                <li>Built real-time dashboards and visualizations.</li>
              </ul>
            </article>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Resume;
