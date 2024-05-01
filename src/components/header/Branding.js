import React from 'react';
import { Link } from 'react-router-dom';
import logoSM from '../../assets/images/logo/SeguridadManrique-sinfondo.png';
import nameSM from '../../assets/images/logo/ms-logo-texto.svg';


function Branding() {
    return (
        <div className="branding">
            <Link to="/">
                <div className='logo'>
                    <img className='logo' src={logoSM} alt="Logo Seguridad Manrique" />
                </div>

                <div className='name-marca'>
                    <img  src={nameSM} alt='nombre de la marca'>
                    </img>
                </div>
            </Link>

        </div>

    );
}

export default Branding;