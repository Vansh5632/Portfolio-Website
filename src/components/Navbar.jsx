import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa6';

const NavItem = ({ children }) => (
  <li className="relative group">
    <a href="#" className="text-white group-hover:text-secondary transition-colors duration-300">
      {children}
    </a>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
  </li>
);

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-white">Logo</div>
        <nav className="backdrop-blur-md bg-white/10 border border-secondary rounded-full px-6 py-3">
          <ul className="flex justify-between gap-6 font-playfair font-bold">
            <NavItem>Home</NavItem>
            <NavItem>About me</NavItem>
            <NavItem>Contact</NavItem>
            <NavItem>Projects</NavItem>
          </ul>
        </nav>
        <div className="flex gap-4 text-3xl text-white hover:text-secondary transition-colors duration-300">
          <FaGithub />
          <FaLinkedin/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;