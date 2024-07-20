import React from 'react';

const skills = [
  {
    title: 'Web Development with MERN Stack',
    description: 'Experienced in building web applications using MongoDB, Express.js, React.js, and Node.js.',
    image: 'https://cdn.iconscout.com/icon/free/png-256/mern-1-1175135.png'
  },
  {
    title: 'Data Structures and Algorithms in C++',
    description: 'Proficient in implementing various data structures and algorithms using C++.',
    image: 'https://cdn.iconscout.com/icon/free/png-256/cpp-1-1175245.png'
  },
  {
    title: 'Android Development with Kotlin',
    description: 'Skilled in developing Android applications using Kotlin.',
    image: 'https://cdn.iconscout.com/icon/free/png-256/android-2260320-1888903.png'

  },
];

const SkillCard = ({ skill }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
    <div className="bg-secondary h-48 flex items-center justify-center p-6">
      <img src={skill.image} alt={skill.title} className="h-32 w-32 object-contain" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-primary">{skill.title}</h3>
      <p className="text-gray-700">{skill.description}</p>
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section className="bg-gradient-to-b from-primary to-accent py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;