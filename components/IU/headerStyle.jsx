import styled from '@emotion/styled';
 export const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px){
        display: flex;
        justify-content: space-between;
    }
`
export const Logo = styled.p`
    color: var(--verde);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Inconsolata', sans-serif;
    margin-right: 2rem;
`
export const HeaderStyle = styled.header`
    border-bottom: 2px solid var(--cafe2);
    padding: 1rem 0;
`
export const Div2 = styled.div`
    display: flex;
    align-items: center;
`
export const Div1= styled.div`
    display: flex;
    align-items: center;
`

 export const ulConten = styled.ul`
   font-weight: 300;
  text-transform: none;
  display: none;
  position: absolute;
  width: $submenu-width;
  background-color: $color-blue;
 `
export const P1 = styled.div`
    margin-right: 2rem;
`

export const ButtonC =styled.button`
 background-size: 3rem;
background-image: url('static/img/configuraciones2.png');
background-repeat: no-repeat;
background-color: white;
border: none;
text-indent:-9999px;
padding: .8rem 2rem;
&:hover{
    cursor: pointer;
    background-image: url('static/img/configuraciones3.png');
    
}
&:focus{
    background-image: url('static/img/configuraciones.png');
    } 

`