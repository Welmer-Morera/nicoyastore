import React, { Fragment,useState } from 'react'

import { Formulario,CampoDiv,InputS, H1,Error,Div,Logo,DivPri } from '../components/IU/formularioLogin'
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
    } catch (error)  {
      setError(error.message);
      console.log(error.message)
    }
  }
  return (
    <DivPri>
     
        <Fragment>
        
               
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inconsolata:wght@300&display=swap" rel="stylesheet" />
                <link href="/static/css/app.css" rel="stylesheet"/>
            

            
          <Div>
          <Logo>N <span>STORE</span></Logo>
          <H1>Bienvenido</H1>
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
          </Div>
        </Fragment>


      

    </DivPri>
  )
}

export default Login