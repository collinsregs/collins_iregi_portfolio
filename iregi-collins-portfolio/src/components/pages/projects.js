export default function Projects() {
  let data = require("..//data/projects.json");

  return (
    <div className="" id="projects">
      <span className="heading-2 margin light">Projects</span>
      <ul className="margin experience-ul">
        {data.map((project, index) => (
          <div key={index} className="experience-tile">
            <header className="experience-header">
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
                  {project.title}
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
}
