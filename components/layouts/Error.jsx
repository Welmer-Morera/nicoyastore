import React from 'react'
import styled from '@emotion/styled';

const Div = styled.div`
    max-width: 700px;
    width: 95%;
    display: flex;
    margin: 0 auto;
    margin-top: 5rem;
    padding: 2rem;
    justify-content: space-between;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `
const H1 = styled.h1`
    color:#F24236;
    font-size: 5rem;
`
const H2= styled.h2`
    font-size: 2.4rem;
    font-family: 'Inconsolata', sans-serif;
    
    color: #888;
    `
const Imagen =styled.img`
    width: 200px;
`
const Error404 = () => {
    return (
        <Div>
            <div>
            <H1>Error !!!</H1>
            <H2>La pagina consultada no existe</H2>
            </div>
            <div>
                <Imagen src="/static/img/cancelar.png" alt="img-cancelar" />
            </div>
            
        </Div>

    );
}

export default Error404;