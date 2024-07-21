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
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEA4ODg0TEA0PEw0NDg4QFw8SDQ0WFREWGBURExUYKCgiJB0xJRMTLTEiJSkrLi4uFx8zPjMtNygwLjcBCgoKDg0OGxAQGzcjICM3LTAwLjI3KystMy8wNS0rLTc3Ly0tLSs3LTgrLS0tMDU1LS0tNzIuKzY3LS0rLTAwLf/AABEIALcBEwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIEBgcDBf/EADoQAQACAQEDBwoFAwUBAAAAAAABAgMEETFhBRIhQVGSsgYHExQiM1NUc5EVFkJxcjKBwWKhouHwUv/EABsBAQACAwEBAAAAAAAAAAAAAAADBAEFBgIH/8QANhEBAAIBAgMGBQIFAwUAAAAAAAECAwQRBSExEhQyQVHwUmFxkbEzwRNCgdHhIiOhBhWi4vH/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxNfylh08VnPlrji0zFZtOyJmOpJjxXycqRujyZaY43vOzD/ADPofnMX3Sd0z/DKONVhn+aE/mbQ/OY/ud0zfDL1GfHP8x+ZdF83j+53TN8MvUZaT5n5k0XzeP7ndM3wy9dqPVP5k0XzeP7ndM3wy9bn5k0XzeP7ndM3wyH5k0XzeP7ndM3wyPSOXdLPT6zT7tdfWYKWmtrxEx15rFdJntG8VlP45pfmKfd57/pvjj7vXcs/wSfjml+Yp9zv+m+OPudyz/BJ+OaX5in3O/6b44+53LP8En45pfmKfc7/AKb44+53LP8ABJ+OaX5in3O/6b44+53LP8En45pfmKfc7/pvjj7ncs/wS9NPypgyWimPNW9527K16Ze8erw5LdmlomXi+my0jtWrtDMWEAAAAAAAAAAAAAAAAAADR/On7rS/Uv4W04X4rfRpuMztSn1c7iW6ael14lhcpdeJFul1okWqXWiRZrZZhMytLp9uy1t3VHbxcf8A9Q8d/hb6bTz/AKv5renyj5+s+X16bjh+h7W2XJHLyj1/x76dc5wLfAAAAAPXSaa+W9ceOvOvbdHZxngkw4b5rxSkbzKPJkrjrNrTydB5E5IppabI9rLbZ6TJ28I4Ox0WippqbRzmes+/JzOr1ds9ufTyh9JdVAAAAAAAAAAAAAAAAAAGjedT3Wl+pfwtpwvx2+jScb/Sr9XOYlunPUvsvEi3S68SwuUuvEi3S60SLVLszSafb7Vt3VHb/wBOW4/xzu8Tp8E/6/Ofh/8Ab8fV0HDNDOXbLk8PlHr/AI/LPfPJdIPLKWAAAB7aTTXy3rjx1517bo6o4zwSYcN814pSN5lHkyVx1m1p5OgcickU0tNke1kts9Jk7eEcHY6LRU01No5zPWffk5nV6u2e289PKH0l1UAAAAAAAAAAAAAAAAAAAaN51PdaX6l/C2nC/Hb6NJxv9Kv1c5bpzREiSl9l4kW6XXiWFyl2Zo9Pzvan+nxOc45xnusfwcM/7k+fwx/f0j+s+W/TcH4bOo/3cngj/n/H/wAfSh89tvM7y7KOXKEo5hlLxMA8spYAHtpNNfNeuPHXnXtujqjjPBLhw3zXilI3mUeTJXHWbWnk6ByJyRTS02R7WS2z0mTrnhHB2Gi0VNNTaOcz1n35OZ1ertntvPTyh9JdVAAAAAAAAAAAAAAAAAAAAGjedT3Wl+pfwtpwvx2+jScb/Sr9XOW6c0ARIkpfZmaLTTfpn+iP+XCGj4xxeNJX+Hj55J/4+c/P0j9uvU8C4TbWW/i5OWOP/KfSPl6z/SOfT60cHz28zaZtad5l9ErWKxEVjaISimHpLxMCUcwyl4mAeWXvpNNfNeuPHXnXtujqjjPBJhw3zXilI3mUeTJXHWbWnk6ByJyRTS02R7WS2z0mTrnhHB2Oi0VNNTaOcz1n35OZ1ertntvPTyh9JcVAAAAAAAAAAAAAAAAAAAAAGjedT3Wl+pfwtpwvx2+jScb/AEq/VzlunNAMrR6Xnztn+mP9+DUcV4nGkp2ac7z0+Xzn9vV0HA+CW11+3k5Y46/P5R+8+X1fWrGzojdHU4HJa17Ta07zPWX07HSuOsUpG0RyiFkMwkEcwJRzDKXiYEo5hl76TTXzXrjx1517bo6o7Zng9YsN8t4pSOcvGTJXHWbWnk6DyJyRTS02R7WS2z0mTrnhHB12j0dNNTaOcz1n35OY1ertntvPTyh9JcVQAAAAAAAAAAAAAAAAAAAAAGjedT3Wl+pfwtpwvx2+jScb/Sr9XOW6c099Jp+fP+mN89vCGt4jxCulpy52npH7z8vy3fBeD31+TeeWOOs/tHz/AB9t/r1iIjZHREdThstrZLTe87zL6hixUxUjHjjaI6QsgmEqUUwylHMMiOYEo5hl76PTXzXrjx1517bo6o7ZmexnHhtltFKRvMvGTJXHWbWnk6HyJyRTS02R7WS2z0mTrtwjg6jR6OmnptHOZ6z78nM6rVWz23np5Q+kuKoAAAAAAAAAAAAAAAAAAAAAADRvOp7rS/Uv4W04X47fRpON/pV+rn+m083nsrG+f8Qu63W101N+tp6R78lHhHCMmvy7dKR1n9o+f4fVpWIiIiNkRucXmvfLeb3neZfUdPgx4McYsUbVjpC6vMJkophlKOYZTCKYZSjmGXto9NfNeuPHXnXtujqjtmZ7GKYrZLRWsbzLxkyVx1m1p5Oi8h8j00tNke1kts9Jk67cI4Ok0mkrp67Rzmes+/JzWq1Vs9t56eUPpLSqAAAAAAAAAAAAAAAAAAAAAAAA0vzmYufj0sdXPvM91b0uprgi1p6+UK2fht9famOvKIneZ9I/v6NNx1iIiI3Q1ma9stpveecuu02mx6bFGLFG0R7+60K1qrC0IZhlKOYEophlKOYZLWiI2zuZw6bJnyRjxxvM+/s85MtcdZtaeTbvILlDTzFsUV5mqnbMzads5qxu5s8P/n+/bs6b/tPcqbxz36z8/wC3p/dzeq1Vs9t56eUe/NuLwqgAAAAAAAAAAAAAAAAAAAAAAAANQ84nu9P/ADv4WJhs+GeKzSIQzDcJhFMMphFarK0IZhlKOYC1oiNs7jFp75rxjxxvM+/s8ZctcVZvedohhZcs2nh1Q7jh/D8ejptHO09Z9+TmdVq7ai288ojpHvzRiyTWYtW01tWYtW0dFqzG6YlfmImNpQRLpfkn5SxqqxiyzFdVWP2rmiP1V49sf3/bQ6vSTintV8P4emyKIAAAAAAAAAAAAAAAAAAAAAAAA1Dzi+70/wDO/hZiGz4b4rNHeZhuEwhmBMIphlMIrVZLWiI2zuYx4L5rxSkbzKPLmpipN7ztEMPLlm08OqHY6HQ00tNo52nrPvycpq9bfUX3nlEdI9+aq8hiUsPcStiyWraLVtNbVmLVtHRasxumJJiJjaXuJdM8k/KWuqrGLLMV1VY/auaI/VXj2x/f9tDq9JOKe1Xw/h6bGogAAAAAAAAAAAAAAAAAAAAAADT/ADje70/87+FJSN2y4b4rNGgtVuFkUwymEMwFrREbZYphtltFKRvMo82amGk3vO0Qw8uWbTw6odTo9HTTU2jnM9Z9+Tj9Zrr6q+88ojpHvzVXFeJSJIlIliUsPcStiyWpatq2mtqzFq2jomsxumJJiJjaXuJdM8lPKWurrGLLMV1NY6Y3RmiP1V49sf8Ao0Or0k4p7VfD+HpsaiAAAAAAAAAAAAAAAAAAAAAANP8AOP7vTfzv4U2GOrZcN8VmiwkmG3TEobVZLWiI2zueaYbZLdmsc0WfPjwY5yZJ2iPf3YmXLNp4dUOh0ulrgrtHWes+/JxGt4hfV33nlWOke/NSFpWiVhLEpEsSkSRKRLEpYe4lfFktS1b0tNbVmLVtHRNZjdMSTETG0vcS6X5KeUtdXX0WWYrqax0xujNEfqrx7YaHV6ScU9qvh/D02NRAAAAAAAAAAAAAAAAAAAAAGnecj3em/nfwrOnjeZbLh3is0WE1qtsWtERtnc8VxWvbs1Q6jUY9PjnJknaI9/dh5cs2nh1Q3Wn09cNdo6+cuC1/Esmsydq3KsdI9P8AKsJ1WJSJa2TAliVhLEpEsSkSRKRLEpYe4lfFltS1b0tNb1mLVtHRNZjrgmItG0vcS6Z5KeUtdXX0WWYrqax0xujLEfqrx7YaDV6ScU9qvh/D02JSAAAAAAAAAAAAAAAAAAAAGnecj3em/nfwrek6y2PDvFZoc22dM7lv+HNp2hf1Gpx6fHOXLO0R7+7Dy5edPDqhssOGMccur53xHimTXZO1PKsdI9P8qQmU62SJa2WiWE0SkS1smBLErCWJSJYlIkiUiWJSw9xK+HLalq3paa3rMWraOiazHXBMRaNpe4l0zyU8pK6uvo8myuprHTG6MsR+qv8AmGg1eknDPar4fw9NiUgAAAAAAAAAAAAAAAAAABpvnKtEYtPM7uffwruirNrTELWn1OPT1vlyztER7/q5tmzc79uqG8x44pDiuKcUy67JvPKsdI9+bziUrXRKedHaJYsmLx2wbJq3hMWjtg2S1vC0WjtNk1bQnnR2sbJq2Wi0doliyedHaJYsnnR2iWJTzo7RJEp53ESRKdsdokiV8OaaWrelpresxatonZNZjrhiaxaNpe4l03yU8pa6uvo8kxXU1jpjdGWI/XX/ADDQavSThntR4fw9NiUgAAAAAAAAAAAAAAAAABTJirbZzqxbZu50ROz7sxMx0YmInq8/U8Xwqd2rPbt6sdivoep4vhU7tTt29TsV9D1PF8Kndqdu3qdivoep4vhU7tTt29TsV9D1PF8Kndqdu3qdivoep4vhU7tTt29Ts19D1PF8Kndqdu3qdmPQ9TxfCp3anbt6s9mPQ9TxfCp3anbt6nZg9TxfCp3anbt6m0HqmL4VO7U7dvU2g9UxfCp3anbt6myfVMXwqd2p27erJ6pi+FTu1O3b1E102OJiYx1iY3TFaxME3tPmPV5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q=='

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