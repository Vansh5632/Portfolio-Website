import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from 'react-typed';

const AnimatedElement = ({ children, delay = 2 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-primary text-white flex items-center">
      <div className="relative z-10 flex w-full px-8 md:px-16 lg:px-24">
        <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-4">
          <AnimatedElement>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm Vansh
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={200}>
            <ReactTyped
              strings={[
                'Developer',
                'Learner',
                'Freelancer',
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
              className="text-2xl md:text-3xl lg:text-4xl text-secondary"
            />
          </AnimatedElement>
          <AnimatedElement delay={400}>
            <p className="text-lg md:text-xl lg:text-2xl">
              I create amazing web experiences, build responsive websites, and develop interactive applications.
            </p>
          </AnimatedElement>
          <AnimatedElement delay={600}>
            <button className="bg-accent hover:bg-opacity-80 text-primary font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg mt-7">
              <a href="/projects">View my Work</a>
            </button>
          </AnimatedElement>
        </div>
        <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
          <AnimatedElement>
            <img
              src='/assets/image1.jpg' // Replace this URL with your actual image URL
              alt="Sample"
              className="w-3/4 h-auto rounded-lg shadow-lg border-2 border-highlight"
            />
          </AnimatedElement>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#88D8B0"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
