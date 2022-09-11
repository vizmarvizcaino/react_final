import React, {useState} from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

 

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <>
    <nav>
      <Link exact to="/" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></Link>
      <Link exatc to="/about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></Link>
      <Link exact to="/experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></Link>
      <Link exact to="/services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></Link>
      <Link exact to="/contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></Link>
    </nav>
    
    </>
  )
}

export default Nav