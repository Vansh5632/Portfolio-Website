import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-4 border-transparent group"
      style={{ borderColor: isHovered ? '#FFC107' : 'transparent' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
        />
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-xl font-bold px-4 py-2 bg-highlight rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              View Project
            </span>
          </div>
        </a>
      </div>
      <div className="p-6 relative">
        <h3 className="text-2xl font-bold mb-2 text-primary group-hover:text-highlight transition-colors duration-300">{project.title}</h3>
        <p className="text-gray-700 mb-4 transition-all duration-300 group-hover:text-gray-900">{project.description}</p>
        <div className="mb-4 overflow-hidden">
          <h4 className="text-lg font-semibold mb-2 text-secondary">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-100">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="rounded-full px-3 py-1 text-sm font-semibold transition-all duration-300 hover:scale-110" 
                style={{ backgroundColor: '#88D8B0', color: '#2C3E50' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center transition-all duration-300 hover:text-highlight hover:translate-x-1" 
            style={{ color: '#2C3E50' }}
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a 
            href={project.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center transition-all duration-300 hover:text-highlight hover:translate-x-1" 
            style={{ color: '#2C3E50' }}
          >
            <FaExternalLinkAlt className="mr-2" />
            Live Demo
          </a>
        </div>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaInfoCircle className="text-2xl text-highlight animate-pulse" />
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    liveDemo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
