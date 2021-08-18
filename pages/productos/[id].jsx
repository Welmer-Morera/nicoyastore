import React, { useEffect, useContext, useState, Fragment } from 'react';
import { useRouter } from 'next/router'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { es } from 'date-fns/locale'
import InfiniteScroll from "react-infinite-scroll-component";
import { FirebaseContext } from '../../firebase';
import Error404 from '../../components/layouts/Error'
import Layout from '../../components/layouts/layout';
import Cargando from '../../components/IU/Cargando'
import { CampoDiv, } from '../../components/IU/formulario'
import Button from '../../components/IU/button'
import { ContenedorPrincipal, BtnAgreComentario, TituloD, ContenedorProducto, FormComentarios, Publicado, TextoDescripcion, ImagenDe, Precio, Comentario, Li, Encabezado, Comentarios, ScrollComentarios, Boton } from '../../components/IU/DetalleProductoStyle'
const Producto = () => {

    const [producto, setProducto] = useState({})
    const [error, setError] = useState(false)
    const [comentario, setComentario] = useState({})
    const [conexionDB, setConexionDB] = useState(true)

    const router = useRouter()
    const { query: { id } } = router

    const { firebase, usuario } = useContext(FirebaseContext)

    useEffect(() => {
        if (id && conexionDB) {
            const ObtenerPoducto = async () => {
                const productoQuery = await firebase.db.collection('productos').doc(id)
                const productoSelecionado = await productoQuery.get()
                if (productoSelecionado.exists) {
                    setProducto(productoSelecionado.data())
                    setConexionDB(false)
                } else {
                    setError(true)
                    setConexionDB(false)
                }

            }
            ObtenerPoducto()
        }

    }, [id, producto])

    if (Object.keys(producto).length === 0 && !error) return <Cargando/>


    const { nombre, descripcion, urlImagen, emprendedor, email, telefono, url, precio, pros, comentarios, creado, contras, votadoPro, votadoContra } = producto

    const Votacion = () => {
        if (!usuario) return router.push('/Login')
        const totalPro = pros + 1
        if (votadoPro.includes(usuario.uid)) return
        const nuevoVotoPro = [...votadoPro, usuario.uid]
        firebase.db.collection('productos').doc(id).update({ pros: totalPro, votadoPro: nuevoVotoPro })
        setProducto({ ...producto, pros: totalPro })
        setConexionDB(true)
    }

    const Contras = () => {
        if (!usuario) return router.push('/Login')
        const totalContras = contras + 1
        if (votadoContra.includes(usuario.uid)) return
        const nuevoVotoContra = [...votadoContra, usuario.uid]
        firebase.db.collection('productos').doc(id).update({ contras: totalContras, votadoContra: nuevoVotoContra })
        setProducto({ ...producto, contras: totalContras })
        setConexionDB(true)
    }

    const comentarioChange = e => {
        setComentario({
            ...comentario,
            [e.target.name]: e.target.value
        })
    }


    const Creador = id => {
        if (emprendedor.id == id) return true
    }

    const agregarCometario = e => {
        e.preventDefault()
        if (!usuario) return router.push('/login')

        comentario.usuarioID = usuario.uid
        comentario.usuarioNombre = usuario.displayName
        comentario.creado = Date.now()

        const nuevosComentarios = [...comentarios, comentario]
        
        firebase.db.collection('productos').doc(id).update({
            comentarios: nuevosComentarios
        })

        setProducto({
            ...producto, comentarios: nuevosComentarios
        })
        setConexionDB(true)

        setComentario({
            mensaje:""
        })
    }

    const ValidarUsuarioBorrar=()=>{

        if(!usuario) return false;

        if(emprendedor.id === usuario.uid) {
            return true
        }

        
    }

    const eliminarProducto = async () => {

        if(!usuario) {
            return router.push('/login')
        }

        if(emprendedor.id !== usuario.uid) {
            return router.push('/')
        }

        try {
            await firebase.db.collection('productos').doc(id).delete();
            router.push('/')
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Layout >
            <Fragment >
                {error ? <Error404 /> : (
                    <ContenedorPrincipal>

                        <TituloD>{nombre}</TituloD>
                        <ContenedorProducto>
                            <div>
                                <TextoDescripcion>{descripcion}</TextoDescripcion>
                                <ImagenDe src={urlImagen} />
                                <Comentarios>
                                    <Publicado>Publicado hace: {formatDistanceToNow(new Date(creado), { locale: es })}</Publicado>
                                    {usuario ? (
                                        <Fragment>
                                            <div><Boton onClick={Votacion}>&#128077;</Boton> {pros}</div>
                                            <div><Boton onClick={Contras}>&#128078;</Boton> {contras}</div>
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            <div>&#128077; {pros}</div>
                                            <div>&#128078; {contras}</div>
                                        </Fragment>

                                    )}

                                </Comentarios>


                                {
                                    usuario && (
                                        <Fragment>
                                            <h2>Agrega tu comentario</h2>
                                            <FormComentarios onSubmit={agregarCometario}>
                                                <CampoDiv  >
                                                    <input type="text" placeholder="Escribe tu comentario" name="mensaje" onChange={comentarioChange} value={comentario.mensaje} />
                                                </CampoDiv>
                                                <BtnAgreComentario>Agregar</BtnAgreComentario>
                                            </FormComentarios>
                                        </Fragment>
                                    )
                                }





                            </div>
                            <aside>
                                <Encabezado>
                                    <p>Precio: ₡{precio}</p>
                                    <p>Sitio web:<a href={url}> {url}</a></p>
                                    <p>Correo: {emprendedor.email}</p>
                                    <p>Teléfono:{telefono}</p>
                                    <p>Publicado po: {emprendedor.nombre}</p>

                                </Encabezado>

                                {ValidarUsuarioBorrar()&&<Button bgColor="#ff322e" onClick={eliminarProducto}>Eliminar Producto</Button>}

                                <ScrollComentarios>


                                    <Comentario>Comentarios</Comentario>

                                    <InfiniteScroll
                                        dataLength={comentarios.length}
                                        loader={<h4>Loading...</h4>}
                                        height={320}
                                        endMessage={
                                            comentarios.length ? (
                                                <p style={{ textAlign: "center" }}>
                                                    <b>Fin de los comentarios</b>
                                                </p>) : (<p style={{ textAlign: "center" }}>
                                                    <b>no hay  comentarios</b>
                                                </p>)

                                        }
                                    ><ul>
                                            {comentarios.map((cometario ,i) => (
                                                <Li key={`${comentario.usuarioID}-${i}`} >

                                                    <h1>{cometario.mensaje}</h1>
                                                    <p>{cometario.usuarioNombre}  {Creador(cometario.usuarioID) && (<span>&#11088;</span>)}  </p>
                                                    <p> {formatDistanceToNow(new Date(cometario.creado), { locale: es })}</p>


                                                </Li>
                                            ))}

                                        </ul>

                                    </InfiniteScroll>

                                </ScrollComentarios>

                            </aside>
                        </ContenedorProducto>
                    </ContenedorPrincipal>
                )}

            </Fragment>
        </Layout>

    );
}

export default Producto;