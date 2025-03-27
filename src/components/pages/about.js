import React, { forwardRef } from 'react';

const about = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="" id="about">
      <div className="margin">
        <span className="heading-2 margin light">About</span>
      </div>
      <span className=" margin">
        <p>
        Driven by a deep passion for technology and data-driven solutions, I specialize in transforming complex data challenges into strategic insights. As a full-stack data engineer and developer, I leverage my expertise in <strong>Python</strong>, <strong>R</strong>, <strong>SQL</strong>, <strong>Kafka</strong> and <strong>Azure Data Factory</strong> to design robust ETL pipelines and scalable analytics solutions.
        </p><p>
        My technical arsenal spans data engineering tools like <strong>Power BI</strong>, <strong>Microsoft Fabric</strong>, <strong>Neo4j</strong>, <strong>Ardoq </strong> and <strong>Avolution ABACUS</strong>, enabling me to orchestrate comprehensive data workflows and drive intelligent decision-making. With a strong background in AI model training and data stewardship, I excel at translating raw data into meaningful, actionable intelligence.
        </p><p>
        Bridging technical prowess with strategic vision, I combine full-stack development skills in React, Laravel, and Node.js with deep data engineering capabilities. My approach focuses on creating innovative solutions that solve complex problems, optimize data infrastructures, and unlock the transformative potential of technology.
        </p>
      </span>
    </div>
  );
});

export default about;
