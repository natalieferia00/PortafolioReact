import React from 'react';
import './Services.css'; 

const servicesList = [
  { title: "Desarrollo Web", description: "Creación de sitios web y aplicaciones con tecnologías modernas como React y Angular." },
  { title: "Diseño UI/UX", description: "Diseño de interfaces de usuario atractivas e intuitivas y mejora de la experiencia de usuario." },
  { title: "Mantenimiento", description: "Soporte y actualización de sitios web existentes para asegurar un rendimiento óptimo." },
];

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Mis Servicios de Calidad</h2>
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;