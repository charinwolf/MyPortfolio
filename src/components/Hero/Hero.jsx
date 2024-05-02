import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
   <section className='hero-container'>
    <div className="hero-content">
        <h2>Creando Experiencias Digitales que Inspiran</h2>
        <p>
            Desarrollador FullStack | Transformando Ideas en Soluciones 
            Web Perfectas y Visualmente Impresionantes.
        </p>
    </div>

    <div className="hero-img">
        <div>
            <div className="tech-icon">
                <img src="./assets/images/react.png" alt="" />
            </div>
            <img src="./assets/images/fotoanime.png" alt="" />
        </div>

        <div>
            <div className="tech-icon">
                <img src="./assets/images/html.png" alt="" />
            </div>

            <div className="tech-icon">
                <img src="./assets/images/css3.png" alt="" />
            </div>

            <div className="tech-icon">
                <img src="./assets/images/js.png" alt="" />
            </div>
        </div>        
    </div>
   </section>
  )
}

export default Hero