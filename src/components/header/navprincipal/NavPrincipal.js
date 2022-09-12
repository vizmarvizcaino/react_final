import React, { useState } from 'react'
import './navprincipal.css'
import { Link, NavLink } from 'react-router-dom'

const NavPrincipal = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className='nav'>
      <Link to='/contact' className='logo' >Vizmar Vizcaino</Link>
      <div className="links">
        <NavLink to="/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}></NavLink>
        <NavLink to="/about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>Sobre Mi</NavLink>
        <NavLink to="/experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experiencia</NavLink>
        <NavLink to="/services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>Servicios</NavLink>
        <NavLink to="/contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contacto</NavLink>
      </div>
    </div>
  )
}

export default NavPrincipal