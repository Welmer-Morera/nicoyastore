import React, { Fragment,useState } from 'react'
import Layout from '../components/layouts/layout'
import { Formulario,CampoDiv,InputS, H1,Error } from '../components/IU/formulario'
import Router from 'next/router'
import firebase from '../firebase'
import useValidacion from '../Hooks/useValidacion'
import validarIniciarSesion from '../rules/validarIniciarSesion'

const INITIAL_STATE={
  email:'',
  password:''
}

const  Login =()=> {
 

  const [error, setError] = useState(false)
  const {valores,errores,submitForm,handleSubmit,handleChange,handleBlur}=useValidacion(INITIAL_STATE,validarIniciarSesion,iniciarSesion)
  const { email, password}= valores

  async function iniciarSesion() {
    try {
       await firebase.login(email, password);
      Router.push('/');
    } catch (error) {
      console.error('Hubo un error al autenticar el usuario ', error.message);
      setError(error.message);
      console.log(error.message)
    }
  }
  return (
    <div>
      <Layout>
        <Fragment>
          <H1>Iniciar Sesión</H1>
          <Formulario 
          
            onSubmit={handleSubmit}
            noValidate
          >

            
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
            {error && <Error>{error}</Error>}
            <InputS type="submit" value="Iniciar Sesión" />
          </Formulario>

        </Fragment>


      </Layout>

    </div>
  )
}

export default Login