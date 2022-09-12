import {React, createContext, useState} from 'react'


export const TaskContext = createContext()

export const TaskContextProvider = (props) => {
  const [user, setUser] = useState('')
  const [users, setUsers] = useState(false)
  const [name, setName] = useState('')
  return (
    <TaskContext.Provider value={{
      user,
      setUser,
      users,
      setUsers,
      name,
      setName
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}
