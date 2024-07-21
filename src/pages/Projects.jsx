import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
    {
        title: 'Task Manager',
        description: 'A task manager project that helps users organize and track their tasks. Users can create, update, and delete tasks, set due dates, and mark tasks as completed. The project utilizes React for the frontend, Node.js for the backend, and MongoDB for the database.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/yourusername/task-manager',
        liveDemo: 'https://your-task-manager-demo.com',
        image: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg'
    },
    {
        title: 'YouTube Clone',
        description: 'A YouTube clone project that utilizes the YouTube API for data fetching. This project replicates core YouTube functionalities, providing users with a familiar video browsing and watching experience.',
        technologies: ['React', 'YouTube API', 'Axios', 'Styled Components'],
        github: 'https://github.com/yourusername/youtube-clone',
        liveDemo: 'https://your-youtube-clone-demo.com',
        image: 'https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png'
    },
    {
        title: 'Carbee',
        description: 'Carbee is a full-stack project for car enthusiasts. It features a comprehensive user authentication system with signup and login functionality. Users can share, discuss, and explore various aspects of car culture.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        github: 'https://github.com/yourusername/carbee',
        liveDemo: 'https://carbee-demo.com',
        image: 'https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.png'
    },
    {
        title: 'Calculator',
        description: 'A calculator project that performs basic arithmetic operations. Users can add, subtract, multiply, and divide numbers.',
        technologies: ['Kotlin'],
        github: 'https://github.com/yourusername/calculator',
        liveDemo: 'https://your-calculator-demo.com',
        image: 'https://cdn.pixabay.com/photo/2015/09/01/09/33/calculator-916438_1280.png'
    },
    {
        title: 'New Project',
        description: 'This is a new project description.',
        technologies: ['React', 'Node.js'],
        github: 'https://github.com/yourusername/new-project',
        liveDemo: 'https://your-new-project-demo.com',
        image: 'https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450_1280.jpg'
    },
    // Add more projects here
];

const Projects = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24" style={{ backgroundColor: '#2C3E50' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-16" style={{ color: '#FFC107' }}>
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;