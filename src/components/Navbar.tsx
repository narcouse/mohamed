import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/', hash: '#services' },
    { name: 'Portfolio', path: '/', hash: '#portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (link: typeof navLinks[0]) => {
    if (link.hash) {
      return location.pathname === '/' && location.hash === link.hash;
    }
    return location.pathname === link.path && !location.hash;
  };

  const handleLinkClick = (hash?: string) => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-navigation-bar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/85 backdrop-blur-xl border-b border-white/5 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Branding */}
        <Link
          id="navbar-logo-link"
          to="/"
          onClick={() => handleLinkClick()}
          className="flex items-center space-x-2.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-teal to-brand-teal-light flex items-center justify-center shadow-lg shadow-brand-teal/20 group-hover:scale-105 transition-transform duration-300">
            <Compass className="w-5.5 h-5.5 text-white animate-pulse-slow" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-wider text-white">
              MERMO
            </span>
            <span className="text-[10px] font-mono text-brand-teal-light tracking-widest uppercase -mt-1 font-bold">
              Digital Agency
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              id={`nav-link-${idx}`}
              to={link.hash ? `${link.path}${link.hash}` : link.path}
              onClick={() => handleLinkClick(link.hash)}
              className={`relative py-1 transition-all duration-300 font-sans ${
                isActive(link) ? 'text-teal-400' : 'hover:text-white'
              }`}
            >
              {link.name}
              {isActive(link) && (
                <motion.span
                  layoutId="activeNavBackground"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-400 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            id="navbar-contact-button"
            to="/contact"
            onClick={() => handleLinkClick()}
            className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 text-sm text-white font-medium transition-all"
          >
            Contact Us
          </Link>
          <Link
            id="navbar-cta-button"
            to="/contact"
            onClick={() => handleLinkClick()}
            className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-navy-950 font-bold rounded-full shadow-lg shadow-teal-500/20 text-sm hover:opacity-90 transition-all"
          >
            Start Your Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-container"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-white/5 bg-navy-950/95 overflow-hidden backdrop-blur-2xl shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  id={`nav-link-mobile-${idx}`}
                  to={link.hash ? `${link.path}${link.hash}` : link.path}
                  onClick={() => {
                    setIsOpen(false);
                    handleLinkClick(link.hash);
                  }}
                  className={`px-4 py-3 font-display font-medium text-base rounded-xl transition-colors duration-200 border border-transparent ${
                    isActive(link)
                      ? 'bg-white/5 text-white border-white/10'
                      : 'text-slate-450 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                <div className="text-xs font-mono text-slate-500 px-4">
                  1001 S Main St, Ste 600, Kalispell, MT
                </div>
                <Link
                  id="mobile-navbar-cta"
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full justify-center flex items-center gap-2 py-3.5 px-4 font-display font-semibold uppercase tracking-wider text-sm bg-gradient-to-r from-brand-teal to-brand-teal-light text-white rounded-xl shadow-lg shadow-brand-teal/20 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
