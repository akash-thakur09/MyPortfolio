import React from "react";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8 ml-[calc(18rem+1rem)] mr-6 pb-16">
      <main className="max-w-2xl mx-auto">
        <section id="contact" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact</h2>

          <form className="space-y-4">
            <input className="w-full px-4 py-2 border rounded" placeholder="Your name" />
            <input className="w-full px-4 py-2 border rounded" placeholder="Your email" />
            <textarea className="w-full px-4 py-2 border rounded" rows={5} placeholder="Message" />
            <button type="submit" className="px-4 py-2 rounded bg-emerald-600 text-white">Send Message</button>
          </form>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Contact;
