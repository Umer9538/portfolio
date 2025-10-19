import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaAward, FaBriefcase } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      
      {/* Content container */}
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="section-heading mb-6">About Me</h2>
          <p className="text-light-dark max-w-2xl mx-auto">
            Get to know more about my background, education, and passion for software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - About content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-gradient">
              Full Stack Developer & Mobile App Specialist
            </h3>

            <p className="text-light-dark mb-6">
              I'm a passionate full-stack developer with expertise in mobile and web application development. Currently working as a Full Stack Developer at Chawla Solutions while pursuing my Bachelor's degree at FAST National University, I combine academic knowledge with hands-on industry experience to build scalable, user-centric applications.
            </p>

            <p className="text-light-dark mb-8">
              My expertise spans the entire development stack—from React and Node.js on the web to Flutter and React Native for mobile platforms. With previous experience at Driftmeta and ongoing freelance projects, I'm committed to delivering high-quality solutions and staying at the forefront of modern development technologies.
            </p>
            
            {/* Stats/highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <StatCard 
                icon={<FaGraduationCap className="text-primary" size={24} />}
                title="Education"
                value="Bachelor's in Software Engineering"
                detail="FAST National University"
              />
              
              <StatCard 
                icon={<FaAward className="text-primary" size={24} />}
                title="Awards"
                value="Multiple Hackathon Winner"
                detail="2023-2025"
              />
              
              <StatCard
                icon={<FaBriefcase className="text-primary" size={24} />}
                title="Current Role"
                value="Full Stack Developer"
                detail="Chawla Solutions"
              />
            </div>
            
            {/* CTA Button */}
            <div className="mt-8">
              <a 
                href="/resume.pdf" 
                className="btn-primary inline-flex items-center gap-2 shadow-glow"
                download="Muhammad_Umer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload size={16} /> Download Resume
              </a>
            </div>
          </motion.div>
          
          {/* Right column - Education and background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-dark-700 rounded-2xl p-8 border border-dark-600 shadow-lg">
              <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
                <FaGraduationCap className="text-primary" />
                <span>Education & Qualifications</span>
              </h3>
              
              <div className="space-y-8">
                <TimelineItem 
                  year="2021-Present"
                  title="Bachelor's in Software Engineering"
                  organization="FAST National University of Computing and Emerging Sciences"
                  description="Specializing in mobile app development and software engineering practices."
                />
                
                <TimelineItem 
                  year="2019-2021"
                  title="Intermediate in Computer Sciences"
                  organization="Superior Group of Colleges"
                  description="Developed a strong foundation in computer science fundamentals."
                />
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
                  <FaBriefcase className="text-primary" />
                  <span>Work Experience</span>
                </h3>
                <div className="space-y-6">
                  {/* Chawla Solutions Job Card */}
                  <div className="bg-dark-800 rounded-xl p-6 border border-primary-700/30 shadow-glow">
                    <div className="flex items-center gap-3 mb-2">
                      <FaBriefcase className="text-primary text-xl" />
                      <span className="text-primary-300 text-xs font-semibold bg-primary-900/30 px-2 py-1 rounded-full">Current</span>
                    </div>
                    <h4 className="text-lg font-bold text-light mb-1">Full Stack Developer</h4>
                    <div className="text-primary-400 text-sm font-medium mb-1">Chawla Solutions</div>
                    <div className="text-light-dark text-xs mb-3">August 2025 - Present</div>
                    <div className="text-light-dark text-sm mb-3">
                      Developing full-stack web and mobile applications with modern technologies, focusing on scalable architecture and user-centric design.
                    </div>
                    <div className="font-semibold text-light text-sm mb-2">Key Responsibilities:</div>
                    <ul className="list-disc pl-5 text-light-dark text-sm space-y-1">
                      <li>Building responsive web applications using React, Node.js, and modern frameworks</li>
                      <li>Developing mobile applications with Flutter and React Native</li>
                      <li>Implementing secure authentication systems and database management</li>
                      <li>Optimizing application performance and maintaining clean, maintainable code</li>
                    </ul>
                  </div>

                  {/* Driftmeta Job Card */}
                  <div className="bg-dark-800 rounded-xl p-6 border border-primary-700/20 shadow-glow">
                    <div className="flex items-center gap-3 mb-2">
                      <FaBriefcase className="text-primary text-xl" />
                      <span className="text-secondary-300 text-xs font-semibold bg-secondary-900/30 px-2 py-1 rounded-full">Previous</span>
                    </div>
                    <h4 className="text-lg font-bold text-light mb-1">Software Engineer in App Development</h4>
                    <div className="text-primary-400 text-sm font-medium mb-1">Driftmeta</div>
                    <div className="text-light-dark text-xs mb-3">May 2025 - October 2025</div>
                    <div className="text-light-dark text-sm mb-3">
                      Full stack and mobile app development, delivering scalable solutions and collaborating with cross-functional teams.
                    </div>
                    <div className="font-semibold text-light text-sm mb-2">Key Responsibilities:</div>
                    <ul className="list-disc pl-5 text-light-dark text-sm space-y-1">
                      <li>Developed and maintained scalable mobile and web applications</li>
                      <li>Collaborated with cross-functional teams to deliver product features</li>
                      <li>Implemented RESTful APIs and integrated third-party services</li>
                      <li>Participated in code reviews and agile development processes</li>
                    </ul>
                  </div>

                  {/* Freelance Job Card */}
                  <div className="bg-dark-800 rounded-xl p-6 border border-primary-700/20 shadow-glow">
                    <div className="flex items-center gap-3 mb-2">
                      <FaBriefcase className="text-primary text-xl" />
                      <span className="text-accent-300 text-xs font-semibold bg-accent-900/30 px-2 py-1 rounded-full">Ongoing</span>
                    </div>
                    <h4 className="text-lg font-bold text-light mb-1">Freelance Developer & Consultant</h4>
                    <div className="text-primary-400 text-sm font-medium mb-1">Self-employed</div>
                    <div className="text-light-dark text-xs mb-3">2023 - Present</div>
                    <div className="text-light-dark text-sm mb-3">
                      Working on Flutter, AI-based chatbots, and web security projects for various clients.
                    </div>
                    <div className="font-semibold text-light text-sm mb-2">Key Responsibilities:</div>
                    <ul className="list-disc pl-5 text-light-dark text-sm space-y-1">
                      <li>Developed custom mobile applications with real-time databases</li>
                      <li>Integrated Stripe payments, Firebase authentication, and AI-driven features</li>
                      <li>Provided security audits and code optimizations for existing applications</li>
                      <li>Collaborated with clients to understand business needs and deliver solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
                  <FaAward className="text-primary" />
                  <span>Key Achievements</span>
                </h3>
                
                <ul className="space-y-4">
                  <AchievementItem 
                    title="AI Hackathon Winner - DAIRA 2025"
                    description="Won 2nd position for training AI models in a competitive hackathon environment."
                  />
                  
                  <AchievementItem 
                    title="Hackathon Winner - GIKI (2025)"
                    description="Won 3rd place for developing a Flutter App in a competitive hackathon environment."
                  />
                  
                  <AchievementItem 
                    title="Software Sprint Winner - DAIRA (2024)"
                    description="Secured 1st place by building a high-performance software in a timed challenge."
                  />
                  
                  <AchievementItem 
                    title="Speed Programming Winner - NASCON (2023)"
                    description="Won a fast-paced coding competition by solving complex problems under time constraints."
                  />
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper components
const StatCard = ({ icon, title, value, detail }) => (
  <div className="bg-dark-700 rounded-lg p-4 border border-dark-600 hover:border-primary/20 transition-all duration-300 shadow-md hover:shadow-glow hover-lift">
    <div className="flex flex-col items-center text-center">
      <div className="mb-3">{icon}</div>
      <h4 className="text-sm text-light-dark mb-1">{title}</h4>
      <p className="font-medium text-light">{value}</p>
      <p className="text-xs text-light-dark mt-1">{detail}</p>
    </div>
  </div>
);

const TimelineItem = ({ year, title, organization, description }) => (
  <div className="relative pl-6 pb-2 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full before:z-10 after:content-[''] after:absolute after:left-1.5 after:top-3 after:bottom-0 after:w-[1px] after:bg-primary-900">
    <span className="text-sm text-primary-400 font-medium">{year}</span>
    <h4 className="text-lg font-medium text-light mt-1">{title}</h4>
    <p className="text-light-dark text-sm mt-1">{organization}</p>
    <p className="text-sm text-light-dark mt-2">{description}</p>
  </div>
);

const AchievementItem = ({ title, description }) => (
  <li className="flex gap-3">
    <span className="text-primary mt-1">•</span>
    <div>
      <h4 className="text-base font-medium text-light">{title}</h4>
      <p className="text-sm text-light-dark mt-1">{description}</p>
    </div>
  </li>
);

export default About;