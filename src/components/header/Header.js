import React from 'react';
import Navigation from './Navigation.js';
import ReactSwitch from 'react-switch';
import { useState, useEffect } from 'react';
import Branding from './Branding.js';
import Config from './Config.js';
import '../../styles/header.css';
import useHeaderVisible from '../../funtions/useHeaderVisible.js';// Asegúrate que la ruta es correcta

function Header() {
  const [isVisible, setIsVisible] = useHeaderVisible();  // Usa destructuring para obtener ambos valores



  return (
    <header className={`main-header ${isVisible ? 'mostrar' : 'ocultar'}`} onMouseOver={() => setIsVisible(true)}>
      <div className='secundary-header'>
        <Branding />
        <div className='header-right'>
          <Config />
          <Navigation />

        </div>

      </div>
    </header>
  );
}

export default Header;