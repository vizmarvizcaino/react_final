import React from 'react'
import './footer.css'
import { FaRegCopyright } from 'react-icons/fa'
import { BsGithub, BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <section className='containers'>
      <p>creado por Vizmar Vizcaino</p>
      <p>Todos los derechos reservados <FaRegCopyright /></p>
      <div className="containers__socials">
        <a href="https://www.facebook.com/vizmar.vizcaino"><BsFacebook className='socials-icons' /></a>
        <a href="https://www.instagram.com/vizmar_vizcaino/"><BsInstagram className='socials-icons' /></a>
        <a href="https://github.com/vizmarvizcaino"><BsGithub className='socials-icons' /></a>
      </div>
    </section>
  )
}

export default Footer