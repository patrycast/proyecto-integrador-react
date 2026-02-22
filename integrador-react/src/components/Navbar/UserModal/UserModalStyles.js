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
    justify-content: flex-end; 
    align-items: flex-start;
    z-index: 1000; 
    `; 
    
    export const ModalContainerStyled = styled.div` 
    
        background: blue; 
        padding: 1rem; 
        border-radius: 8px; 
        width: 250px; 
        box-shadow: 0 2px 10px rgba(0,0,0,0.2); 
        transform: ${({ isOpen }) =>
        isOpen ? "translateX(0)" : "translateX(100%)"};

        opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};

        transition: transform 2s ease, opacity 2s ease;

        
        `; 
        
    export const UsernameStyled = styled.h3` 
        margin-bottom: 0.5rem; 
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