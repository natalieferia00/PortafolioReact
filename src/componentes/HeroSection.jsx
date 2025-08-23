import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Hola, soy Natalie Feria</h1>
          <h2 className="job-title">Desarrolladora Frontend</h2>
          <p>
            Desarrolladora Frontend recién egresada del SENA, con una sólida formación en tecnologías web modernas como HTML5, CSS3 y JavaScript.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>6</h3>
              <p>Meses de experiencia</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Proyectos completados</p>
            </div>
            <div className="stat-item">
              <h3>+2</h3>
              <p>Proyectos en proceso</p>
            </div>
          </div>
        </div>
        <div className="profile-image">
          {}
          <img src="./imagen.jpg" alt="Natalie Feria" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;