import React from "react";
import ReactSwitch from 'react-switch';
import { useState, useEffect } from 'react';

function Config (){

    const [temaOscuro, setTemaOscuro] = useState(false);

  // Efecto para aplicar el tema al cargar el componente
  useEffect(() => {
    aplicarTema(temaOscuro);
  }, [temaOscuro]);


  const toggleTema = (checked) => {
    setTemaOscuro(checked);
  };

  const aplicarTema = (oscuro) => {
    if (oscuro) {
      document.documentElement.style.setProperty('--color-fondo', '#1d1e29');
      document.documentElement.style.setProperty('--color-fuente', '#fff');
      document.documentElement.style.setProperty('--color-icono', 'brightness(0) invert(1)');
    } else {
      document.documentElement.style.setProperty('--color-fondo', '#fff');
      document.documentElement.style.setProperty('--color-fuente', '#000');
      document.documentElement.style.setProperty('--color-icono', 'brightness(0) invert(0)');
    }
  };
    return(
        <div className="main-temas">
            <label>
              <span>{temaOscuro ? '' : ''}</span>
              <ReactSwitch
                onChange={toggleTema}
                checked={temaOscuro} height={15}
                width={30}
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#cccccc"
                offColor="#333"
                onHandleColor="#fff"
                offHandleColor="#fff" />
            </label>
          </div>
    )

}

export default Config;