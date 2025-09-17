import React from "react";
import Footer from "../components/Footer";

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8 ml-[calc(18rem+1rem)] mr-6 pb-16">
      <main className="max-w-4xl mx-auto">
        <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Services & Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold">Web Development</h3>
              <p className="text-sm text-gray-600 mt-2">React, TypeScript, Tailwind — building fast SPAs.</p>
              <p className="mt-3 font-semibold">Starting at $1,200</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold">UI/UX Design</h3>
              <p className="text-sm text-gray-600 mt-2">Designs that convert and delight users.</p>
              <p className="mt-3 font-semibold">Starting at $800</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold">Consulting</h3>
              <p className="text-sm text-gray-600 mt-2">Architecture reviews & performance tuning.</p>
              <p className="mt-3 font-semibold">Hourly rate: $60</p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Services;
