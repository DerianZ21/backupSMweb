import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/home/products-services.css'
import CCTV from '../../assets/images/nuestras/sistemas-cctv.webp'
import alarma from '../../assets/images/nuestras/sistemas-alarmas.webp'
import cerco from '../../assets/images/nuestras/cerco-electrico.webp'
import bitacora from '../../assets/images/nuestras/bitacora-electronica.webp'
import acceso from '../../assets/images/nuestras/control-acceso.webp'
import codigoQR from '../../assets/images/nuestras/codigo-qr.webp'
import vehicular from '../../assets/images/nuestras/control-vehicular.webp'
import incendios from '../../assets/images/nuestras/sistemas-incendios.webp'
import puertas from '../../assets/images/nuestras/puertas-seguridad.webp'

function ProductsServices() {

  const groupSP = [
    {
      url: CCTV,
      descripcion: "sistema cctv",
    },
    {
      url: alarma,
      descripcion: "sistema de alarmas",
    },
    {
      url: cerco,
      descripcion: "cerco eléctrico",
    },
    {
      url: bitacora,
      descripcion: "bitácora electrónica",
    },
    {
      url: acceso,
      descripcion: "control de acceso",
    },
    {
      url: codigoQR,
      descripcion: "código qr",
    },
    {
      url: vehicular,
      descripcion: "sistema de control vehicular",
    },
    {
      url: incendios,
      descripcion: "detección y extinción de incendios",
    },
    {
      url: puertas,
      descripcion: "puertas de seguridad",
    },
  ];
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='main-sp'>
      <Slider className='slider-sp' {...settings}>
        {groupSP.map((SP, index) => (
          <div key={index} className="contenedor-sp">
            <div className='contenedor-img-sp'>
              <img src={SP.url} alt={SP.descripcion}></img>
            </div>
            <hr></hr>
            <h1>{SP.descripcion}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductsServices;