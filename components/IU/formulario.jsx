import styled from '@emotion/styled';


export const DivCon = styled.div`
  //height: 340px;
  display: flex;
  justify-content: center;
  align-items: top;
  background-color: white;
  opacity:850%;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 

`;
export const DivConte = styled.div`
    margin: 3px;
    width: 600px;
 
`

export const Div = styled.div`
    border-style: hidden ;
    border-color:#806566 ;
    
    max-width: 600px;
    width: 95%;
    margin: 0.1rem auto 0 auto;
    background-color: white;
    opacity:850%;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;
export const Formulario = styled.form`
    max-width: 85%;
    width: 95%;
    margin: 5rem auto 0 auto;
    
    fieldset {
        margin: 2rem 0;
        border: 0px solid #4c6424;
        font-size: 2rem;
        padding: 2rem;
        border-radius: 10px;
    }
`;

export const CampoDiv = styled.div`

    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    label {
        flex: 0 0 100px;
        font-size: 1.8rem;
    }
    input, 
    textarea {
        flex: 1;
        padding: 0.5rem;
    }
    textarea {
        height: 93px
    }
`;

export const InputS = styled.input`
    background-color:#0C6CE9;
    width: 20%;
    padding: 1.5rem;
    text-align: center;
    color: #FFF;
    font-size: 1.8rem;
    text-transform: none;
    border: none;
    font-weight: 700;
    margin-left: 40%;
    margin-right: 40%;
    margin-top: 20px;
    
    &:hover {
        cursor: pointer;
        background-color: #2A81F4;
    }
    &:focus{
        background-color: #0A5AC2;
        color:#d6d1d1
        
    }
`;

export const Error = styled.p`
    background-color: red;
    padding: 1rem;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    color: #FFF;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
`;

export const H1 = styled.h1`
text-align: center;
           margin-top: 10px;
           font-family: 'Bebas Neue', cursive;
`;
