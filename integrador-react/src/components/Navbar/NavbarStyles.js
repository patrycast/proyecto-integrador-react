import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer= styled.nav`
    height: 90px;
    background-color: rgb(26, 10, 10);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 4rem;

    position: sticky; 
    top: 0; 
    padding: 0 2rem; 
    box-shadow: 0 2px 5px rgba(0,0,0,0.1); 
    z-index: 1000;

    

    nav ul {
    display: flex;   
    align-items: center;
    gap: 20px;            
    margin: 0;
    padding: 0;
    }

    nav li a {
    color: white;
    }


  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem; 

    nav ul {
      flex-direction: column;
      gap: 10px;
    }
  }


  @media (max-width: 480px) {

    width: 100%;  

    nav ul {
      gap: 5px;
    }

    h1 {
      font-size: 1.2rem;
      text-align: center;
    }
  }`;

export const CartNavStyled= styled(Link)`
       cursor: pointer;
        color: white;

        &:hover {
            color: #f58403; 
            transition: color 0.3s ease;}
`

export const LogoStyled= styled.img`
        height: 85px;
        border-radius: 50%;
`

export const TitleStyled= styled.h1`
`



