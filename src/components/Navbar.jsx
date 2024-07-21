import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const NavItem = ({ to, children, onClick }) => (
  <li className="relative group">
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-white group-hover:text-secondary transition-colors duration-300 ${
          isActive ? "text-secondary" : ""
        }`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
  </li>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="">
          <img
            src="src\assets\logo.svg"
            alt="Logo"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block backdrop-blur-md bg-white/10 border border-secondary rounded-full px-6 py-3">
          <ul className="flex justify-between gap-6 font-playfair font-bold">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About me</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <NavItem to="/projects">Projects</NavItem>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4 text-3xl text-white">
          <a
            href="https://github.com/Vansh5632"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-gilhotra-059762220/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden backdrop-blur-md bg-white/10 border border-secondary rounded-b-lg px-6 py-4">
          <ul className="flex flex-col gap-4 font-playfair font-bold">
            <NavItem to="/" onClick={toggleMenu}>
              Home
            </NavItem>
            <NavItem to="/about" onClick={toggleMenu}>
              About me
            </NavItem>
            <NavItem to="/contact" onClick={toggleMenu}>
              Contact
            </NavItem>
            <NavItem to="/projects" onClick={toggleMenu}>
              Projects
            </NavItem>
          </ul>
          <div className="flex gap-4 text-3xl text-white mt-4">
            <a
              href="https://github.com/Vansh5632"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vansh-gilhotra-059762220/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
