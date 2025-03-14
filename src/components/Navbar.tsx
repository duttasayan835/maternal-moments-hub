
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/pregnancy', label: 'Pregnancy' },
    { path: '/parenting', label: 'Parenting' },
    { path: '/research', label: 'Research' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-2xl font-display font-semibold bg-clip-text text-transparent bg-gradient-to-r from-maternal-600 to-maternal-800">
                Maternal Moments
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-maternal-700'
                    : 'text-gray-600 hover:text-maternal-600'
                }`}
              >
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-maternal-100 rounded-md -z-10"
                    transition={{ 
                      type: "spring", 
                      stiffness: 500, 
                      damping: 30 
                    }}
                  />
                )}
                {link.label}
              </Link>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <a
                href="/#"
                className="px-5 py-2 bg-maternal-600 text-white rounded-full text-sm font-medium shadow-sm hover:bg-maternal-700 transition-all duration-300"
              >
                Get the App
              </a>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 top-2' : 'top-0'
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 top-2 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45 top-2' : 'top-4'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.path
                    ? 'bg-maternal-100 text-maternal-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#"
              className="px-4 py-2 bg-maternal-600 text-white rounded-md text-sm font-medium shadow-sm hover:bg-maternal-700 text-center mt-2"
            >
              Get the App
            </a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
