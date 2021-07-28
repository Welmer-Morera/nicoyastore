import styled from '@emotion/styled';

export const DivPri = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url('static/img/fondo2.jpg');
    background-repeat: no-repeat;
    background-size: 1540px  883px;
    background-attachment: fixed;
    display: flex;
    align-items: center

`;
export const Div = styled.div`
    border-style: hidden ;
    border-color:#806566 ;
    
    max-width: 600px;
    width: 95%;
    margin: 1rem auto 0 auto;
    background-color: white;
    opacity:850%;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;
export const Formulario = styled.form`
    max-width: 500px;
    width: 95%;
    margin: 2rem auto 2rem auto;
   
    
    fieldset {
        margin: 2rem 0;
        border: 2px solid #4c6424;
        font-size: 2rem;
        padding: 2rem;
    }
`;

export const CampoDiv = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    label {
        flex: 0 0 150px;
        font-size: 1.5rem;
        font-family: 'Inconsolata', sans-serif;
        font-weight: bold;
    }
    input, 
    textarea {
        flex: 1;
        padding: 1rem;
        font-family: 'Inconsolata', sans-serif;
        font-weight: bold;
    }
    textarea {
        height: 300px;
    }
`; 

export const InputS = styled.input`
    background-color: #4c6424;
    width: 50%;
    padding: 0.5rem;
    text-align: center;
    color: #FFF;
    font-size: 1.8rem;
    text-transform: none;
    border: none;
    font-weight: 700;
    margin-left: 25%;
    margin-right: 25%;
    opacity: unset;
    font-family: 'Inconsolata', sans-serif;
    &:hover {
        cursor: pointer;
        background-color: #668731;
    }
    &:focus{
        background-color: #394B1B;
    }
`;

export const Error = styled.p`
    background-color: red;
    padding: 0.5rem;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: #FFF;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
`;

export const H1= styled.h1`
    text-align: center;
    margin-top: 1rem;
    font-family: 'Bebas Neue', cursive;
`;
 export const Logo = styled.p`
 text-align: center;
    color: #4c6424;
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Inconsolata', sans-serif;
    margin-right: 2rem;
`

