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
                            <a href='#skills' className="menu-item" onClick={(e) => handleMenuItemClick(e, 'skills')}>Skills</a>
                        </li>
                        <li>
                            <a href='#projects' className="menu-item" onClick={(e) => handleMenuItemClick(e, 'projects')}>Proyectos</a>
                        </li>
                        <li>
                            <a href='#contactme' className="menu-item" onClick={(e) => handleMenuItemClick(e, 'contactme')}>Contacto</a>
                        </li>
                        <button type='button' className='contact-btn' onClick={handleClick}>Descargar CV</button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
