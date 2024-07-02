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

function App() {
  return (
    <div className="app">
      <FlowField className="flow-field" />
      <div className="content">
        <div className="flex margin">
          <div className="left-section fixed content-card">
            <Title />
            <Hero />
            <CallToAction />
            <Navbar />
          </div>
          <div className="right-section"></div>
        </div>
        <div>
          <div className="flex">
            <div className="left-section"></div>
            <div className="right-section">
              <Filler />
              <div className="content-card flex-column">
                <About />
                <Experience />
                <Project />
              </div>
            </div>
          </div>
          <p>footer goes here</p>
        </div>
      </div>
    </div>
  );
}

export default App;
