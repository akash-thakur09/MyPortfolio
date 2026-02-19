import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import ThemeToggle from "./features/theme/ThemeToggle";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", isHash: true },
    { name: "Projects", href: "#projects", isHash: true },
    { name: "Blog", href: "/blog", isHash: false },
    { name: "Contact", href: "#contact", isHash: true },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-sm border-b border-gray-800 transition-colors ${
        scrolled ? "bg-gray-950/95 dark:bg-gray-950/95" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto lg:px-12 py-6 flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <FaCode className="text-green-400 text-2xl animate-pulse" />
          <span className="text-xl font-bold text-white font-mono">
            Akash Thakur
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            link.isHash && isHomePage ? (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-green-400 transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.isHash ? `/${link.href}` : link.href}
                className="text-gray-300 hover:text-green-400 transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
              </Link>
            )
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-300 hover:text-green-400 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-950 border-b border-gray-800 p-6 flex flex-col gap-4 shadow-lg animate-slideDown">
          {navLinks.map((link) => (
            link.isHash && isHomePage ? (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-green-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.isHash ? `/${link.href}` : link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-green-400 transition-colors font-medium"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
