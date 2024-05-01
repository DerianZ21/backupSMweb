
import React, { useState } from "react";
import '../../styles/contact/formemail.css'
import validateForm from "../../funtions/validarForm";
import ubicacion from '../../assets/images/icon/ubicacion2.png'
import telefono from '../../assets/images/icon/telefono.png'
import email from '../../assets/images/icon/email.png'


function FormEmail() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log(FormData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    };
  }


  return (
    <div className='main-form-email'>
      <div className="container-form-contact">
        <form onSubmit={handleSubmit}>
          <div className="text-form-Email">
            <h3>¿Tienes alguna duda?</h3>
            <p>Llena el siguiente formulario y nos pondremos en contacto contigo.</p>
          </div>
          <div className="contenedor-input-contacto">
            <div>
              <label htmlFor="name">Nombre y apellido</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="errorForm">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email">Correo Electrónico</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="errorForm">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="subject">Asunto</label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <p className="errorForm">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="errorForm">{errors.message}</p>}
            </div>

            <button className="btn-shine" type="submit">Enviar</button>
          </div>
        </form>
      </div>
      <hr className="hr-contact-form"></hr>
      <div className="main-cards">
        <div className="card">
          <div className="img-card">
            <img src={telefono} alt="icono de telefono"></img>
          </div>
          <div className="content-card">
            <h2>Teléfonos</h2>
            <p>comunícate con nosotros</p>
          </div>
        </div>
        <div className="card">
          <div className="img-card">
            <img src={email} alt="icono de correo"></img>
          </div>
          <div className="content-card">
            <h2>Email</h2>
            <p>algo en base a correos</p>
          </div>
        </div>
        <div className="card">
          <a  href="https://www.google.com/maps/place/R4GC%2BMJP,+Guayaquil+090514/@-2.1732557,-79.8784461,21z/data=!4m6!3m5!1s0x902d6dcbbe55397d:0xddf01fe35396a6c3!8m2!3d-2.1732247!4d-79.8784865!16s%2Fg%2F11g0znxnct?entry=ttu"
            target="_blank"
            rel="noopener noreferrer">
            <div className="img-card">
              <img src={ubicacion} alt="icono de ubicación"></img>
            </div>
            <div className="content-card">
              <h2>Ubicación</h2>
              <p>visítanos</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FormEmail;