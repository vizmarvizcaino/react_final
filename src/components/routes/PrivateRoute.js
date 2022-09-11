import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({element: Element, componen: Component, ...rest}) => {
  const user = true;  
  return (
   
    <Route {...rest}>
      {user ? (Element) : (<Component/>)}
    </Route>
  )
}

export default PrivateRoute