import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({element: Element, ...rest}) => {
  const user = false;  
  return (
    <></>
    // <Route {...rest}>
    //   {user ? (<Element/>) : (<Redirect to='/dashboard'/>)}
    // </Route>
  )
}

export default PrivateRoute