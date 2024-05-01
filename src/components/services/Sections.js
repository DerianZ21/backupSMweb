import React from 'react';
import '../../styles/services/sections.css'
import CCTV from '../../assets/images/nuestras/sistemas-cctv.webp'
import alarma from '../../assets/images/nuestras/sistemas-alarmas.webp'
import cerco from '../../assets/images/nuestras/cerco-electrico.webp'
import bitacora from '../../assets/images/nuestras/bitacora-electronica.webp'
import acceso from '../../assets/images/nuestras/control-acceso.webp'
import codigoQR from '../../assets/images/nuestras/codigo-qr.webp'
import vehicular from '../../assets/images/nuestras/control-vehicular.webp'
import incendios from '../../assets/images/nuestras/sistemas-incendios.webp'
import puertas from '../../assets/images/nuestras/puertas-seguridad.webp'

function Sections() {

  const section = [ 
    {
      id: "sistema-cctv",
      url: CCTV,
      descripcion: "SISTEMA CCTV",
      info: <p>Con nuestro servicio de Sistema CCTV (Circuito cerrado de televisión), 
        tendrás la tranquilidad de poder visualizar en tiempo real lo que sucede en tu
        propiedad desde cualquier lugar del mundo.</p>
    },
     
    {
      id: "sistema-alarma",
      url: alarma,
      descripcion: "SISTEMA DE ALARMAS",
      info: <p>Nuestro sistema de alarma es tu mejor aliado en seguridad pasiva. 
        Te alerta rápidamente ante cualquier evento no deseado, 
        actuando como una eficaz herramienta disuasoria contra posibles problemas.</p>
    },
     
    {
      id: "cerco-electrico",
      url: cerco,
      descripcion: "CERCO ELÉCTRICO",
      info: <p>Nuestro cerco eléctrico es la solución ideal. 
        Diseñado para operar las 24 horas del día, los 365 días del año, 
        garantiza la seguridad constante de tu hogar o negocio. </p>
    },
     
    {
      id: "bitacora-electronica",
      url: bitacora,
      descripcion: "BITÁCORA ELECTRÓNICA",
      info: <p>Registro de informacion de manera digital, accesible las 24 horas del dia y 
        con todo el software controlado por administración.</p>
    },
     
    {
      id: "control-acceso",
      url: acceso,
      descripcion: "CONTROL DE ACCESO",
      info: <p>Capacidad de permitir o restringir la entrada mediante una 
        variedad de métodos de identificación, como tarjetas, llaveros, contraseñas, 
        huellas dactilares o reconocimiento facial biométrico</p>
    },
     
    {
      id: "codigo-qr",
      url: codigoQR,
      descripcion: "CÓDIGO QR",
      info:<p>Utiliza códigos QR para controlar el acceso a edificios, oficinas, 
        eventos y demas areas que deseas restringir, estos pueden ser implementados en 
        dispositivos especiales, tarjetas o de manera digital en dispositivos móviles.</p> 
    },
     
    {
      id: "control-vehicular",
      url: vehicular,
      descripcion: "SISTEMA DE CONTROL VEHICULAR",
      info: <p>¿Desea gestionar de manera eficiente y segura el acceso de vehículos en su 
        espacio público o privado, como un estacionamiento? 
        Nuestro sistema automatizado de control de acceso es la solución ideal.</p>
    },
    {
      id: "incendios",
      url: incendios,
      descripcion: "DETECCIÓN Y EXTINCIÓN DE INCENDIOS",
      info: <p>Con tecnología avanzada, detectamos cualquier señal de fuego en sus primeras etapas, 
        permitiendo una respuesta rápida y precisa. Además, 
        nuestras soluciones de extinción están diseñadas para controlar y 
        extinguir el fuego de manera eficiente.</p>
    },
    {
      id: "puerta-seguridad",
      url: puertas,
      descripcion: "PUERTAS DE SEGURIDAD",
      info: <p>Diseñadas con los más altos estándares de calidad y resistencia, ofrecen una barrera 
        robusta contra intrusos y cualquier amenaza externa.</p>
    },
  ]


  return (
    <div className="main-sections">
        {section.map((item, index) => (
            <div key={index} className={`section ${index % 2 === 0 ? 'section-color1' : 'section-color2'}`}>
                <div id={item.id} className={`card-section ${index % 2 === 0 ? 'card-section1' : 'card-section2'}`}>
                    <img src={item.url} alt={item.descripcion} />
                    <div className='text'>
                        <h1>{item.descripcion}</h1>
                        {item.info}
                    </div>
                </div>
            </div>
        ))}
    </div>
);
}

export default Sections;