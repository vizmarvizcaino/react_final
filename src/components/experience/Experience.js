import React from 'react'
import './experience.css'
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiMongodb, SiPhp, SiPython } from 'react-icons/si'
import { BsBootstrapFill } from 'react-icons/bs'
import { GrMysql } from 'react-icons/gr'


const Experience = () => {
  return (
    <section id='experience'>
    <h5>Mis Habilidades</h5>
    <h2>Mi Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <FaHtml5 className='experience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>

          <article className="experience__details">
            <SiJavascript className='experience__details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>

          <article className="experience__details">
            <FaCss3 className='experience__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className="text-light">Intermedio</small>
            </div>
          </article>

          <article className="experience__details">
            <BsBootstrapFill className='experience__details-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>

          <article className="experience__details">
            <SiTailwindcss className='experience__details-icon'/>
            <div>
              <h4>Tailwind</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>

          <article className="experience__details">
            <FaReact className='experience__details-icon'/>
            <div>
              <h4>React</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>
        </div>
      </div>


      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <FaNodeJs className='experience__details-icon'/>
            <div>
              <h4>Node JS</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>

          <article className="experience__details">
            <SiMongodb className='experience__details-icon'/>
            <div>
              <h4>MongoDB</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>

          <article className="experience__details">
            <SiPhp className='experience__details-icon'/>
            <div>
              <h4>PHP</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>

          <article className="experience__details">
            <GrMysql className='experience__details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small className="text-light">Basico</small>
            </div>
          </article>

          <article className="experience__details">
            <SiPython className='experience__details-icon'/>
            <div>
              <h4>Python</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>

        </div>

      </div>
    </div>

    </section>
  )
}

export default Experience