import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import MaterialCard from '../material-ui/MaterialCard'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi Reciente</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        <MaterialCard />
        <MaterialCard />
        <MaterialCard />
        <MaterialCard />
        <MaterialCard />
        <MaterialCard />
      </div>
    </section>
  )
}

export default Portfolio