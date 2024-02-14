
import './App.css';
import Title from './components/pages/title'
import Navbar from './components/pages/nav'
import About from './components/pages/about'
import Education from './components/pages/education'
import Hero from "./components/pages/hero"
import Project from './components//pages/projects'
import Terminal from './components/pages/terminal'



function App() {
  return (
    <div className="app">
      <div className='flex margin'>
      <div className="left-section fixed"> 
      <Title/>
      <Hero/>
      <Navbar/>
      </div>
      <div className="right-section">
        </div>
      </div>
      <div className='flex'>
      <div className="left-section">
      </div>
      <div className="right-section">
        <Terminal/>
        <About/>
      <Education/>
      <Project/>
        </div>
      </div>
    </div>
  );
}

export default App;
