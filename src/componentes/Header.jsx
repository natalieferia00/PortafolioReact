import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <h1>Natalie Feria</h1>
        <nav className="header-nav">
          <a href="#about">Acerca de mí</a>
          <a href="#services">Servicios</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;