import styled from "@emotion/styled";
 const Button = styled.button`

 font-weight: 700;
 text-transform: none;
 border: 1px solid #d1d1d1;
 padding: .8rem 2rem;
 margin-right: 1rem;
 border-radius: 5px;
background-color: #FFFF;
border: none;
font-weight: bold;
color: ${props=>props.bgColor};
 &:last-of-type{
     margin-right: 0;
 }

 &:hover{
     cursor: pointer;
 }
 `
  
 export default Button;