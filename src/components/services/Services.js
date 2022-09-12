import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Habilidades y Competencias</h5>
      <h2>Servicios</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo BackEnd</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Php 7, POO, MVC</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Base de datos Mysql</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>API RESTful con PHP, Laravel 6</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Laravel 5.6, 6</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>CMS Wordpress, CMS personalizado desde 0</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Entornos de servidor WAMP y XAMPP</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo FrontEnd</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Html5</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ccs3, Flexbox, Css Grid</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Javascript, JQuery</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Web Design (Diseño adaptable)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desarrollo web basado en estándares W3C</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UX/UI - Experiencia de Usuario. Interfaz de Usuario.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Accesibilidad y Usabilidad</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Programas: Sublime text 3, Visual Studio Code, Dreamweaver CC, Photoshop CS6, Illustrator CS6, Inkscape</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Frameworks: Bootstrap 4</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Control de versiones: Git/GitHub</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Posicionamiento SEO</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Poscionamiento web en buscadores</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services