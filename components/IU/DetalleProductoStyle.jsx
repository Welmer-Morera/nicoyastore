import styled from "@emotion/styled";

export const Imagen =styled.img`
    width: 200px;
`
export const ImagenDe =styled.img`
    width: 80%;
`
export const Producto = styled.li`
    padding: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border:1px solid #E1E1E0;
    background-color: white;
   
    border-radius: 20px;
    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  
`
export const DescripProducto = styled.div`
    flex: 0 1 600px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 2rem;
`
export const DescrpVerMAs = styled.div`
flex: 0 1 100px;
display: grid;
align-items: flex-end;
`
export const Titulo = styled.h1`
 font-size: 5rem;
 color: #2E86AB;
 margin: 0;
 margin-bottom: -16px;
`

export const Comentarios = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    div {
        display: flex;
        align-items: center;
        padding: .3rem 1rem;
        margin-right: 1rem;
    }
    p {
        font-size: 1.6rem;
        margin-right: 1rem;
        font-weight: 700;
        &:last-of-type {
            margin: 0;
        }
    }
`
export const Precio = styled.h3`
color:#806566;
font-size: 2rem ;
`
export const Comentario =styled.h3`
color:#1E1E24;
font-size: 2.5rem ;
`
export const TextoDescripcion = styled.p`
    font-size: 2.4rem;
    margin: 0;
    color: #888;
`;

export const VerMas = styled.a`
font-family: 'Inconsolata', sans-serif;
color:#F24236;
font-size: 2rem;
:hover {
        cursor: pointer;
        color:#D31B0D;
        font-size: 2.2rem;
    }
`
export const Publicado =styled.p`
color:#4c6424;
`

export const ContenedorPrincipal =styled.div`
    max-width: 900px;
    width: 95%;
    //padding: 3rem 0;
    margin: 0 auto;
    margin-top: 2.5rem;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const TituloD = styled.h1`
    text-align: center;
    margin-top: 0.1rem;
    font-size: 5rem;
 color: #2E86AB;
 margin: 0;
 margin-bottom: -16px;
`
export const ContenedorProducto= styled.div`
@media(min-width:668px){
    display: grid;
    grid-template-columns: 1.8fr 1.2fr;
    column-gap: 1rem;
    padding: 10px;
}
`
export const FormComentarios =styled.form`
display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 1rem;
    padding: 10px;
`
export const BtnAgreComentario = styled.button`
background-color: #007fdb;
color: #FFF;
margin-bottom: 2rem;
text-transform: none;
    border: none;
    &:hover {
        cursor: pointer;
        background-color: #2A81F4;
    }
    &:focus{
        background-color: #0A5AC2;
        color:#d6d1d1
        
    }
`
export const Li =styled.li`
margin: 1px;
padding: 5px;
background-color: #E1E1E0;
border:1px solid #E1E1E0;
margin-bottom: 5px;
border-radius: 5px;
&:hover{
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
h1{
    margin-top: -5px;
    margin-bottom: -5px;
    font-size: 1.8rem;
    font-family: 'Inconsolata', sans-serif;
    
}
p{
    margin-top: -5px;
    margin-bottom: -5px;
    font-size: 1.8rem;
    text-align: right;
 }
`
export const Encabezado = styled.div`
margin: 1px;
padding: 8px;
background-color: #D3E3B5;
margin-bottom: 20px;
border-radius: 5px;

&:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
a{ 
   color: black;
   font-size: 1.8rem;
    &:hover{
        color:#007fdb;
    }
}
 p{
    margin-top: -5px;
    margin-bottom: -5px;
    font-size: 1.8rem;
 }
`
export const ScrollComentarios =styled.div`
    height: 400px;
`
export const Boton =styled.button`
    border: none;
    &:hover{
     cursor: pointer;
 }
 &:active {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
`