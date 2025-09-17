import React from "react";
import Footer from "../components/Footer";

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8 ml-[calc(18rem+1rem)] mr-6 pb-16">
      <main className="max-w-4xl mx-auto">
        <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Blog</h2>

          <div className="space-y-6">
            <article className="border rounded p-4">
              <h3 className="font-semibold">How I structure React apps</h3>
              <p className="text-sm text-gray-600">Mar 10, 2025 • 8 min read</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">A short summary of my architecture and component patterns...</p>
            </article>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Blog;
