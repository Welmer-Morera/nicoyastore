import React from 'react';
import{Imagen} from '../IU/DetalleProductoStyle'
import  formatDistanceToNow  from 'date-fns/formatDistanceToNow'
import { es } from 'date-fns/locale'

const DetalleProducto = ({producto}) => {

    const{nombre, descripcion,urlImagen, emprendedor, email, telefono, url, precio, votos , comentarios,creado} =producto
    return (
         <li>
             <div>
                 <div>
                    <Imagen src={urlImagen} alt="imagen del produto" />
                 </div>
                 <div>
                     <h1>{nombre}</h1>
                     <h3>₡ {precio}</h3> 
                     <p>{descripcion}</p>
                     <div>
                         <img src="static/img/comentario.png" alt="" />
                         <p>{comentarios.length} Comentarios</p>
                     </div>
                     <p>Publicado hace: {formatDistanceToNow( new Date(creado), {locale: es})}</p>
                 </div>
             </div> 
             <div>

                 <div>&#11088; {votos}</div>
             </div>  
         </li>
          );
}
 
export default DetalleProducto;