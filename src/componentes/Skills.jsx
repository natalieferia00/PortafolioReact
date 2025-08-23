import React from 'react';
import './Skills.css'; // Asegúrate de crear este archivo de estilos

const skillsList = [
  { name: 'React', icon: '/path/to/react-icon.svg' },
  { name: 'Angular', icon: '/path/to/angular-icon.svg' },
  { name: 'GitHub', icon: '/path/to/github-icon.svg' },
  { name: 'Postman', icon: '/path/to/postman-icon.svg' },
  { name: 'Capacitor', icon: '/path/to/capacitor-icon.svg' },
  { name: 'Ionic', icon: '/path/to/ionic-icon.svg' },
  // Agrega más habilidades aquí
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Mis Habilidades</h2>
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.icon} alt={skill.name} />
              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;