import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../header/Header';
import Nav from '../nav/Nav';
import About from '../about/About'
import Experience from '../experience/Experience';
import Services from '../services/Services';
import Portfolio from '../portfolio/Portfolio';
import Testimonials from '../testimonials/Testimonials';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer'
import DashBoard from '../pages/dashboard/DashBoard'
import PrivateRoute from './PrivateRoute'
import FormularioPrincipal from '../contact/formulario/FormularioPrincipal';

const AppRoute = () => {
  return (
    <div>
      <BrowserRouter >
  
        {/* <Switch>
            <Route exact path='/' element={<FormularioPrincipal/>} />
            <Route exact path='/*' element={<FormularioPrincipal/>} />
        </Switch> */}
      </BrowserRouter > 
       
    </div>
  )
}

export default AppRoute