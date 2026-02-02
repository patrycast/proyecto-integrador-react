import styled from "styled-components"; 

export const Overlay = styled.div` 
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100vw; 
    height: 100vh; 
    background: rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(4px); 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    z-index: 1000; 
    `;


export const ModalContainer = styled.div` 
    position: fixed; 
    top: 90px; 
    right: 0px; 
    width: 300px; 
    height: 100vh;
    background: black; 
    border: 1px solid #ccc; 
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    z-index: 2000; `;

    export const TitleCart= styled.h3`
        text-align: center;
    `;