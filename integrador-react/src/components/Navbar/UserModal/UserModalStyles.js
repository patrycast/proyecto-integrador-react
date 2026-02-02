import styled from "styled-components"; 
import { Link } from "react-router-dom"; 

export const Overlay = styled.div` 
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100vw; 
    height: 100vh; 
    background: rgba(0,0,0,0.3); 
    backdrop-filter: blur(4px); 
    display: flex; 
    justify-content: 
    flex-end; align-items: 
    flex-start; z-index: 1000; 
    `; 
    
    export const ModalContainerStyled = styled.div` 
        background: white; 
        padding: 1rem; 
        margin: 80px 20px 0 0; 
        border-radius: 8px; 
        width: 250px; 
        box-shadow: 0 2px 10px rgba(0,0,0,0.2); 
        transform: translateX(0); 
        transition: transform 0.5s ease; 
        `; 
        
    export const UsernameStyled = styled.h3` 
        margin-bottom: 0.5rem; 
        `; 
        
    export const HrStyled = styled.hr` 
        margin: 0.5rem 0; 
        `; 
    export const LinkStyled = styled(Link)` 
        display: block; 
        margin-bottom: 0.5rem; 
        color: #333; 
        text-decoration: none; 
        &:hover { 
            text-decoration: underline; 
        } 
        `;