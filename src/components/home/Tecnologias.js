import React from "react";
import '../../styles/home/tecnologia.css'
import biometrico from '../../assets/images/nuestras/sistema-biometricos.webp'
import codigo from '../../assets/images/nuestras/codigo-qr2.webp'
import ojo from '../../assets/images/icon/ojo.png'
import huella from '../../assets/images/icon/huella.png'
import rostro from '../../assets/images/icon/rostro.png'
import qr from '../../assets/images/icon/QR.png'
import contrasena from '../../assets/images/icon/contrasena.png'
import id from '../../assets/images/icon/id.png'


function Tecnologias() {
    return (
        <div>
            <h1>DISPOSITIVOS</h1>
            <div className="main-tecnologias">

                <div className="content-tecnologia">
                    <img className="img-tecnologia" src={biometrico} alt="seguridad biométrica"></img>
                    <div className="info-tecnologia">
                        <div className="iconos-tecnologia iconos-biometricos">
                            <img src={ojo} alt="icono de escaner ocular"></img>
                            <hr></hr>
                            <img src={huella} alt="icono de escaner de huella dactilar"></img>
                            <hr></hr>
                            <img src={rostro} alt="icono de escaner facial"></img>
                        </div>
                        <p>Seguridad biométrica ya sea por escaner
                            <b> ocular</b>, de <b>huella</b> o <b>facial</b>, autentifica tus recursos en base a tus datos genéticos.</p>
                    </div>
                </div>
                <div className="content-tecnologia">
                    <img className="img-tecnologia" alt="códigos de seguridad" src={codigo}></img>
                    <div className="info-tecnologia">
                        <div className="iconos-tecnologia iconos-codigo">
                            <img src={qr} alt="icono de código qr"></img>
                            <hr></hr>
                            <img src={contrasena} alt="icono de cádigo por contraseña"></img>
                            <hr></hr>
                            <img src={id} alt="icono de código por número de identificación"></img>
                        </div>
                        <p>Protéjete con tecnologías de autentificación en base a <b>códigos-QR</b>
                            , seguridad por <b>contraseñas</b> o <b>carnets</b> personalizados de identidad.</p>
                    </div>
                </div>

            </div>

        </div>

    )

}

export default Tecnologias;