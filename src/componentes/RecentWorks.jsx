import React from 'react';
import './RecentWorks.css'; 

const projectsList = [
  { title: "Proyecto 1", description: "Descripción breve del proyecto y las tecnologías usadas.", image: "/path/to/project1.jpg" },
  { title: "Proyecto 2", description: "Descripción breve del proyecto y las tecnologías usadas.", image: "/path/to/project2.jpg" },
  { title: "Proyecto 3", description: "Descripción breve del proyecto y las tecnologías usadas.", image: "/path/to/project3.jpg" },
];

const RecentWorks = () => {
  return (
    <section id="projects" className="section recent-works-section">
      <div className="container">
        <h2 className="section-title">Mis Trabajos Recientes</h2>
        <div className="works-grid">
          {projectsList.map((project, index) => (
            <div className="work-item" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;