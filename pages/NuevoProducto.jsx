import React, { useState, useContext } from 'react'
import Layout from '../components/layouts/layout'
import { Formulario, CampoDiv, InputS, H1, Error, DivCon, DivConte, DivPri } from '../components/IU/formulario'
import Router, { useRouter } from 'next/router'
import { FirebaseContext } from '../firebase'
import useValidacion from '../Hooks/useValidacion'
import ValidarNuevoProducto from '../rules/validarNuevoProducto'
import FileUploader from 'react-firebase-file-uploader'
import Error404 from '../components/layouts/Error'
const INITIAL_STATE = {
  nombre: '',
  descripcion: '',
  emprendedor: '',
  email: '',
  telefono: '',
  url: '',
  precio:''
}


const NuevoProducto = () => {


  const [nombreImagen, setNombreImagen] = useState('')
  const [subiendo, setSubiendo] = useState(false)
  const [progreso,setProgreso] = useState(0)
  const [urlImagen, setUrlImagen] = useState('')
  const [error, setError] = useState(false)

  const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(INITIAL_STATE, ValidarNuevoProducto, crearProducto)
  const { nombre,  descripcion, emprendedor, email, telefono, url, precio } = valores

  const router = useRouter()
  const { usuario, firebase } = useContext(FirebaseContext)
 
  const handleUploadStart = () => {
    setProgreso(0);
    setSubiendo(true);
}

const handleProgress = progreso => setProgreso({ progreso });

const handleUploadError = error => {
    setSubiendo(error);
    console.error(error);
};

const handleUploadSuccess = nombre => {
    setProgreso(100);
    setSubiendo(false);
    setNombreImagen(nombre)
    firebase
        .storage
        .ref("productos")
        .child(nombre)
        .getDownloadURL()
        .then(url => {
          console.log(url);
          setUrlImagen(url);
        } );
};
  async function crearProducto() {
    if (!usuario) {
      return router.push('/Registro')
    }
    const producto = { 
      nombre, 
      descripcion,
      urlImagen,
      emprendedor:{id:usuario.uid,nombre:usuario.displayName,email:usuario.email}, 
      telefono, 
      url,
      precio,
      pros: 0,
      contras:0, 
      comentarios: [], 
      creado: Date.now(),
      votadoPro:[],
      votadoContra:[]
     }
    firebase.db.collection('productos').add(producto);
    setError(false)
    return router.push('/')


  }

 
  return (
    <Layout>


      {
        !usuario? <Error404/>:(
          <Formulario
        onSubmit={handleSubmit}
        noValidate
      >
        <H1>Nuevo Producto</H1>
        <DivCon>
          <DivConte>
            <fieldset>
              <legend>Sobre  tu Producto</legend>
              <CampoDiv>
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Nombre del Producto"
                  name="nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </CampoDiv>
              {errores.nombre && <Error>{errores.nombre}</Error>}

              <CampoDiv>
                <label htmlFor="Imagen">Imagen</label>
                <FileUploader
                  accept="image/*"
                  id="imagen"
                  name="imagen"
                 
                  randomizeFilename
                  storageRef={firebase.storage.ref("productos")}
                  onUploadStart={handleUploadStart}
                  onUploadError={handleUploadError}
                  onUploadSuccess={handleUploadSuccess}
                  onProgress={handleProgress}
                />
              </CampoDiv>
              <CampoDiv>
                <label htmlFor="precio">Precio</label>
                <input
                  type="number"
                  id="precio"
                  placeholder="precio"
                  name="precio"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </CampoDiv>
              {errores.precio && <Error>{errores.precio}</Error>}
              <CampoDiv>
                <label htmlFor="Descripcion">Descripción</label>
                <textarea
                  type="text"
                  id="descripcion"
                  placeholder="descripcion"
                  name="descripcion"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </CampoDiv>
              {errores.descripcion && <Error>{errores.descripcion}</Error>}
              
            </fieldset>
          </DivConte>
          <DivConte>
            <fieldset>
              <legend>Sobre tu Empresa</legend>
              <CampoDiv>
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="number"
                  id="telefono"
                  placeholder="Teléfono"
                  name="telefono"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </CampoDiv>
              {errores.telefono && <Error>{errores.telefono}</Error>}
              <CampoDiv>
                <label htmlFor="url">Facebook</label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  placeholder="Digita tu dirección de facebook o Sitio Web"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </CampoDiv>
              {errores.url && <Error>{errores.url}</Error>}
            </fieldset></DivConte>
        </DivCon>
        {error && <Error>{error.message}</Error>}
        <InputS type="submit" value="Crear Nuevo Producto" />


      </Formulario>
        )
      }


    </Layout>
  )
}

export default NuevoProducto