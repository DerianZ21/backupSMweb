import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/services/deslizador.css'
import incendios from '../../assets/images/funciones/deteccion-incendios.webp'
import alarma from '../../assets/images/funciones/sistema-alarma.webp'
import cerco from '../../assets/images/funciones/cerco-electrico.webp'
import acceso from '../../assets/images/funciones/control-acceso.webp'
import vehicular from '../../assets/images/funciones/control-vehicular.webp'
import incendiosIcon from '../../assets/images/icon/detertor-incendios.png'
import alarmaIcon from '../../assets/images/icon/sistema-alarma.png'
import cercoIcon from '../../assets/images/icon/cerca-electrica.png'
import accesoIcon from '../../assets/images/icon/control-acceso.png'
import vehicularIcon from '../../assets/images/icon/acceso-vehiculos.png'


function Deslizador() {

  const listPS = [
    {
      id: "Sistema de alarma",
      descripcion: "sistemas de alarmas",
      ruta: alarma,
      icon: alarmaIcon
    },

    {
      id: "Cerco electrico",
      descripcion: "cerco electrificado",
      ruta: cerco,
      icon: cercoIcon
    },

    {
      id: "Control acceso",
      descripcion: "control de acceso",
      ruta: acceso,
      icon: accesoIcon
    },
    {
      id: "Control vehicular",
      descripcion: "sistemas de control vehicular",
      ruta: vehicular,
      icon: vehicularIcon
    },
    {
      id: "Control de Incendios",
      descripcion: "sistemas de detección de incendios",
      ruta: incendios,
      icon: incendiosIcon
    }
  ];


  const settingsCarousel = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };



  return (
    <div className='main-deslizador'>
      <Slider className='slider-deslizador' {...settingsCarousel} >
        {listPS.map((PS, index) => (
          <div className="fondo-deslizador">
            <div className="img-deslizador">
              <img src={PS.ruta} alt={PS.descripcion}></img>
            </div>
            <div className="contenido-deslizador">
              <div className="info-deslizador">
                <h1 style={{ textTransform: 'uppercase' }}>{PS.id}</h1>
                <div className="icon-deslizador">

                  <img src={PS.icon} alt={PS.descripcion}></img>
                </div>

              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Deslizador;