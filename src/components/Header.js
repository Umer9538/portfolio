import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMenuOpen && !e.target.closest('#mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMenuOpen]);

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3, 
        delay: 0.1 + (i * 0.1) 
      } 
    })
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    exit: { 
      opacity: 0, 
      x: "100%",
      transition: { duration: 0.2 }
    }
  };

  const navLinks = [
    { id: "hero", text: "Home" },
    { id: "about", text: "About" },
    { id: "skills", text: "Skills" },
    { id: "projects", text: "Projects" },
    { id: "experience", text: "Experience" },
    { id: "contact", text: "Contact" }
  ];

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-dark shadow-glass py-3 border-b border-primary/10'
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="flex items-center group relative"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative">
            <span className="text-2xl md:text-3xl font-display font-extrabold tracking-tight">
              <span className="text-gradient neon-text">M</span>
              <span className="text-gradient-alt neon-text">U</span>
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 group"
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10">{link.text}</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-300"></div>
            </motion.a>
          ))}
        </nav>

        {/* Social Icons - Desktop */}
        <motion.div
          className="hidden md:flex items-center space-x-3"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="https://github.com/umer1321"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg glass-dark border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            aria-label="GitHub Profile"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-lg text-slate-400 hover:text-primary transition-colors" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/muhammad-umer"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg glass-dark border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedinIn className="text-lg text-slate-400 hover:text-primary transition-colors" />
          </motion.a>
          <a
            href="#contact"
            className="btn-primary text-sm py-2 px-5 ml-2"
          >
            <span>Hire Me</span>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg glass-dark border border-primary/20 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? (
            <FaTimes size={20} className="text-primary" />
          ) : (
            <FaBars size={20} className="text-primary" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu-container"
            className="fixed inset-0 bg-dark-950/90 flex justify-end z-40 md:hidden backdrop-blur-xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="w-4/5 h-full glass-dark border-l border-primary/10 pt-24 pb-8 px-6 flex flex-col shadow-2xl">
              <nav className="flex flex-col space-y-2 mb-auto">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    className="relative px-4 py-4 text-lg font-medium text-slate-300 hover:text-white transition-colors duration-300 rounded-xl group"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="relative z-10">{link.text}</span>
                    <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="pt-8 border-t border-primary/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex justify-center gap-4 mb-6">
                  <a
                    href="https://github.com/umer1321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-xl glass-dark border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub size={20} className="text-slate-400 hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com/in/muhammad-umer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-xl glass-dark border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedinIn size={20} className="text-slate-400 hover:text-primary transition-colors" />
                  </a>
                </div>
                <a
                  href="#contact"
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Get In Touch</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;