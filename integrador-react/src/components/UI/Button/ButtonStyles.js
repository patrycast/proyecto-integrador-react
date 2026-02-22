import styled from "styled-components";

export const ButtonStyled = styled.button`
 background: var(--btn-gradient);
    background: #3B3022;
    background: linear-gradient(90deg,rgba(59, 48, 34, 1) 0%, rgba(209, 54, 54, 1) 57%, rgba(59, 35, 41, 1) 100%);
    color: #fff; 
    border: none; 
    padding: 12px; 
    border-radius: 8px; 
    font-size: 16px; 
    font-weight: bold; 
    cursor: pointer; 
    text-transform: uppercase; 
    transition: 0.6s; 

    &:hover { 
        background: rgba(226, 107, 3, 0.86);
        color: black;
        transition: 0.6s ease-in-out;
       
    } 
`;