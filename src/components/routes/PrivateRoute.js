import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';
import { Route } from 'react-router-dom'

const PrivateRoute = ({ element: Element, componen: Component, ...rest }) => {
  const { users } = useContext(TaskContext)
  return (
    <Route {...rest}>
      {users ? (Element) : (<Component />)}
    </Route>
  )
}

export default PrivateRoute