import React, { Fragment } from 'react'
import Layout from '../components/layouts/layout'
import { Formulario,CampoDiv,InputS, H1,Error } from '../components/IU/formulario'

import useValidacion from '../Hooks/useValidacion'
import validateCreateAccount from '../rules/validateCreateAccount'


const INITIAL_STATE={
  nombre:'',
  email:'',
  password:''
}
const CreateAccount = () => {
  validateCreateAccount

  
  const {valores,errores,submitForm,handleSubmit,handleChange,handleBlur}=useValidacion(INITIAL_STATE,validateCreateAccount,createAccount)
  const {nombre, email, password}= valores

 function  createAccount(){

    console.log("creado Cuenta")
  }
  return (
    <div>
      <Layout>
        <Fragment>
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
            <InputS type="submit" value="Crear Cuenta" />
          </Formulario>

        </Fragment>


      </Layout>

    </div>
  )
}

export default CreateAccount