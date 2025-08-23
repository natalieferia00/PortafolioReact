import React from 'react';
import './Education.css'; // Asegúrate de crear este archivo de estilos

const educationList = [
  { year: "2023-2025", degree: "Análisis y Desarrollo de Software", institution: "SENA VIRTUAL" },
  // Agrega más educación si tienes
];

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Mi Educación</h2>
        <div className="education-list">
          {educationList.map((edu, index) => (
            <div className="education-item" key={index}>
              <p className="year">{edu.year}</p>
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;