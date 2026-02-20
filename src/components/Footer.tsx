import React from "react";
import { FaCode, FaGithub, FaLinkedin, FaTwitter, FaDev, FaLink, FaUser, FaCog, FaDollarSign, FaBook, FaEnvelope, FaHeart, FaCoffee } from "react-icons/fa";

const Footer: React.FC = () => {
const LinkedIn = "https://www.linkedin.com/in/thakur-aakash/";
const Twitter = "https://twitter.com/imaakash0218";
const Devto = "https://dev.to/imaakash0218";
const GitHub = "https://github.com/akash-thakur09";


  return (
    <footer className="bg-dark py-16 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero opacity-[.03]" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6 md:col-span-2">
            <h3 className="flex items-center gap-3">
              <FaCode className="text-green-400 text-3xl" />
              <span className="text-2xl font-bold text-white font-code">
                Akash Thakur
              </span>
            </h3>
            <p className="text-gray-300 leading-relaxed pe-6 lg:pe-16">
              Building the future with clean code, creativity, and a passion for
              innovation.
            </p>
            <div className="flex gap-5">
              <a
                href={GitHub}
                className="text-gray-300 hover:text-green-400 text-xl transition-colors transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href={LinkedIn}
                className="text-gray-300 hover:text-green-400 text-xl transition-colors transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href={Twitter}
                className="text-gray-300 hover:text-green-400 text-xl transition-colors transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href={Devto}
                className="text-gray-300 hover:text-green-400 text-xl transition-colors transform hover:scale-110"
              >
                <FaDev />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-code text-white mb-6 flex items-center gap-2">
              <FaLink className="text-green-400" /> Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <FaUser className="text-sm" /> Link 1
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <FaCode className="text-sm" /> Link 2
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <FaCog className="text-sm" /> Link 3
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <FaDollarSign className="text-sm" /> Link 4
                </a>
              </li>
              <li>
                <a
                  href="#blogs"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <FaBook className="text-sm" /> Link 5
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <FaEnvelope className="text-sm" /> Link 6
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-xl font-bold font-code text-white mb-6 flex items-center gap-2">
              <FaEnvelope className="text-green-400" /> Newsletter
            </h3>
            <p className="text-gray-300 mb-4">
              Stay updated with my latest projects and tech insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-2 px-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-2 bg-green-500 text-gray-900 font-bold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <FaPaperPlane /> Subscribe
              </button>
            </form>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Akash Thakur. Crafted with{" "}
            <FaHeart className="inline text-green-400" /> and{" "}
            <FaCoffee className="inline text-green-400" />.
          </p>
          <div className="flex gap-6 text-gray-300 text-sm">
            <a href="#privacy" className="hover:text-green-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-green-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
