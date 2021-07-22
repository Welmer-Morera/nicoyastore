import React, { Fragment,useContext } from 'react'
import Buscador from '../IU/Buscador';
import Nav from './Nav';
import Button from '../IU/button';
import Link from 'next/link'
import styled from '@emotion/styled';
import { FirebaseContext } from '../../firebase';
 
const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px){
        display: flex;
        justify-content: space-between;
    }
`
const Logo = styled.p`
    color: var(--verde);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Inconsolata', sans-serif;
    margin-right: 2rem;
`
const HeaderStyle = styled.header`
    border-bottom: 2px solid var(--cafe2);
    padding: 1rem 0;
`
const Div2 = styled.div`
    display: flex;
    align-items: center;
`
const Div1= styled.div`
    display: flex;
    align-items: center;
`
const P1 = styled.div`
    margin-right: 2rem;
`
const Header = () => {

    const {usuario, firebase}= useContext(FirebaseContext)
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
                            onClick={()=>firebase.cerrarSesion()}
                            >Cerrar Sesión</Button>

                        </Fragment>
                    ) : (
                        <Fragment>
                            <Link href="/login">
                                <Button bgColor="#11862f">Login</Button>
                            </Link>
                            <Link href="/createAccount">
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