import React from 'react';
import './App.css';

import Header from './componentes/Header';
import HeroSection from './componentes/HeroSection';
import Services from './componentes/Services';
import RecentWorks from './componentes/RecentWorks';
import Experience from './componentes/Experience';
import Education from './componentes/Education';
import Skills from './componentes/Skills';
import Contact from './componentes/Contact';
import Footer from './componentes/Footer';


function App() {
  return (
    <div className="portfolio">
      <Header />
      <HeroSection />
      <Services />
      <RecentWorks />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;