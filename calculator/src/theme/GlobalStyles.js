import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

*:focus {
    outline: 2px dashed hsl(220,98%, 61%, 0.2);
    outline-offset: 0;
  }

  body {
    font-family: 'Spartan', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    background-color: ${({theme}) => theme.colors.mainBg};
    color: white;
  } 


  
.toggle-wrapper{
    display:flex;
    justify-content:space-evenly;
  }
`