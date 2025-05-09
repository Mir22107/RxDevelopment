import React from 'react';
import { Github, Dribbble, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-light py-12 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="space-y-6">
            <Logo />
            <p className="text-secondary">
              Creating beautiful, functional websites that help businesses achieve their goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Dribbble size={20} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-secondary hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-secondary hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-secondary hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-secondary hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-secondary hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-secondary">
                San Francisco, CA
              </li>
              <li>
                <a href="mailto:hello@rxdesign.com" className="text-secondary hover:text-primary transition-colors">
                  hello@rxdesign.com
                </a>
              </li>
              <li>
                <a href="tel:+12345678901" className="text-secondary hover:text-primary transition-colors">
                  +1 (234) 567-8901
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-primary/10 text-center md:flex md:items-center md:justify-between">
          <p className="text-secondary text-sm">
            © {currentYear} RX Design. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              <li>
                <a href="#" className="text-secondary text-sm hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-sm hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;