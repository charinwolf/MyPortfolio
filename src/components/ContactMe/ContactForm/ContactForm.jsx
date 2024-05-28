import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevData => ({...prevData, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_e43dy5k', 'template_hd8el36', formData, 'uuRWC2PAfdE-V9zYu')
      .then((result) => {
        console.log(result.text);
        alert('Mensaje Enviado con Exito');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          message: '',
        });
      }, error => {
        console.log(error.text);
        alert('Hubo un error al enviar el mensaje')
      }); 
  };


  return (
    <div className="contact-form-content">
        <form onSubmit={handleSubmit}>
            <div className="name-container">
                <input type='text' name='firstname' placeholder='First Name' value={formData.firstname} onChange={handleChange} />
                <input type='text' name='lastname' placeholder='Last Name' value={formData.lastname} onChange={handleChange} />
            </div>

            <input type="text" name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
            <textarea type="text" name='message' placeholder='Message' rows={3} value={formData.message} onChange={handleChange} />
        
            <button type='submit'>ENVIAR</button>
        </form>
    </div>
  )
}

export default ContactForm