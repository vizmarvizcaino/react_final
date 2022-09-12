import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/portfolio6.png'
import Img2 from '../../assets/portfolio2.png'
import Img3 from '../../assets/portfolio3.png'
import Img4 from '../../assets/portfolio4.png'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio1.png'
import MaterialCard from '../material-ui/MaterialCard'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi Reciente</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        <MaterialCard img={Img1} title='Todo-List' description='Html, Css, JavaScript, React, Styled Component' />
        <MaterialCard img={Img2} title='Validacion de Formularios' description='Html, Css, JavaScript, React, Styled Component' />
        <MaterialCard img={Img3} title='Trabajando Con API' description='Html, Css, JavaScript, React, Styled Component, API' />
        <MaterialCard img={Img4} title='Aplicacion del clima Con API' description='Html, Css, JavaScript, API' />
        <MaterialCard img={Img5} title='Aplicacion Perfil de Ingreso Larnu' description='Html, Css, JavaScript' />
        <MaterialCard img={Img6} title='Juego Pin Pon' description='Html, Css, CssGrid, FlexBox' />
      </div>
    </section>
  )
}

export default Portfolio