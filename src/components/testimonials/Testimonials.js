import React from 'react'
import './testimonials.css'
import TestimonialsTodo from './TestimonialsTodo'
import Imag1 from '../../assets/avatar1.jpg'
import Imag2 from '../../assets/avatar2.jpg'
import Imag3 from '../../assets/avatar3.jpg'
import Imag4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return (
    <>
      <section className="testimonials-text">
        <h5>Testimonios de Nuestros Clientes</h5>
        <h2>Testimonios</h2>
      </section>
      <div className="container-testimonials">
        <TestimonialsTodo
          imag={Imag1}
          tittle='Ernest Avatar'
          description='Genial, Definitivamente trabajaré con él nuevamente en otro momento. Rápido y muy comprensivo con mis necesidades. muy buen freelancer. 
          Dales cualquier cosa y se completarán a tu entera satisfacción. Continuaré dándole trabajos grandes o pequeños. es muy buenos en lo que hacen..'
        />

        <TestimonialsTodo
          imag={Imag2}
          tittle='Ernest Avatar'
          description='Genial, Definitivamente trabajaré con él nuevamente en otro momento. Rápido y muy comprensivo con mis necesidades. muy buen freelancer. 
          Dales cualquier cosa y se completarán a tu entera satisfacción. Continuaré dándole trabajos grandes o pequeños. es muy buenos en lo que hacen..'
        />
      </div>
    </>
  )
}

export default Testimonials