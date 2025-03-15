
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/providers/ThemeProvider';
import AuthModal from './auth/AuthModal';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();

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

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setIsLoggedIn(true);
        // Try to get user info
        const { data: userData } = await supabase.auth.getUser();
        if (userData.user?.user_metadata?.name) {
          setUsername(userData.user.user_metadata.name);
        } else {
          setUsername('User');
        }
      }
    };

    checkUser();

    // Set up auth state change listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          setIsLoggedIn(true);
          // Try to get user info
          if (session.user?.user_metadata?.name) {
            setUsername(session.user.user_metadata.name);
          } else {
            setUsername('User');
          }
        } else if (event === 'SIGNED_OUT') {
          setIsLoggedIn(false);
          setUsername('');
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setUsername('');
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
  };

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
    <>
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
                      : 'text-gray-600 hover:text-maternal-600 dark:text-gray-300 dark:hover:text-maternal-400'
                  }`}
                >
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-maternal-100 dark:bg-maternal-900/20 rounded-md -z-10"
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

              {/* Login/Signup Button */}
              {isLoggedIn ? (
                <div className="relative ml-4">
                  <Button 
                    variant="outline" 
                    className="text-sm border-maternal-200 hover:bg-maternal-50 dark:border-maternal-800 dark:hover:bg-maternal-900"
                    onClick={handleLogout}
                  >
                    Logout {username && `(${username})`}
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="outline" 
                  className="ml-4 text-sm border-maternal-200 hover:bg-maternal-50 dark:border-maternal-800 dark:hover:bg-maternal-900"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Login / Signup
                </Button>
              )}

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 rounded-full"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              {/* Theme Toggle for Mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="mr-2 rounded-full"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>

              {/* Login/Signup Button for Mobile */}
              <Button 
                variant="ghost" 
                size="icon"
                className="mr-2 rounded-full"
                onClick={() => setIsAuthModalOpen(true)}
              >
                <LogIn className="h-5 w-5" />
              </Button>

              {/* Hamburger Menu */}
              <button
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-5">
                  <span
                    className={`absolute h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'rotate-45 top-2' : 'top-0'
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-gray-800 dark:bg-gray-200 top-2 transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? '-rotate-45 top-2' : 'top-4'
                    }`}
                  />
                </div>
              </button>
            </div>
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
                      ? 'bg-maternal-100 dark:bg-maternal-900/30 text-maternal-700 dark:text-maternal-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Login status for mobile */}
              {isLoggedIn ? (
                <Button 
                  variant="outline" 
                  className="text-sm border-maternal-200 hover:bg-maternal-50"
                  onClick={handleLogout}
                >
                  Logout {username && `(${username})`}
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  className="text-sm border-maternal-200 hover:bg-maternal-50"
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    closeMobileMenu();
                  }}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Login / Signup
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
