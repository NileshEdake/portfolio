import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-gray-900/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
  to="/#home"
  smooth
  onClick={handleLinkClick}
  className="text-2xl font-bold transition-colors hover:text-blue-300"
>
  <span className="text-blue-400">YOGIRAJ </span>
  <span className="text-white">BHANDARE</span>
</Link>
            to="/#home"
            smooth
            onClick={handleLinkClick}
            className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span className="text-blue-400">YOGIRAJ </span>
            <span className="text-white">BHANDARE</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                smooth
                onClick={handleLinkClick}
                className={`px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.substring(1)
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-300 hover:text-blue-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/95">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={`/${link.href}`}
              smooth
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === link.href.substring(1)
                  ? "bg-gray-700 text-blue-400"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
