import "./App.css";
import Title from "./components/pages/title";
import Navbar from "./components/pages/nav";
import About from "./components/pages/about";
import Experience from "./components/pages/experience";
import Hero from "./components/pages/hero";
import Project from "./components//pages/projects";
import FlowField from "./components/pages/flow_field";
import Filler from "./components/pages/filler";
import CallToAction from "./components/callToAction";
import Footer from "./components/pages/footer";
import React, { useState, useEffect, useRef } from 'react';


function App() {
  const [activeSection, setActiveSection] = useState('about');

  // Refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const [isMinimalView, setIsMinimalView] = useState(false);

  const toggleMinimalView = () => {
    setIsMinimalView(!isMinimalView);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '10px',
        threshold: 0.3 // Trigger when 50% of the section is visible
      }
    );

    // Observe sections
    const sections = [aboutRef, experienceRef, projectRef];
    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current);

    });

    return () => {
      sections.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="app">
      <FlowField isMinimalView={isMinimalView} className="flow-field" />
      <div className={`content ${isMinimalView ? 'minimal-view' : ''}`}>
        <div  className="flex margin mobile-sizing">
          <div className="left-section fixed content-card">
            <Title />
            <Hero />
            <div className="nav-cta">
              <CallToAction />
              <Navbar activeSection={activeSection} />
            </div>
          </div>
          <div className="mobile-filler"></div>
          <div className="right-section extra"></div>
        </div>
        <div>
          <div  className="flex ">
            <div className="left-section extra"></div>
            <div className="right-section">
              <Filler />
              <div className="content-card flex-column">
                <About ref={aboutRef} id="about" />
                <Project ref={projectRef} id="projects" />
                <Experience ref={experienceRef} id="experience" />
              </div>
            </div>
          </div>
          <Footer onEyeClick={toggleMinimalView} isMinimalView={isMinimalView}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
