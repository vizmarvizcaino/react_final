import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocial from './HeaderSocial'
import NavPrincipal from './navprincipal/NavPrincipal'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <NavPrincipal />
        <div className="container-header">
          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <div className="container-name">
            <h5>Hola, soy</h5>
            <h1>Vizmar Vizcaino</h1>
            <h5 className="text-aling">Fullstack Devoloper</h5>
            <CTA />
          </div>
        </div>
        <HeaderSocial />
        <a href="contact" className='scroll__down'>Ir Abajo</a>
      </div>
    </header>
  )
}

export default Header