import React, { useState } from 'react'
import './navprincipal.css'

const NavPrincipal = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className='nav'>
      <a href='/contact' className='logo' >Vizmar Vizcaino</a>
      <div className="links">
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>Sobre Mi</a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experiencia</a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>Servicios</a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contacto</a>
      </div>
    </div>
  )
}

export default NavPrincipal