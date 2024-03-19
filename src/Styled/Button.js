import styled from "styled-components"
export const Button =styled.button`
background-color: black;
color: white;
padding: 10px 20px;
min-width: 220px;
border-radius: 5px;
font-size: 16px;
border:none;
transition: 0.4s backround ease-in;

&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s backround ease-in;
  }
    
  `;
  export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;

      &:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent;
    transition: 0.3s backround ease-in;
  }
    `;
    