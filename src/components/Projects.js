import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaTags } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { HiSparkles } from 'react-icons/hi';

// Projects data
const projectsData = [
  {
    id: 1,
    title: "Build Buddy",
    subtitle: "Construction Management Platform",
    description: "A comprehensive mobile application streamlining the home construction process by connecting homeowners, contractors, architects, and vendors in a unified ecosystem.",
    image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=700&auto=format&fit=crop",
    category: "Mobile App",
    technologies: ["Flutter", "Firebase", "MVVM", "Provider"],
    features: [
      "Implemented Flutter (MVVM architecture) with Firebase for authentication and data storage",
      "Developed project management, vendor integration, contractor selection, and communication tools",
      "Real-time updates and notifications for project status changes",
      "Multi-role user system with different permissions and views",
      "Secure payment processing and milestone tracking"
    ],
    github: "https://github.com/umer1321/build-buddy",
    live: null,
    isFeatured: true,
    year: "2025"
  },
  {
    id: 2,
    title: "Mershad",
    subtitle: "AI-Powered Tour Guide",
    description: "An AI-driven travel assistant tailored for Saudi Arabian tourists, ensuring compliance with national regulations while providing a seamless travel experience.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=700&auto=format&fit=crop",
    category: "Mobile App",
    technologies: ["Flutter", "Firebase", "Absher API", "Nafath API"],
    features: [
      "Provides hotel booking, activity management, car rental, and transportation access",
      "Integrates Absher and Nafath for a fully compliant car rental system",
      "Features currency exchange, restaurant bookings, and emergency contact options",
      "Solves destination exploration challenges and booking system integration issues",
      "Multilingual support with cultural sensitivity features"
    ],
    github: "https://github.com/umer1321/mershad",
    live: null,
    isFeatured: true,
    year: "2025"
  },
  {
    id: 3,
    title: "GroceryMate",
    subtitle: "Smart Shopping Assistant",
    description: "A smart grocery list app that simplifies shopping with real-time updates and collaborative features, designed for families and roommates.",
    image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=700&auto=format&fit=crop",
    category: "Mobile App",
    technologies: ["Flutter", "Firebase", "Barcode API", "Speech-to-Text"],
    features: [
      "Built with Flutter & Firebase, allowing users to create, share, and manage grocery lists",
      "Integrated barcode scanning for easy item addition",
      "Implemented speech-to-text input for faster list creation",
      "Real-time synchronization across multiple devices",
      "Budget tracking and price comparison features"
    ],
    github: "https://github.com/umer1321/grocerymate",
    live: null,
    isFeatured: false,
    year: "2023"
  },
  {
    id: 4,
    title: "HealthSync",
    subtitle: "Personal Health Tracker",
    description: "A comprehensive mobile application for monitoring fitness, diet, and health records with personalized insights and medical integration.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=700&auto=format&fit=crop",
    category: "Mobile App",
    technologies: ["Flutter", "Google Fit API", "Firebase", "Chatbot"],
    features: [
      "Flutter app for fitness, diet, and health tracking",
      "Uses Google Fit API, with diet tracking & reminders",
      "Integrated chatbot & telemedicine booking",
      "Custom health dashboard with visualization of health metrics",
      "Secure medical records storage and sharing"
    ],
    github: "https://github.com/umer1321/healthsync",
    live: null,
    isFeatured: false,
    year: "2024"
  },
  {
    id: 5,
    title: "TaskFlow",
    subtitle: "Project Management App",
    description: "A React Native project management application with real-time collaboration, task tracking, and team communication features.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=700&auto=format&fit=crop",
    category: "Mobile App",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    features: [
      "Built with React Native for cross-platform mobile development",
      "Real-time task updates and team collaboration features",
      "Integrated chat system with file sharing capabilities",
      "Project timeline visualization and milestone tracking",
      "Push notifications for task deadlines and updates"
    ],
    github: "https://github.com/umer1321/taskflow",
    live: null,
    isFeatured: false,
    year: "2024"
  },
  {
    id: 6,
    title: "EcoTracker",
    subtitle: "Environmental Impact Monitor",
    description: "A React Native app that helps users track their carbon footprint and environmental impact through daily activities.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=700&auto=format&fit=crop",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Maps API", "Charts"],
    features: [
      "Carbon footprint calculation based on daily activities",
      "Interactive maps showing environmental impact data",
      "Real-time data visualization with charts and graphs",
      "Social features for sharing environmental achievements",
      "Integration with wearable devices for activity tracking"
    ],
    github: "https://github.com/umer1321/ecotracker",
    live: null,
    isFeatured: false,
    year: "2024"
  },
  {
    id: 7,
    title: "SecureVault",
    subtitle: "Password Manager",
    description: "A native Android password manager built with Kotlin, featuring biometric authentication and secure encryption.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=700&auto=format&fit=crop",
    category: "Mobile App",
    technologies: ["Kotlin", "Android SDK", "Room Database", "Biometric API"],
    features: [
      "Native Android development with Kotlin and Android SDK",
      "Biometric authentication using fingerprint and face recognition",
      "AES-256 encryption for secure password storage",
      "Auto-fill functionality for web and app passwords",
      "Secure backup and sync across devices"
    ],
    github: "https://github.com/umer1321/securevault",
    live: null,
    isFeatured: false,
    year: "2024"
  },
  {
    id: 8,
    title: "FitnessTracker",
    subtitle: "Workout Companion",
    description: "A Java-based Android fitness tracking application with workout planning, progress monitoring, and social features.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=700&auto=format&fit=crop",
    category: "Mobile App",
    technologies: ["Java", "Android SDK", "SQLite", "Google Fit API"],
    features: [
      "Native Android development with Java and Android SDK",
      "Workout planning and exercise library with video guides",
      "Progress tracking with detailed analytics and charts",
      "Integration with Google Fit for comprehensive health data",
      "Social features for sharing achievements and challenges"
    ],
    github: "https://github.com/umer1321/fitnesstracker",
    live: null,
    isFeatured: false,
    year: "2023"
  },
  {
    id: 9,
    title: "DevConnect",
    subtitle: "Developer Networking Platform",
    description: "A MERN stack web application connecting developers worldwide for collaboration, mentorship, and project sharing.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=700&auto=format&fit=crop",
    category: "Web App",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Full-stack MERN application with React frontend and Node.js backend",
      "Real-time messaging and video calling capabilities",
      "Project collaboration tools with code sharing and review",
      "Developer profile system with skill endorsements",
      "Job board integration for freelance opportunities"
    ],
    github: "https://github.com/umer1321/devconnect",
    live: "https://devconnect.umer.dev",
    isFeatured: true,
    year: "2024"
  },
  {
    id: 10,
    title: "EduTech",
    subtitle: "Learning Management System",
    description: "A comprehensive MERN stack educational platform with course management, student progress tracking, and interactive learning tools.",
    image: "https://images.unsplash.com/photo-1523240798132-0051454a0ea7?q=80&w=700&auto=format&fit=crop",
    category: "Web App",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Complete MERN stack learning management system",
      "Course creation and management with multimedia content",
      "Student progress tracking and assessment tools",
      "Interactive quizzes and real-time feedback system",
      "Video conferencing integration for virtual classrooms"
    ],
    github: "https://github.com/umer1321/edutech",
    live: "https://edutech.umer.dev",
    isFeatured: true,
    year: "2024"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : filter === 'web'
      ? projectsData.filter(project => project.category.toLowerCase().includes('web'))
      : projectsData.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Open project modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Close project modal
  const closeProjectModal = () => {
    setIsModalOpen(false);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 glass-dark rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <BiCodeAlt className="text-primary" />
            <span className="text-sm text-slate-400">Featured Work</span>
          </motion.div>

          <h2 className="section-heading mb-6">Projects That Define Me</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A curated selection of projects showcasing my expertise in full-stack development,
            mobile applications, and creative problem-solving.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
            All Work
          </FilterButton>
          <FilterButton active={filter === 'mobile app'} onClick={() => setFilter('mobile app')}>
            Mobile Apps
          </FilterButton>
          <FilterButton active={filter === 'web'} onClick={() => setFilter('web')}>
            Web Apps
          </FilterButton>
        </div>

        {/* Projects Grid - Modern Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => openProjectModal(project)}
                className={project.isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
          >
            <motion.div 
              className="bg-dark-800 max-w-4xl w-full rounded-xl shadow-2xl border border-dark-700 overflow-hidden max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent z-10"></div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 z-20 bg-dark-800/70 p-2 rounded-full text-light hover:text-primary transition-colors"
                  aria-label="Close modal"
                >
                  <IoClose size={24} />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-primary-400 mb-2">
                  <span className="text-sm font-medium">{selectedProject.category}</span>
                  <span>•</span>
                  <span className="text-sm">{selectedProject.year}</span>
                </div>
                
                <h3 className="text-3xl font-display font-bold text-light mb-1">{selectedProject.title}</h3>
                <h4 className="text-xl text-light-dark mb-6">{selectedProject.subtitle}</h4>
                
                <p className="text-light-dark mb-8">{selectedProject.description}</p>
                
                {/* Technologies */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3 text-light">
                    <BiCodeAlt size={20} className="text-primary" />
                    <h4 className="font-semibold">Technologies Used</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-sm bg-dark-700 text-primary-300 px-3 py-1 rounded-full border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3 text-light">
                    <FaTags size={16} className="text-primary" />
                    <h4 className="font-semibold">Key Features</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-light-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Project Links */}
                <div className="flex flex-wrap gap-4 mt-8 pt-4 border-t border-dark-700">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center gap-2 py-2 text-sm"
                    >
                      <FaGithub /> View Source Code
                    </a>
                  )}
                  
                  {selectedProject.live && (
                    <a 
                      href={selectedProject.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2 py-2 text-sm"
                    >
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const FilterButton = ({ active, onClick, children }) => (
  <motion.button
    className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden ${
      active
        ? 'text-white shadow-glow'
        : 'text-slate-400 hover:text-white glass-dark border border-primary/20'
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {active && (
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
        layoutId="activeFilter"
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
    <span className="relative z-10">{children}</span>
  </motion.button>
);

const ProjectCard = ({ project, index, onClick, className = '' }) => {
  const isFeatured = project.isFeatured;

  return (
    <motion.div
      className={`group relative rounded-2xl overflow-hidden cursor-pointer h-full ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-50px" }}
      onClick={onClick}
      whileHover={{ y: -8 }}
    >
      {/* Card Container with Glass Effect */}
      <div className={`relative h-full glass-card border border-primary/10 group-hover:border-primary/30 transition-all duration-500 ${isFeatured ? 'min-h-[500px]' : 'min-h-[450px]'}`}>
        {/* Project Image */}
        <div className={`relative overflow-hidden ${isFeatured ? 'h-72' : 'h-56'}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent z-10"></div>

          {isFeatured && (
            <div className="absolute top-4 left-4 z-20">
              <div className="flex items-center gap-2 glass-dark px-3 py-1.5 rounded-full border border-primary/30">
                <HiSparkles className="text-primary text-sm" />
                <span className="text-xs font-semibold text-white">Featured</span>
              </div>
            </div>
          )}

          <div className="absolute top-4 right-4 z-20 glass-dark px-3 py-1.5 rounded-full border border-primary/20">
            <span className="text-xs font-medium text-slate-300">{project.year}</span>
          </div>

          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Project Info */}
        <div className="p-6 space-y-4">
          {/* Category Badge */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-xs font-medium text-primary uppercase tracking-wider">{project.category}</span>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-gradient transition-colors line-clamp-1">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 line-clamp-1">{project.subtitle}</p>
          </div>

          {/* Description */}
          <p className={`text-slate-400 leading-relaxed ${isFeatured ? 'line-clamp-3' : 'line-clamp-2'}`}>
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, isFeatured ? 4 : 3).map((tech, i) => (
              <span
                key={i}
                className="text-xs glass-dark px-3 py-1.5 rounded-lg border border-primary/10 text-primary-300 font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (isFeatured ? 4 : 3) && (
              <span className="text-xs glass-dark px-3 py-1.5 rounded-lg border border-primary/10 text-slate-400">
                +{project.technologies.length - (isFeatured ? 4 : 3)}
              </span>
            )}
          </div>

          {/* View More */}
          <div className="pt-4 flex items-center justify-between border-t border-primary/10">
            <span className="text-sm font-medium text-slate-400 group-hover:text-primary transition-colors">
              View Project
            </span>
            <motion.div
              className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              whileHover={{ x: 5 }}
            >
              <FaArrowRight className="text-primary text-sm" />
            </motion.div>
          </div>
        </div>

        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;