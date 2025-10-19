import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-light-dark">
      {/* Top wave decoration */}
      <div className="w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-dark-800 fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">
              <span className="text-primary">MU</span><span className="text-accent">.</span>
            </h3>
            <p className="max-w-xs">
              Software Engineer specializing in Flutter development, creating engaging mobile applications and web solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialLink href="https://github.com/umer1321" icon={<FaGithub size={18} />} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/muhammad-umer" icon={<FaLinkedinIn size={18} />} label="LinkedIn" />
              <SocialLink href="mailto:muhammadumer7574@gmail.com" icon={<FaEnvelope size={18} />} label="Email" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-light font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#about" text="About Me" />
              <FooterLink href="#skills" text="Skills" />
              <FooterLink href="#projects" text="Projects" />
              <FooterLink href="#experience" text="Experience" />
              <FooterLink href="#contact" text="Contact" />
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-light font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="block text-primary mb-1">Email:</span>
                <a href="mailto:muhammadumer7574@gmail.com" className="hover:text-primary transition-colors">
                  muhammadumer7574@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-primary mb-1">Phone:</span>
                <a href="tel:+923127574084" className="hover:text-primary transition-colors">
                  +92-312-7574084
                </a>
              </li>
              <li>
                <span className="block text-primary mb-1">Location:</span>
                <span>Manawala, Faisalabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-dark-700 my-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} Muhammad Umer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-dark-800 hover:bg-primary hover:text-dark-900 text-light p-2 rounded-full transition-colors duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

const FooterLink = ({ href, text }) => (
  <li>
    <a 
      href={href} 
      className="transition-colors duration-300 hover:text-primary relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-primary before:rounded-full"
    >
      {text}
    </a>
  </li>
);

export default Footer;