import React from 'react';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contacto</h5>

        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard 
                    iconUrl="./assets/images/email-icon.png"
                    text="rcharinwolf@gmail.com"
                />
                <ContactInfoCard 
                    iconUrl="./assets/images/github-icon.png"
                    text="https://github.com/charinwolf"
                />
                <ContactInfoCard 
                    iconUrl="./assets/images/linkedin-icon.png"
                    text="https://www.linkedin.com/in/randy-leon-charinga/"
                />
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe