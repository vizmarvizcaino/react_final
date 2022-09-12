import { React, useState, useContext } from 'react'
import {
  Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito,
  MensajeError, H2
} from '../../elementos -formularios/Formularios';
import { TaskContext } from '../context/TaskContext';
import Inputs from './Inputs';

const FormularioPrincipal = () => {
  const { user, setUser, users, setUsers, name, setName } = useContext(TaskContext)
  const [nombre, setNombre] = useState({ campo: '', valido: null })
  const [password, setPassword] = useState({ campo: '', valido: null })
  const [password2, setPassword2] = useState({ campo: '', valido: null })
  const [correo, setCorreo] = useState({ campo: '', valido: null })
  const [terminos, setTerminos] = useState(false)
  const [formularioValido, setformularioValido] = useState(null)

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        setPassword2((prevState) => {
          return {
            ...prevState,
            valido: 'false'
          }
        })
      } else {
        setPassword2((prevState) => {
          return {
            ...prevState,
            valido: 'true'
          }
        })
      }

    }
  }

  const onChangeTerminos = (e) => {
    setTerminos(e.target.checked)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (user === 'vizmar.vizcaino@gmail.com') {
      setUsers(true)
    }
    if (
      nombre.valido === 'true' &&
      password.valido === 'true' &&
      password2.valido === 'true' &&
      correo.valido === 'true' &&
      terminos
    ) {
      setformularioValido(true)
      setNombre({ campo: '', valido: '' })
      setPassword({ campo: '', valido: '' })
      setPassword2({ campo: '', valido: '' })
      setCorreo({ campo: '', valido: '' })
      setUser(correo.campo)
      setName(nombre.campo)
    } else {
      setformularioValido(false)
    }

  }

  return (
    <main>

      <H2>Ingresa los datos de autenticacion</H2>
      <Formulario action="" onSubmit={onSubmit}>

        <Inputs
          estado={nombre}
          cambiarEstado={setNombre}
          tipo='text'
          label='Nombre'
          placeholder='john Doe'
          name='usuario'
          leyenda='El nombre solo puede contener letras y espacios.'
          expresionesRegulares={expresiones.nombre}
        />

        <Inputs
          estado={correo}
          cambiarEstado={setCorreo}
          tipo='email'
          label='Correo Electronico'
          placeholder='john@correo.com'
          name='correo'
          leyenda='El correo electronico no debe tener espacios ni caracteres especiales.'
          expresionesRegulares={expresiones.correo}
        />

        <Inputs
          estado={password}
          cambiarEstado={setPassword}
          tipo='password'
          label='contarsena'
          placeholder='Ingrese su contraseña'
          name='password1'
          leyenda='La contrasena tiene que ser de 4 a 12 digitos'
          expresionesRegulares={expresiones.password}
        />

        <Inputs
          estado={password2}
          cambiarEstado={setPassword2}
          tipo='password'
          label='Repetir Contarsena'
          name='password2'
          leyenda='Ambas contrasena deben ser iguales.'
          funcion={validarPassword2}
        />
        <div>
          <ContenedorTerminos >
            <Label>
              <input type="checkbox"
                name="terminos" id="terminos"
                checked={terminos}
                onChange={onChangeTerminos}
              />
              Acepto los Terminos y Condiciones
            </Label>
          </ContenedorTerminos>
        </div>

        {formularioValido === false && <MensajeError>
          <p>
            <b>Error:</b> Por favor rellene el formulario correctamente
          </p>
        </MensajeError>}

        <ContenedorBotonCentrado>
          <Boton type='submit'>Enviar</Boton>
          {formularioValido === true && <MensajeExito>Vuelva a ingresar los datos correctamente</MensajeExito>}
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  )
}

export default FormularioPrincipal