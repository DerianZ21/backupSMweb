import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/about.css'
import misionImg from '../../assets/images/icon/mision.png'
import visionImg from '../../assets/images/icon/vision.png'
import infoAbout from '../../assets/images/nuestras/info-about.webp'

function About() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#main-about') {
      const section = document.getElementById('main-about');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div id='main-about' className='main-about'>
      <div className='info-about'>
        <div className='content-info-about'>
          <div className='texto-info-about'>
            <h1>SOLUCIONES QUE RESGUARDAN TU SEGURIDAD</h1>
            <p>Trabajamos por el desarrollo de nuestros servicios a nuestros clientes,
              asegurando su tranquilidad
              estableciendo estandares de excelencia en servcios al cliente y tecnologías de seguridad.</p>
          </div>
          <div className='img-info-about'>
            <img src={infoAbout} alt='imagen sobre nosotros'>
            </img>
          </div>
        </div>
      </div>
      <div className='vision-mision'>
        <div className='mision'>
          <img src={misionImg} className='img-mision' alt='fondo de la misión'></img>
          <h2>Misión</h2>
          <p className='info-mision'>Soluciones integrales de seguridad adaptadas a las
            necesidades de cada cliente, permitimos la gestión personalizada y
            aseguramos la tranquilidad de nuestros clientes a través de servicios confiables.</p>
        </div>
        <div className='vision'>
          <img src={visionImg} className='img-vision' alt='fondo de la visión'></img>
          <h2>Visión</h2>
          <p className='info-vision'>Liderar la industria de los sistemas de seguridad, siendo reconocidos por nuestras soluciones
            adaptables a las demandas del mercado, convirtiéndonos en la primera opción para
            clientes marcando entandares en el servicio al cliente.</p>
        </div>
      </div>
    </div>
  );
}

export default About;