import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { HiSparkles, HiCode, HiLightningBolt } from 'react-icons/hi';

const Hero = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Throttled mouse tracking for interactive effects
  useEffect(() => {
    let timeoutId;
    const handleMouseMove = (e) => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 10,
          y: (e.clientY / window.innerHeight - 0.5) * 10
        });
        timeoutId = null;
      }, 50); // Throttle to every 50ms
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Optimized particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const colors = [
      'rgba(14, 165, 233, ',
      'rgba(167, 139, 250, '
    ];

    const initParticles = () => {
      particles = [];
      // Reduced particle count for better performance
      const particleCount = Math.min(Math.floor(window.innerWidth / 25), 50);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.4 + 0.2
        });
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    let lastTime = 0;
    const fps = 30; // Limit to 30fps for better performance
    const fpsInterval = 1000 / fps;

    const animate = (currentTime) => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = currentTime - (elapsed % fpsInterval);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw particle (removed glow for performance)
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + particle.opacity + ')';
        ctx.fill();
      });
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10">
      {/* Particle background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-70" />

      {/* Simplified static background blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text content - Asymmetric layout */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge with icon */}
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-3 glass-dark rounded-full border border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HiSparkles className="text-primary text-xl animate-pulse" />
              <span className="text-sm font-medium text-primary-200">Available for new opportunities</span>
            </motion.div>

            {/* Main heading with creative typography */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block text-white text-shadow-lg">Hey, I'm</span>
                <span className="block text-gradient mt-2">Muhammad</span>
                <span className="block text-gradient-alt">Umer</span>
              </motion.h1>
            </div>

            {/* Description with unique styling */}
            <motion.div
              className="space-y-4 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-light-dark leading-relaxed">
                A <span className="text-primary font-semibold">full-stack developer</span> &
                <span className="text-secondary font-semibold"> mobile app specialist</span> who
                transforms ideas into elegant, high-performance digital experiences.
              </p>
              <p className="text-base md:text-lg text-slate-400">
                I combine technical mastery with creative vision to build solutions that don't just work—they inspire.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a href="#projects" className="btn-primary group">
                <span className="flex items-center gap-2">
                  <HiCode className="text-xl group-hover:rotate-12 transition-transform" />
                  Explore My Work
                </span>
              </a>
              <a href="#contact" className="btn-outline group">
                <span className="flex items-center gap-2">
                  <HiLightningBolt className="text-xl group-hover:scale-125 transition-transform" />
                  Let's Connect
                </span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { icon: FaGithub, href: 'https://github.com/umer1321', label: 'GitHub' },
                { icon: FaLinkedinIn, href: 'https://linkedin.com/in/muhammad-umer', label: 'LinkedIn' },
                { icon: FaTwitter, href: '#', label: 'Twitter' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl glass-dark border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl text-slate-400 group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual content - Creative 3D card effect */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
            }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main image container with modern card design */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-primary/30 shadow-glow">
                {/* Profile image - clear and sharp */}
                <div className="relative w-full h-full bg-gradient-to-br from-dark-800 to-dark-900">
                  <img
                    src="/profile-image.jpg"
                    alt="Muhammad Umer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%230ea5e9" width="400" height="400"/%3E%3Ctext fill="white" font-size="48" font-family="Arial" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EMU%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>

                {/* Subtle gradient overlay - only on bottom for depth */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950/60 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating tech badges */}
              <motion.div
                className="absolute -top-8 -right-8 glass-dark px-5 py-3 rounded-2xl border border-primary/30 shadow-glow"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <HiCode className="text-2xl text-primary" />
                  <div>
                    <p className="text-xs text-slate-400">Specialization</p>
                    <p className="text-sm font-bold text-white">Full Stack</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 glass-dark px-5 py-3 rounded-2xl border border-secondary/30 shadow-glow-orange"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <HiLightningBolt className="text-2xl text-secondary" />
                  <div>
                    <p className="text-xs text-slate-400">Expertise</p>
                    <p className="text-sm font-bold text-white">Mobile & Web</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-primary transition-colors group"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-colors"
            >
              <FaArrowDown className="text-primary" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;