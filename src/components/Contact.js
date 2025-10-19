// To use this, run: npm install emailjs-com
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      await emailjs.send(
        'umer', // Service ID
        'template_c19t18l', // Template ID
        {
          from_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'wiztZviVW-RCTK8B7' // Public Key
      );
      setSubmitStatus({ success: true, message: "Message sent successfully! I'll get back to you as soon as possible." });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({ success: false, message: "There was an error sending your message. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-primary-900/10 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-secondary-900/10 to-transparent opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-heading mb-6">Get In Touch</h2>
          <p className="text-light-dark max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-display font-semibold mb-8 text-light">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              <ContactItem 
                icon={<FaEnvelope />} 
                title="Email" 
                content="muhammadumer7574@gmail.com" 
                link="mailto:muhammadumer7574@gmail.com"
              />
              
              <ContactItem 
                icon={<FaPhoneAlt />} 
                title="Phone" 
                content="+92-312-7574084" 
                link="tel:+923127574084"
              />
              
              <ContactItem 
                icon={<FaMapMarkerAlt />} 
                title="Location" 
                content="Manawala, Faisalabad, Pakistan" 
              />
            </div>
            
            <h3 className="text-xl font-display font-semibold mb-6 text-light">Connect With Me</h3>
            
            <div className="flex space-x-5">
              <a 
                href="https://github.com/umer1321" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-700 text-light hover:text-primary hover:bg-dark-600 p-3 rounded-full transition-colors"
              >
                <FaGithub size={20} />
              </a>
              
              <a 
                href="https://linkedin.com/in/muhammad-umer" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-700 text-light hover:text-primary hover:bg-dark-600 p-3 rounded-full transition-colors"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
            
            {/* Availability indicator */}
            <div className="mt-12 p-6 bg-dark-700 rounded-xl border border-dark-600 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></div>
                <h4 className="text-light font-medium">Currently Available</h4>
              </div>
              <p className="text-light-dark text-sm">
                I'm currently available for freelance work and new opportunities. 
                Feel free to reach out if you have a project in mind or just want to say hello!
              </p>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-dark-700 rounded-xl p-8 border border-dark-600 shadow-lg">
              <h3 className="text-2xl font-display font-semibold mb-8 text-light">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-light-dark mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-light placeholder-dark-400"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-light-dark mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-light placeholder-dark-400"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-light-dark mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-light placeholder-dark-400"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-light-dark mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-light placeholder-dark-400 resize-none"
                    placeholder="Hello, I'd like to discuss a project..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-primary text-light rounded-lg shadow-glow transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-600'
                  }`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </motion.button>
                
                {submitStatus && (
                  <motion.div 
                    className={`mt-6 p-4 rounded-lg ${
                      submitStatus.success ? 'bg-secondary-900/30 text-secondary-300' : 'bg-accent-900/30 text-accent-300'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, content, link }) => (
  <div className="flex items-start group">
    <div className="w-12 h-12 bg-dark-700 text-primary rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-dark-800 transition-all duration-300 shadow-lg">
      {icon}
    </div>
    
    <div>
      <h4 className="text-light font-medium mb-1">{title}</h4>
      {link ? (
        <a href={link} className="text-light-dark hover:text-primary transition-colors">
          {content}
        </a>
      ) : (
        <p className="text-light-dark">{content}</p>
      )}
    </div>
  </div>
);

export default Contact;