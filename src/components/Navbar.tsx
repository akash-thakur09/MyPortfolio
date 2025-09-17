import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blog" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-sm border-b border-gray-800 transition-colors ${
        scrolled ? "bg-gray-950/95" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto lg:px-12 py-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <FaCode className="text-green-400 text-2xl animate-pulse" />
          <span className="text-xl font-bold text-white font-mono">
            John Peterson
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-green-400 transition-colors font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-300 hover:text-green-400 transition-colors"
          >
            {open ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-950 border-b border-gray-800 p-6 flex flex-col gap-4 shadow-lg animate-slideDown">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-green-400 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
