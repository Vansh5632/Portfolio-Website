import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import SkillsSection from "../components/SkillSection";
import ToolsSection from "../components/ToolsSection";




const Home = () => {
  return (
    <div className="bg-primary min-h-screen relative overflow-hidden">
      
      
      <HeroSection />
      <SkillsSection/>
      <ToolsSection/>
      
    </div>
  );
};

export default Home;
