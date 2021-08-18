import React from 'react';
import { Imagen, Producto, DescripProducto, Comentarios, TextoDescripcion, VerMas, Titulo, Precio, DescrpVerMAs, Publicado } from '../IU/DetalleProductoStyle'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { es } from 'date-fns/locale'
import Link from 'next/link';
const DetalleProducto = ({ producto }) => {

    const { id, nombre, descripcion, urlImagen, precio, pros, comentarios, creado, contras } = producto
    return (
        <Producto>
            <DescripProducto>
                <div>
                    <Imagen src={urlImagen} alt="imagen del produto" />
                </div>
                <div>
                    <Titulo>{nombre}</Titulo>
                    <TextoDescripcion>{descripcion}</TextoDescripcion>
                    <Precio>₡ {precio}</Precio>
                    <Comentarios>
                        <div>

                            <p>&#128172; {comentarios.length} </p>
                        </div>
                        <div>&#128077; {pros}</div>
                        <div>&#128078; {contras}</div>

                    </Comentarios>
                    <Publicado>Publicado hace: {formatDistanceToNow(new Date(creado), { locale: es })}</Publicado>
                </div>
            </DescripProducto>
            <DescrpVerMAs>
                <Link href="/productos/[id]" as={`/productos/${id}`}>
                    <VerMas>Ver más</VerMas>
                </Link>


            </DescrpVerMAs>
        </Producto>
    );
}

export default DetalleProducto;