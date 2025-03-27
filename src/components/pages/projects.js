import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  let data = require("..//data/projects.json");
  return (
    <div ref={ref} className="" id="projects">
      <div className="margin">
      <span className="heading-2 margin light">Projects</span>
      </div>
      <ul className="margin experience-ul">
        {data.map((project, index) => (
          <div key={index} className="experience-tile">
            <header className="experience-header project-header">
              <div className="img-container">
                <img
                  src={`./data/${project.photo}`}
                  alt={project.title}
                  className="project-img"
                />
              </div>
            </header>
            <div className="experience-content">
              <div className="experience-title ">
                <a href={project.Link} className="light">
                  <div className='link-title'>
                  {project.title}   <FontAwesomeIcon icon={faUpRightFromSquare} /></div>
                </a>
              </div>
              <div>{project.description}</div>
              <div className="stack">
                {project.stack.map((tech, index) => (
                  <div key={index} className="stack-item">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
});

export default Projects;
