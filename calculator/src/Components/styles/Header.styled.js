import styled from "styled-components"

export const Content = styled.div`
justify-content: center;
align-items:center;
display: flex;
flex-direction: column;
margin:auto;




h1 {
    font-size:40px;
}

h2 {
    font-size:32px;
    float:right;
    margin: 1rem;
  }

  h3 {
    font-size: 8px;
    margin:1rem 1rem;  
  }
  
  li {
    font-size:12px;
    display:inline;
    list-style:none;
  }
`

export const Header = styled.header`
display:flex;
justify-content: space-between;
margin: 2rem auto 0rem; 
width:325px;
`

