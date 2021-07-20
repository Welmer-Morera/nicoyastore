import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled';

const Nave=  styled.nav`
padding-left:2rem;
 a{
     font-size: 1.8 rem;
      margin-left: 2rem;
      color: var(--verde);
      &:last-of-type{
          margin-right: 0;
      }

 }
`
const Nav = () => {
    return ( 
        <Nave>
            <Link href="/">Inicio</Link>
            <Link href="/popular">Populares</Link>
            <Link href="/newProduct">Nuevo Producto</Link>

        </Nave>
     );
}
 
export default Nav;