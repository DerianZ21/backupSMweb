import React from 'react';
import { Link } from 'react-router-dom';
import logoTextoMS from '../../assets/images/logo/ms-logo-texto.svg';
import logoTextoPinlet from '../../assets/images/logo/textoLogoPinlet.png';
import logoMS from '../../assets/images/logo/SeguridadManrique-sinfondo.png';
import logoPinlet from '../../assets/images/logo/pinlet.png';
import ubicacion from '../../assets/images/icon/ubicacion.svg';


function Aditional() {
  return (
    <div className='aditional'>
      <div className='marca-footer'>
        <Link to="/">
          <img className='logo-footer-texto logo-footer-texto-MS' src={logoTextoMS} alt="Logo Seguridad Manrique" />
          <img className='logo-footer logo-footer-MS' src={logoMS}></img>
        </Link >
        <hr className='hr-footer-marca'></hr>
        <a href='http://www.pinlet.app/' target="_blank" rel="noopener noreferrer">
          <img className='logo-footer-texto logo-footer-texto-pinlet' src={logoTextoPinlet} alt="Logo Pinlet " />
          <img className='logo-footer logo-footer-MS' src={logoPinlet}></img>
        </a>
      </div>
      <div className='menu-footer'>
        <ul >
          <li className='enlaces-footer'>
            <h3>CONTACTOS</h3>
            <hr></hr>
            <a href="mailto:info@pinlet.net">
              <p>info@pinlet.net</p> </a>
            <a href="tel:+593939858060">
              <p>+593 939858060</p></a>
            <a href="https://www.google.com/maps/place/R4GC%2BMJP,+Guayaquil+090514/@-2.1732596,-79.8784346,21z/data=!4m6!3m5!1s0x902d6dcbbe55397d:0xddf01fe35396a6c3!8m2!3d-2.1732247!4d-79.8784865!16s%2Fg%2F11g0znxnct?entry=ttu"
              target="_blank"
              rel="noopener noreferrer">
              <img className='icono icono-ubicacion' src={ubicacion} alt='icono de ubicacion'></img>
              <p>Ecuador, Guayaquil.</p>
            </a>
          </li>
          <li className='enlaces-footer'>
            <h3>SERVICIO AL CLIENTE</h3>
            <hr></hr>
            <a href="mailto:pinletde@pinlet.net" >
              <p>pinletde@pinlet.net</p></a>
            <a href="tel:+593968253695">
              <p>+593-968253695</p></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aditional;