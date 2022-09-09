import React from 'react'
import './about.css'
import ME from '../../assets/me3.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'




const About = () => {
  return (
    <section id='about'>
      <h5>Quien Soy</h5>
      <h2>Sobre Mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>3+ años en el Desarrollo</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>200+ En Todo el Mundo</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projectos</h5>
              <small>80+ completados</small>
            </article>
          </div>
          <p>
            <h3>Desarrollador web y diseñador web freelance con más de 10 años de experiencia.</h3>
            Actualmente diseño, rediseño y programo nuevos proyectos y sitios de aplicaciones web, ya sea del lado del cliente (Front-end, UX / UI) como del lado del servidor (Back-end).
            Continuamente aprendiendo y adquiriendo nuevas habilidades en función a las actuales y futuras demandas y tendencias tecnológicas en el campo del diseño y desarrollo de aplicaciones web en general.
            Apasionado con el trabajo que realizo, ofreciendo y aportando mis conocimientos, habilidades y experiencia, así como nuevas ideas, soluciones, personalización y seguimiento de calidad al cliente y su objetivo en cada proyecto.  
          </p>
          <a href="#contact" className="btn btn-primary">Contactame</a>
        </div>
      </div>
    
    </section>
  )
}

export default About