import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">¡Trabajemos Juntos!</h2>
        <form className="contact-form">
          <input type="text" placeholder="Tu Nombre" required />
          <input type="email" placeholder="Tu Email" required />
          <textarea placeholder="Tu Mensaje" rows="5" required></textarea>
          <button type="submit" className="btn-submit">Enviar Mensaje</button>
        </form>
        <div className="contact-info">
          <h3>Información de Contacto</h3>
          <p>Email: natalieferial@gmail.com</p>
          <p>Teléfono: 3163802042</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;