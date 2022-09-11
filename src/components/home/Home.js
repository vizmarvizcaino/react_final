import React from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import Experience from '../experience/Experience'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Nav from '../nav/Nav'
import Portfolio from '../portfolio/Portfolio'
import Services from '../services/Services'
import Testimonials from '../testimonials/Testimonials'

const Home = () => {
  return (
    <>
    <Header />
    <Nav/>
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default Home