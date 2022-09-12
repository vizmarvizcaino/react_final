import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../home/Home';
import About from '../about/About'
import Experience from '../experience/Experience';
import Services from '../services/Services';
import Contact from '../contact/Contact';
import PrivateRoute from './PrivateRoute'
import FormularioPrincipal from '../forms/FormularioPrincipal';

const AppRoute = () => {
  return (
    <div>
      <BrowserRouter >
        <Switch>
          <PrivateRoute exact path='/' component={Home} componen={FormularioPrincipal} />
          <Route exact path='/about' component={About} />
          <Route exact path='/experience' component={Experience} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter >
    </div>
  )
}

export default AppRoute