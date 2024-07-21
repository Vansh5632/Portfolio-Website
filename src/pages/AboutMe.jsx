import React from 'react';
import { FaCode, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';
import Wave from 'react-wavify';

const AboutMe = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary to-secondary py-20 overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <Wave 
          fill="rgba(136, 216, 176, 0.2)" // accent color with opacity
          options={{ 
            height: 20, 
            amplitude: 30, 
            speed: 0.15, 
            points: 4 
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-highlight">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Profile Image */}
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-highlight shadow-lg bg-white">
            <img 
              src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg"
              alt="Developer Doodle" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Me Text */}
          <div className="max-w-2xl text-center md:text-left bg-primary/50 backdrop-blur-md p-6 rounded-lg text-gray-100">
            <p className="text-lg mb-6">
              Hello! I'm <span className="font-bold text-highlight">Vansh Gilhotra</span>, a student at the National Institute of Technology, Jalandhar (NITJ), and a passionate web developer. I have a strong foundation in data structures and algorithms, particularly in C++, which I continuously leverage to solve complex problems efficiently.
            </p>
            <p className="text-lg mb-6">
              In addition to my academic pursuits, I work as a freelancer, helping clients bring their web development projects to life. My freelance work has given me practical experience and honed my skills in creating responsive and user-friendly websites.
            </p>
            <p className="text-lg">
              I am constantly learning and exploring new technologies to stay updated with the latest trends in web development. Whether it's designing a professional portfolio, building a YouTube clone, or creating a task manager web app, I am always excited to take on new challenges and deliver high-quality results.
            </p>
          </div>
        </div>

        {/* Skills/Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard 
            icon={<FaCode />}
            title="Web Development"
            description="Proficient in MERN stack and responsive design"
          />
          <SkillCard 
            icon={<FaLaptopCode />}
            title="Freelancing"
            description="Experience in delivering client projects"
          />
          <SkillCard 
            icon={<FaUserGraduate />}
            title="Continuous Learning"
            description="Always exploring new technologies and trends"
          />
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <Wave 
          fill="rgba(136, 216, 176, 0.2)" // accent color with opacity
          options={{ 
            height: 20, 
            amplitude: 30, 
            speed: 0.15, 
            points: 4 
          }}
        />
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, description }) => {
  return (
    <div className="bg-primary/50 backdrop-blur-md rounded-lg p-6 text-center transform transition duration-500 hover:scale-105 hover:bg-secondary/50">
      <div className="text-4xl mb-4 text-highlight">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-highlight">{title}</h3>
      <p className="text-gray-100">{description}</p>
    </div>
  );
};

export default AboutMe;