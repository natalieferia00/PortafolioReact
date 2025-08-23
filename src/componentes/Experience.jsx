import React from 'react';
import './Experience.css'; 

const experienceList = [
  { year: "2023-2025", role: "Desarrolladora de Software", company: "Accenture", description: "Seguimiento de agenda, revisión de idoneidad de documentos y control de archivo." },
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Mi Experiencia</h2>
        <div className="experience-list">
          {experienceList.map((job, index) => (
            <div className="experience-item" key={index}>
              <p className="year">{job.year}</p>
              <h3>{job.role}</h3>
              <p className="company">{job.company}</p>
              <p className="description">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;