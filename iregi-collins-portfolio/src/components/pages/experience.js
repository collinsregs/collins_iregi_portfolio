export default function experience() {
  let data = require("..//data/experience.json");

  return (
    <div className="" id=" experience">
      <span className="heading-2 margin light">Experience</span>
      <ul className="margin experience-ul">
        {data.map((experience, index) => (
          <div key={index} className="experience-tile">
            <header className="experience-header ">
              {experience.dateRange}
            </header>
            <div className="experience-content">
              <div className="experience-title">
                <a href="/" className="light">
                  {" "}
                  {experience.companyPosition}
                </a>
              </div>
              <div>{experience.description}</div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
