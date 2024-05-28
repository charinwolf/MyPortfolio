import React from 'react';
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu }) => {

    const handleClick = () => {
        window.open('https://drive.google.com/drive/u/1/folders/1KUYXWgAHulHaDGPuVRNMNu7SJoJqoN_v')
    }
  return (
    <>
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <h1 className='mobile-title'>Randy's Portfolio</h1>
                <ul>
                    <li>
                        <a className="menu-item">Inicio</a>
                    </li>
                    <li>
                        <a className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a className="menu-item">Proyectos</a>
                    </li>
                    <li>
                        <a className="menu-item">Contacto</a>
                    </li>
                    <button type='button' className='contact-btn' onClick={() => handleClick()}>Descargar CV</button>
                </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNav