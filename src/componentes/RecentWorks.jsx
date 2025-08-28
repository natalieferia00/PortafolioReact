import React from 'react';
import './RecentWorks.css'; 

const projectsList = [
  { title: "Proyecto 1", description: "Descripción breve del proyecto y las tecnologías usadas.", image: "/path/to/project3.jpg" },
  { title: "Proyecto 2", description: "Desarrollé un juego de Sudoku interactivo con un diseño retro y minimalista. El proyecto se enfoca en la experiencia del usuario al ofrecer una interfaz clara y funcionalidades clave para la jugabilidad.Características destacadas:Dificultad ajustable: Permite a los usuarios elegir entre múltiples niveles de dificultad (Fácil, Medio, Difícil, Experto y Maestro).Registro de usuario: Incluye un sistema simple de registro donde los jugadores pueden ingresar su nombre y una llave (cualquier palabra) para iniciar la partida.Contador de rendimiento: Incorpora un contador de tiempo y un indicador de errores que se actualiza en tiempo real, ayudando a los jugadores a seguir su progreso y mejorar su precisión.Funcionalidad completa: El juego permite iniciar nuevas partidas, verificar la solución y finalizar el juego en cualquier momento, asegurando una experiencia de usuario fluida y controlada.Este proyecto demuestra mi habilidad para desarrollar aplicaciones front-end funcionales y atractivas, centrándome en la lógica del juego y la interacción del usuario. url: https://natalieferia00.github.io/sudoku00/", image: "sudoku.png" },
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