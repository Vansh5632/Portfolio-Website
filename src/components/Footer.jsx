import React from 'react';
import {FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-wrap justify-between">
          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-secondary hover:underline">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-secondary hover:underline">About</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-secondary hover:underline">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/projects" className="text-secondary hover:underline">Projects</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Follow Me</h2>
            <div className="flex space-x-4">
              <a href="https://github.com/Vansh5632" className="text-secondary hover:text-accent">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://x.com/gilhotravansh7" className="text-secondary hover:text-accent">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/vansh-gilhotra-059762220/" className="text-secondary hover:text-accent">
                <FaLinkedin className="w-6 h-6" />
              </a>
              
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <p className="mb-2">Email: vanshgilhotra8885@gmail.com</p>
            <p className="mb-2">Phone: +91 9050138050</p>
            <p>Address: Jalandhar,Punjab,India</p>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2024 Vansh Gilhotra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
