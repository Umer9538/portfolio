import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Scroll to top button visibility
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App min-h-screen text-light relative overflow-hidden">
      {/* Optimized background elements - static for better performance */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Static gradient blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/12 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-secondary/8 rounded-full blur-3xl"></div>
      </div>

      <Header />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      {/* Enhanced Scroll to top button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 glass-dark border border-primary/30 rounded-2xl shadow-glow z-50 flex items-center justify-center group hover:bg-primary/20 transition-all duration-300"
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="text-primary text-lg group-hover:animate-bounce" />
        </motion.button>
      )}
    </div>
  );
}

export default App;