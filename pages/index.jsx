import React from 'react'
import Layout from '../components/layouts/layout'
import DetalleProducto from '../components/layouts/DetalleProducto'
import useProductos from '../Hooks/useProductos'
const  Home =()=> {

const   {productos}= useProductos('creado')
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
