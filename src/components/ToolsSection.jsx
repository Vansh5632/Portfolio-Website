import React, { useState } from 'react';
import { FaGithub, FaCode, FaAndroid, FaPython, FaStickyNote, FaFigma } from 'react-icons/fa';

const tools = [
  {
    title: 'Git and GitHub',
    description: 'Version control and collaboration platform.',
    icon: <FaGithub className="text-4xl" />,
  },
  {
    title: 'VS Code',
    description: 'Code editor with support for debugging, version control, and more.',
    icon: <FaCode className="text-4xl" />,
  },
  {
    title: 'Android Studio',
    description: 'Integrated development environment for Android app development.',
    icon: <FaAndroid className="text-4xl" />,
  },
  {
    title: 'Jupyter Notebook',
    description: 'Web-based interactive computing environment.',
    icon: <FaPython className="text-4xl" />,
  },
  {
    title: 'Notion',
    description: 'All-in-one workspace for notes, tasks, and collaboration.',
    icon: <FaStickyNote className="text-4xl" />,
  },
  {
    title: 'Figma',
    description: 'Interface design tool for team collaboration.',
    icon: <FaFigma className="text-4xl" />,
  },
];

const ToolCard = ({ tool }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-8 m-6 w-full md:w-1/3 lg:w-1/4 transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
      style={{
        backgroundColor: isHovered ? '#88D8B0' : '#2C3E50',
        color: isHovered ? '#2C3E50' : '#FFFFFF',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center mb-6">
        {React.cloneElement(tool.icon, {
          style: { color: isHovered ? '#2C3E50' : '#FFC107' }
        })}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-center">{tool.title}</h3>
      <p className="text-center">{tool.description}</p>
    </div>
  );
};

const ToolsSection = () => {
  return (
    <section className="py-24" style={{ backgroundColor: '#1A2A3A' }}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-white">Tools</h2>
        <div className="flex flex-wrap justify-center -mx-6">
          {tools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;