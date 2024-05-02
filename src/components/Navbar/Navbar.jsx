import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';


const Navbar = () => { 
    const [openMenu, setOpenMenu] = useState(false);
    
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    } 


  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

        <nav className="nav-wrapper">
            <div className="nav-content">
                <h1 className='nav-title'>Randy's Portfolio</h1>
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
                    <button className='contact-btn' onClick={() => {}}>Mas</button>
                </ul>
                <button type='button' className='menu-btn' onClick={toggleMenu} >
                    <span 
                        class={"material-symbols-outlined"} 
                        style={{fontSize: '1.8rem'}}> 
                        {openMenu ? 'close' : 'menu'}
                    </span>                 
                </button>
            </div>  
        </nav>
    </>
  )
}

export default Navbar