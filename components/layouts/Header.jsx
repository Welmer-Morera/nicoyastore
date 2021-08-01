import React, { Fragment, useContext } from 'react'
import Buscador from '../IU/Buscador';
import Nav from './Nav';
import Button from '../IU/button';
import Link from 'next/link'
import { FirebaseContext } from '../../firebase';
import { ContenedorHeader, Logo, HeaderStyle, Div2, Div1, P1, } from '../IU/headerStyle'

const Header = () => {

    const { usuario, firebase } = useContext(FirebaseContext)
    return (
        <HeaderStyle>
            <ContenedorHeader>
                <Div1>

                    <Link href="/">
                        <Logo>N <span>STORE</span></Logo>
                    </Link>
                   
                    <Buscador />
                    <Nav />
                </Div1>
                <Div2>
                    {usuario ? (
                        <Fragment>
                            <P1>Bienvenido: {usuario.displayName}</P1>
                             <Button bgColor="#ff322e"
                                onClick={() => firebase.cerrarSesion()}
                            >Cerrar Sesión</Button> 

                            



                        </Fragment>
                    ) : (
                        <Fragment>
                            <Link href="/login">
                                <Button bgColor="#11862f">Login</Button>
                            </Link>
                            <Link href="/Registro">
                                <Button bgColor="#007fdb">Nueva Cuenta</Button>
                            </Link>
                        </Fragment>
                    )}
                </Div2>
            </ContenedorHeader>
        </HeaderStyle>


    );
}

export default Header;