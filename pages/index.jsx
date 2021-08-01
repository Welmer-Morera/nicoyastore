import React, {useEffect, useState, useContext} from 'react'
import Layout from '../components/layouts/layout'
import { FirebaseContext } from '../firebase'
import DetalleProducto from '../components/layouts/DetalleProducto'
const  Home =()=> {

  const [productos, setProdutos] = useState([])
  const {firebase}= useContext(FirebaseContext)
  useEffect(() => {
    const obtenerProductos=()=>{

      firebase.db.collection('productos').orderBy('creado','desc').onSnapshot(misSnapshot)
    }
    obtenerProductos() 
  }, [])

  const misSnapshot = snapshot =>{
     const misproductos = snapshot.docs.map(doc=>{
       return {
         id:doc.id,
         ...doc.data()
       }
     })
     setProdutos(misproductos)
  }
  return (
   <div>
     <Layout>
     <div className="listado-productos">
      <div className="contenedor">
        <ul className=".bg-white">
        {productos.map(producto=>(
          <DetalleProducto 
          key={producto.id}
          producto={producto}
          />
        ))}
        </ul>
      </div>
     </div>
     </Layout>
     
   </div>
  )
}

export default Home
