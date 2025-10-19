import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCode, FaMobile, FaDatabase, FaTools,
  FaReact, FaGitAlt, FaDocker, FaPython,
  FaProjectDiagram, FaUsers, FaJava, FaHtml5,
  FaCss3Alt, FaNodeJs
} from 'react-icons/fa';
import {
  SiCplusplus, SiDart, SiFlutter,
  SiFirebase, SiMaterialdesign, SiSqlite,
  SiKotlin, SiReact, SiSwift, SiJavascript,
  SiTypescript, SiMongodb, SiPostgresql,
  SiC, SiPhp
} from 'react-icons/si';

// Skill categories
const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: <FaCode className="text-primary" size={20} />,
    skills: [
      { name: "JavaScript", level: 92, icon: <SiJavascript /> },
      { name: "TypeScript", level: 88, icon: <SiTypescript /> },
      { name: "Dart", level: 95, icon: <SiDart /> },
      { name: "Python", level: 85, icon: <FaPython /> },
      { name: "C++", level: 90, icon: <SiCplusplus /> },
      { name: "C", level: 85, icon: <SiC /> },
      { name: "Java", level: 80, icon: <FaJava /> },
      { name: "Kotlin", level: 85, icon: <SiKotlin /> },
      { name: "Swift", level: 75, icon: <SiSwift /> },
      { name: "PHP", level: 70, icon: <SiPhp /> },
      { name: "HTML5", level: 95, icon: <FaHtml5 /> },
      { name: "CSS3", level: 92, icon: <FaCss3Alt /> },
      { name: "SQL", level: 85, icon: <FaDatabase /> },
    ]
  },
  {
    id: "mobile",
    title: "Frameworks & Technologies",
    icon: <FaMobile className="text-primary" size={20} />,
    skills: [
      { name: "Flutter", level: 95, icon: <SiFlutter /> },
      { name: "React", level: 90, icon: <FaReact /> },
      { name: "React Native", level: 85, icon: <SiReact /> },
      { name: "Node.js", level: 88, icon: <FaNodeJs /> },
      { name: "Firebase", level: 90, icon: <SiFirebase /> },
      { name: "MongoDB", level: 85, icon: <SiMongodb /> },
      { name: "PostgreSQL", level: 82, icon: <SiPostgresql /> },
      { name: "SQLite", level: 80, icon: <SiSqlite /> },
      { name: "RESTful APIs", level: 90, icon: <FaDatabase /> },
      { name: "Material Design", level: 90, icon: <SiMaterialdesign /> },
    ]
  },
  {
    id: "engineering",
    title: "Software Engineering",
    icon: <FaTools className="text-primary" size={20} />,
    skills: [
      { name: "OOP", level: 90, icon: <FaProjectDiagram /> },
      { name: "Data Structures", level: 85, icon: <FaProjectDiagram /> },
      { name: "Algorithms", level: 85, icon: <FaCode /> },
      { name: "Design Patterns", level: 80, icon: <FaProjectDiagram /> },
      { name: "Git", level: 85, icon: <FaGitAlt /> },
      { name: "Agile", level: 85, icon: <FaUsers /> },
      { name: "Docker", level: 70, icon: <FaDocker /> },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCategoryChange = (categoryId) => {
    if (categoryId === activeCategory) return;
    setIsAnimating(true);
    setActiveCategory(categoryId);
    // Small delay to allow exit animation to complete
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Get the active category
  const activeSkills = skillCategories.find(cat => cat.id === activeCategory).skills;

  return (
    <section id="skills" className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary-900/20 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-secondary-900/20 to-transparent opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-heading mb-6">Technical Skills</h2>
          <p className="text-light-dark max-w-2xl mx-auto">
            A collection of programming languages, tools, and technologies I've worked with
            throughout my academic and professional journey.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-primary/20 text-primary border border-primary/30 shadow-glow'
                  : 'bg-dark-700 text-light-dark hover:bg-dark-600 border border-dark-600'
              }`}
              onClick={() => handleCategoryChange(category.id)}
              disabled={isAnimating}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="max-w-5xl mx-auto">
              {/* Tech skills grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {activeSkills.map((skill, index) => (
                  <SkillCard
                    key={`${activeCategory}-${index}`}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
              
              {/* Skill bars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activeSkills.map((skill, index) => (
                  <SkillBar
                    key={`${activeCategory}-bar-${index}`}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-glow hover-lift"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-primary mb-4 text-3xl">
          {skill.icon}
        </div>
        <h3 className="font-medium text-light text-lg mb-2">{skill.name}</h3>
        <div className="w-full bg-dark-700 rounded-full h-1.5 mb-1">
          <div 
            className="bg-primary h-1.5 rounded-full"
            style={{ width: `${skill.level}%` }}
          />
        </div>
        <span className="text-xs text-light-dark">{skill.level}%</span>
      </div>
    </motion.div>
  );
};

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: "auto" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-primary text-xl">{skill.icon}</span>
          <h3 className="font-medium text-light">{skill.name}</h3>
        </div>
        <span className="text-sm text-light-dark">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-dark-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary-700 to-primary h-2 rounded-full relative"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-primary shadow-glow-lg"></span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;