import React, { useContext } from 'react';
import './dataubicacion.css';
import { TaskContext } from '../context/TaskContext';

const DataUbicacion = ({ city, region, country }) => {
  const { name } = useContext(TaskContext)
  return (
    <div className='container'>
      `Hola, {name} gracias por visitarnos desde {city} {region} {country}`
    </div>
  )
}
export default DataUbicacion
