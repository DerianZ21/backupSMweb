import React from 'react';
import ReactSwitch from 'react-switch';
import { useState, useEffect } from 'react';
import { Link, /*useNavigate*/ } from 'react-router-dom';
import menu from '../../assets/images/icon/menu.png'

function Navigation() {

  

  /*const navigate = useNavigate();

  const goToAboutSection = () => {
    navigate("/#main-about");
  };*/

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='main-navegation'>

      <ul className={`menu ${isMenuOpen? 'open' : 'close'}`}>
        <li id="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img className='icon-menu' src={menu} alt='icon-menu'></img>
        </li>
        <li onClick={closeMenu} ><Link to="/">INICIO</Link></li>
        <li onClick={closeMenu} ><Link to="/servicios">SERVICIOS</Link></li>
        <li onClick={closeMenu}><Link to="/contactos">CONTACTOS</Link></li>
        
      </ul>
    </nav>
  );
}




export default Navigation;