import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DashBoard from '../pages/dashboard/DashBoard'
import PrivateRoute from './PrivateRoute'

const AppRoute = () => {
  return (
    <div>AppRoute
       <BrowserRouter>
        <Routes>
            <Route>
                <PrivateRoute exact path='/dashboard' components={DashBoard} />
            </Route>
        </Routes>
       </BrowserRouter> 
       
    </div>
  )
}

export default AppRoute