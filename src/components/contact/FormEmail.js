
import React, { useState } from "react";
import '../../styles/contact/formemail.css'
import validateForm from "../../funtions/validarForm";


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
            
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
      <hr className="hr-contact-form"></hr>
    </div>
  );
}

export default FormEmail;