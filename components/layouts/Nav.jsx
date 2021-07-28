import React, {useContext} from 'react'
import Link from 'next/link'
import styled from '@emotion/styled';
import { FirebaseContext } from '../../firebase';

const Nave=  styled.nav`
padding-left:2rem;
 a{
     font-size: 1.6rem;
      margin-left: 1rem;
      
      color: var(--verde);
      &:last-of-type{
          margin-right: 1rem;
      }

 }
`


const Nav = () => {

    const {usuario}=useContext(FirebaseContext)
    return ( 
        <Nave>
            <Link href="/">Inicio</Link>
            <Link href="/popular">Populares</Link>
            {usuario&&(<Link href="/NuevoProducto">+ Producto</Link>)}
            

        </Nave>
     );
}
 
export default Nav;