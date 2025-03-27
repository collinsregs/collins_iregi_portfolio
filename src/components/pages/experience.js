import React, { forwardRef } from 'react';

const experience = forwardRef((props, ref) => {
  let data = require("..//data/experience.json");

  return (
    <div ref={ref} className="" id="experience">
      <div className="margin">
        <span className="heading-2 margin light">Experience</span>
      </div>
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
});

export default experience;