import React from 'react'
import './testimonialstodo.css'

const TestimonialsTodo = ({ imag, tittle, description }) => {
  return (
    <section id="testimonials">
      <div className="container testimonials__container">
        <article className="testimonials">
          <div className="client__avatar">
            <img src={imag} alt="" />
          </div>
          <h5 className="client__name">{tittle}</h5>
          <small className="client__review">
            {description}
          </small>
        </article>
      </div>
    </section>
  )
}

export default TestimonialsTodo