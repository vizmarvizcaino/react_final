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
      <h5>My Recent</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="potfolio__item-image">
            <img src={ Img1 } alt="img1" />
          </div>
          <h3>This is a portfolio</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://vercel.com" className='btn' target='_blank'>Demo Proyects</a>
        </article>

        <article className="portfolio__item">
          <div className="potfolio__item-image">
            <img src={ Img2 } alt="img1" />
          </div>
          <h3>This is a portfolio</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://vercel.com" className='btn' target='_blank'>Demo Proyects</a>
        </article>

        <article className="portfolio__item">
          <div className="potfolio__item-image">
            <img src={ Img3 } alt="img1" />
          </div>
          <h3>This is a portfolio</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://vercel.com" className='btn' target='_blank'>Demo Proyects</a>
        </article>

        <article className="portfolio__item">
          <div className="potfolio__item-image">
            <img src={ Img4 } alt="img1" />
          </div>
          <h3>This is a portfolio</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://vercel.com" className='btn' target='_blank'>Demo Proyects</a>
        </article>

        <article className="portfolio__item">
          <div className="potfolio__item-image">
            <img src={ Img5 } alt="img1" />
          </div>
          <h3>This is a portfolio</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://vercel.com" className='btn' target='_blank'>Demo Proyects</a>
        </article>

        {/* <article className="portfolio__item">
          <div className="potfolio__item-image">
            <img src={ Img1 } alt="img1" />
          </div>
          <h3>This is a portfolio</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://vercel.com" className='btn' target='_blank'>Demo Proyects</a>
        </article> */}
        <MaterialCard />
      </div>
    </section>
  )
}

export default Portfolio