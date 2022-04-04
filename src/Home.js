import React from "react";
import HeroSection from "./HeroSection";
import "./App.css";
import About from "./AboutSection";
import Skills from "./SkillsSection";
import PortofolioSection from "./PortofolioSection";
import FooterSection from "./FooterSection";

class Home extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
  state = {};
  render() {
    return (
      <>
        <HeroSection />
        <About />
        <Skills />
        <PortofolioSection />
        <FooterSection />
      </>
    );
  }
}

export default Home;
