import React from 'react';
import Slider from 'react-slick';
import '../../styles/home/customers.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cocacola from '../../assets/images/logo/empresa/coca-cola.png';
import pepsi from '../../assets/images/logo/empresa/pepsi.webp';
import comandato from '../../assets/images/logo/empresa/comandato.png';
import deprati from '../../assets/images/logo/empresa/deprati.png';
import laGanga from '../../assets/images/logo/empresa/la-ganga.png';
import UEES from '../../assets/images/logo/empresa/UEES.jpg';
import ULVR from '../../assets/images/logo/empresa/ULVR.png';
import sweetAndCoffee from '../../assets/images/logo/empresa/sweet-and-coffee.webp';
import miComisariato from '../../assets/images/logo/empresa/mi-comisariato.png';
import bancoGuayaquil from '../../assets/images/logo/empresa/banco-guayaquil.webp';
import toyota from '../../assets/images/logo/empresa/toyota.png';
import APY from '../../assets/images/logo/empresa/APY.svg';
import expalsa from '../../assets/images/logo/empresa/expalsa.png';
import creditosEconomicos from '../../assets/images/logo/empresa/creditos-economicos.jpg';
import etinar from '../../assets/images/logo/empresa/etinar.png';
import xima from '../../assets/images/logo/empresa/xima.jpg';
import iess from '../../assets/images/logo/empresa/iess.png';
import blueBay from '../../assets/images/logo/empresa/blue-bay.webp';
import malecon2000 from '../../assets/images/logo/empresa/malecon2000.webp';
import mallSol from '../../assets/images/logo/empresa/mall-sol.webp';
import solca from '../../assets/images/logo/empresa/solca.webp';
import torresCosta from '../../assets/images/logo/empresa/torres-costa.webp';

function Customers() {

  const logos = [
    { src: cocacola, alt: 'logo de coca-cola', link: 'https://www.coca-cola.com/ec/es' },
    { src: pepsi, alt: 'Logo de Pepsi', link: 'https://www.pepsi.es/' },
    { src: comandato, alt: 'Logo de Comandato', link: 'https://www.comandato.com/' },
    { src: deprati, alt: 'Logo de Deprati', link: 'https://www.deprati.com.ec/' },
    { src: laGanga, alt: 'Logo de La Ganga', link: 'https://www.almaceneslaganga.com/pedidos-en-linea/' },
    { src: UEES, alt: 'Logo de UEES', link: 'https://uees.edu.ec/' },
    { src: ULVR, alt: 'Logo de ULVR', link: 'https://www.ulvr.edu.ec/' },
    { src: sweetAndCoffee, alt: 'Logo de Sweet & Coffee', link: 'https://www.sweetandcoffee.com.ec/' },
    { src: miComisariato, alt: 'Logo de Mi Comisariato', link: 'https://micomisariato.com/' },
    { src: bancoGuayaquil, alt: 'Logo de Banco Guayaquil', link: 'https://www.bancoguayaquil.com/' },
    { src: toyota, alt: 'Logo de Toyota', link: 'https://www.toyota.com.ec/' },
    { src: APY, alt: 'Logo de APY', link: 'https://apy.com.ec/' },
    { src: expalsa, alt: 'Logo de Expalsa', link: 'https://www.expalsa.com/' },
    { src: creditosEconomicos, alt: 'Logo de Créditos Económicos', link: 'https://www.crecos.com/' },
    { src: etinar, alt: 'Logo de Etinar', link: 'https://www.etinar.com/' },
    { src: xima, alt: 'Logo de Xima', link: 'https://inmobiliariaxima.ec/' },
    { src: iess, alt: 'Logo de IESS', link: 'https://www.iess.gob.ec/' },
    { src: blueBay, alt: 'Logo de IESS', link: 'https://www.bluebayhotelsalinas.com/' },
    { src: malecon2000, alt: 'Logo de IESS', link: 'https://malecon2000.com/' },
    { src: mallSol, alt: 'Logo de IESS', link: 'https://malldelsol.com.ec/' },
    { src: solca, alt: 'Logo de IESS', link: 'https://www.comandato.com/' },
    { src: torresCosta, alt: 'Logo de IESS', link: 'https://www.solca.med.ec/' },

  ];

  const logoChunks = [];
  for (let i = 0; i < logos.length; i += 10) {
    logoChunks.push(logos.slice(i, i + 10));
  }


  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
    <div className='main-customers'>
      <h1>MARCAS QUE CONFIAN EN NOSOTROS</h1>
      <Slider {...settings}>
        {logoChunks.map((chunk, index) => (
          <div key={index} className='chunk-customers'>
            <div className='empresas'>
              {chunk.map((logo, logoIndex) => (
                <div key={logoIndex} className="logo-empresa">
                  <a href={logo.link || '#'} target="_blank" rel="noopener noreferrer">
                    <img src={logo.src} alt={logo.alt} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Customers;
