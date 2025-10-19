import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const experiences = [
  {
    id: 0,
    title: "Full Stack Developer",
    company: "Chawla Solutions",
    period: "August 2025 - Present",
    description: "Developing full-stack web and mobile applications with modern technologies, focusing on scalable architecture and user-centric design.",
    responsibilities: [
      "Building responsive web applications using React, Node.js, and modern frameworks",
      "Developing mobile applications with Flutter and React Native",
      "Implementing secure authentication systems and database management",
      "Collaborating with design and product teams to deliver high-quality solutions",
      "Optimizing application performance and maintaining clean, maintainable code"
    ],
    icon: <FaBriefcase className="text-primary" size={24} />,
    type: "Work"
  },
  {
    id: 1,
    title: "Software Engineer in App Development",
    company: "Driftmeta",
    period: "May 2025 - October 2025",
    description: "Full stack and mobile app development, delivering scalable solutions and collaborating with cross-functional teams.",
    responsibilities: [
      "Developed and maintained scalable mobile and web applications",
      "Collaborated with cross-functional teams to deliver product features",
      "Implemented RESTful APIs and integrated third-party services",
      "Participated in code reviews and agile development processes"
    ],
    icon: <FaBriefcase className="text-primary" size={24} />,
    type: "Work"
  },
  {
    id: 2,
    title: "Freelance Developer & Consultant",
    company: "Self-employed",
    period: "2023 - Present",
    description: "Working on Flutter, AI-based chatbots, and web security projects for various clients.",
    responsibilities: [
      "Developed custom mobile applications with real-time databases",
      "Integrated Stripe payments, Firebase authentication, and AI-driven features",
      "Provided security audits and code optimizations for existing applications",
      "Collaborated with clients to understand business needs and deliver customized solutions",
      "Maintained ongoing relationships with clients for updates and feature additions"
    ],
    icon: <FaBriefcase className="text-primary" size={24} />,
    type: "Work"
  },
  {
    id: 3,
    title: "Admin Head",
    company: "FAST Club of App Development Society (FCAP)",
    period: "2023 - 2025",
    description: "Leading the app development society at FAST National University, CFD Campus.",
    responsibilities: [
      "Leading a team of 70+ student members",
      "Organizing workshops, hackathons, and training sessions",
      "Facilitating collaboration between students and industry professionals",
      "Mentoring junior members in mobile app development",
      "Coordinating with other clubs and societies for collaborative events"
    ],
    icon: <FaUsers className="text-primary" size={24} />,
    type: "Leadership"
  },
  {
    id: 4,
    title: "Open Source Contributor",
    company: "GitHub",
    period: "2022 - Present",
    description: "Contributing to open-source Flutter packages and libraries.",
    responsibilities: [
      "Submitted pull requests to improve existing Flutter packages",
      "Developed custom widgets and shared them with the community",
      "Participated in code reviews and bug fixing",
      "Published technical guides and tutorials",
      "Collaborated with developers globally on solving complex issues"
    ],
    icon: <FaCode className="text-primary" size={24} />,
    type: "Open Source"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-heading mb-6">Experience</h2>
          <p className="text-light-dark max-w-2xl mx-auto">
            My professional journey and roles that have shaped my skills and expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/10"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, margin: "-100px" }}
            ></motion.div>
            
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <ExperienceItem 
                  key={experience.id} 
                  experience={experience} 
                  index={index}
                  isEven={index % 2 === 0} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ experience, index, isEven }) => {
  // Mobile layout is always the same (icon on left)
  // Desktop layout alternates sides
  return (
    <div className="relative">
      {/* Timeline dot */}
      <motion.div 
        className="absolute left-0 md:left-1/2 w-10 h-10 bg-dark-800 rounded-full border-2 border-primary transform -translate-x-1/2 flex items-center justify-center z-10 shadow-glow"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: index * 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {experience.icon}
      </motion.div>
      {/* Content */}
      <motion.div
        className={`md:w-1/2 pt-3 pb-6 ${
          isEven 
            ? 'md:pr-12 md:pl-0 ml-12 md:ml-auto md:text-right' 
            : 'md:pl-12 md:pr-0 ml-12 md:ml-0'
        }`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="bg-dark-800 p-6 rounded-xl shadow-lg border border-dark-700 hover:border-primary/20 transition-all duration-300 hover:shadow-glow text-left">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
            experience.type === "Work" ? "bg-primary/20 text-primary-300" :
            experience.type === "Leadership" ? "bg-secondary/20 text-secondary-300" :
            "bg-accent/20 text-accent-300"
          }`}>
            {experience.type}
          </span>
          <h3 className="text-xl font-bold text-light mb-1">
            {experience.title}
          </h3>
          <div className={`flex items-center gap-2 mb-3 text-light-dark text-sm`}>
            <span className="font-medium text-primary-400">{experience.company}</span>
          </div>
          <div className={`flex items-center gap-2 mb-4 text-light-dark text-sm`}>
            <FaCalendarAlt className="text-primary-400" size={12} />
            <span>{experience.period}</span>
          </div>
          <p className="text-light-dark mb-4">
            {experience.description}
          </p>
          <h4 className="text-sm font-semibold mb-2 text-light">Key Responsibilities:</h4>
          <ul className={`text-sm text-light-dark space-y-1`}> 
            {experience.responsibilities.map((responsibility, i) => (
              <li key={i} className={`flex items-start`}>
                <span className="text-primary mr-2">•</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;