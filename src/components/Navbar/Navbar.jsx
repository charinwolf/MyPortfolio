import React, { useEffect, useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => { 
    const [openMenu, setOpenMenu] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(0);
    
    useEffect(() => {
        const navbarElement = document.querySelector('.nav-wrapper');
        if (navbarElement) {
            setNavbarHeight(navbarElement.offsetHeight);
        }
    }, []);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    
    const handleMenuItemClick = (e, sectionId) => {
        e.preventDefault(); 
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = sectionPosition - navbarHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setOpenMenu(false);
    };
    
    const handleTitleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    const handleClick = () => {
        window.open('https://drive.google.com/drive/u/1/folders/1KUYXWgAHulHaDGPuVRNMNu7SJoJqoN_v'); 
    };
    
    return (
        <> 
            <MobileNav 
                isOpen={openMenu} 
                toggleMenu={toggleMenu} 
                handleMenuItemClick={handleMenuItemClick} 
                handleTitleClick={handleTitleClick} 
                handleClick={handleClick}
            />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <h1 className='nav-title' onClick={handleTitleClick}>Randy's Portfolio</h1>
                    <ul>
                        <li>
                            <a href="#skills" className="menu-item" onClick={(e) => handleMenuItemClick(e, 'skills')}>Skills</a>
                        </li>
                        <li>
                            <a href="#projects" className="menu-item" onClick={(e) => handleMenuItemClick(e, 'projects')}>Proyectos</a>
                        </li>
                        <li>
                            <a href="#contactme" className="menu-item" onClick={(e) => handleMenuItemClick(e, 'contactme')}>Contacto</a>
                        </li>
                        <button className='contact-btn' onClick={handleClick}>Descargar CV</button>
                    </ul>
                    <button type='button' className='menu-btn' onClick={toggleMenu}>
                        <span 
                            className={"material-symbols-outlined"} 
                            style={{fontSize: '1.8rem'}}
                        > 
                            {openMenu ? 'close' : 'menu'}
                        </span>                 
                    </button>
                </div>  
            </nav>
        </>
    );
};

export default Navbar;
