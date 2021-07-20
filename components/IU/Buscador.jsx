import React from 'react';
import styled from '@emotion/styled';

const Form = styled.form`
position: relative;
`
const InputT = styled.input`

    border: 1px solid var(--verde);
    padding:  1rem;
    min-width: 300px;
    border-radius: 5px;
`
const InputS = styled.button`
height: 3rem;
width: 3rem;
display: block;
background-size: 4rem;
background-image: url('static/img/lupa.png');
background-repeat: no-repeat;
position: absolute;
right: 1rem;
top: 1px;
background-color: white;
border: none;
text-indent:-9999px;

&:hover{
    cursor: pointer;
}
`
const Buscador = () => {
    return ( 
        <Form>
            <InputT   placeholder="Buscar producto" type ="text"/>
            <InputS type="submit">Buscar</InputS>
        </Form>
     );
}
 
export default Buscador;