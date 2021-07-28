import React, { Fragment,useState } from 'react'

import { Formulario,CampoDiv,InputS, H1,Error,DivPri, Div } from '../components/IU/formularioLogin'
import Router from 'next/router'
import firebase from '../firebase'
import useValidacion from '../Hooks/useValidacion'
import validarCrearCuenta from '../rules/validarCrearCuenta'


const INITIAL_STATE={
  nombre:'',
  email:'',
  password:''
}
const CreateAccount = () => {
  

  const [error, setError] = useState(false)
  const {valores,errores,handleSubmit,handleChange,handleBlur}=useValidacion(INITIAL_STATE,validarCrearCuenta,crearCuenta)
  const {nombre, email, password}= valores

  async function crearCuenta() {
    try {
      await firebase.registrar(nombre, email, password);
      Router.push('/');
    } catch (error) {
      console.error('Hubo un error al crear el usuario ', error.message);
      setError(error);
    }
  }
  return (
    <DivPri>
      
        <Div>
          <H1>Nueva Cuenta</H1>
          <Formulario 
          
            onSubmit={handleSubmit}
            noValidate
          >

            <CampoDiv>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Nombre Completo"
                name="nombre"
                onChange={handleChange} 
                onBlur={handleBlur}
              />
            </CampoDiv>
            {errores.nombre && <Error>{errores.nombre}</Error>}
            <CampoDiv>
              <label htmlFor="email">Correo</label>
              <input
                type="email"
                id="email"
                placeholder="Correo"
                name="email"
                onChange={handleChange} 
                onBlur={handleBlur}
              />
            </CampoDiv>
            {errores.email && <Error>{errores.email}</Error>}
            <CampoDiv>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                name="password"
                onChange={handleChange} 
                onBlur={handleBlur}
              />
            </CampoDiv>
            {errores.password && <Error>{errores.password}</Error>}
            {error && <Error>{error.message}</Error>}
            <InputS type="submit" value="Crear Cuenta" />
          </Formulario>

        </Div>


      

    </DivPri>
  )
}

export default CreateAccount