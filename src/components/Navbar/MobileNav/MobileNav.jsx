import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu, handleMenuItemClick, handleTitleClick, handleClick }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <h1 className='mobile-title' onClick={handleTitleClick}>Randy's Portfolio</h1>
                    <ul>
                        <li>
                            <a href='#' className="menu-item" onClick={() => handleMenuItemClick('skills')}>Skills</a>
                        </li>
                        <li>
                            <a href='#' className="menu-item" onClick={() => handleMenuItemClick('projects')}>Proyectos</a>
                        </li>
                        <li>
                            <a href='#' className="menu-item" onClick={() => handleMenuItemClick('contactme')}>Contacto</a>
                        </li>
                        <button type='button' className='contact-btn' onClick={handleClick}>Descargar CV</button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
