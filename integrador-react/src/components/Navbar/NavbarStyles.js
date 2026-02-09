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

    /* nav li {
    cursor: pointer;
    color: white;
    } */
    nav li a {
    color: white;
    }
    `

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

// __________________________________________

// export const LinksContainerStyled = styled.div`
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 40px;

//   a {
//     padding: 1rem 1.5rem;
//   }

//   a:first-child {
//     background: var(--orange-bg);
//     border-radius: 1rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 5px;
//   }
// `;