import styled from "styled-components"; 

export const CartWrapper = styled.div` 
max-width: 400px; 
margin: 0 auto; 
padding: 20px; 
background: #fff; 
border-radius: 12px; 
box-shadow: 0 4px 10px rgba(0,0,0,0.1); 
display: flex; 
flex-direction: column; 
height: 100%; 
 `;

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
    background: var(--borgoña-claro); 
    border: 1px solid #454444; 
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    z-index: 2000;
    `;

    export const TitleCart= styled.h3`
        text-align: center;
    `;

    export const ProductItem = styled.div` 
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
    `; 
    export const ProductName = styled.h3` 
        font-size: 16px; 
        margin: 0; 
    `; 
    export const ProductDesc = styled.p` 
        font-size: 14px; 
        color: #666; 
        margin: 0; 
    `; 
    export const ProductPrice = styled.p` 
        font-size: 14px; 
        font-weight: bold; 
        margin: 5px 0 0 0; 
    `; 
    export const QuantityControls = styled.div` 
        display: flex; 
        align-items: center; 
        gap: 10px; 
        button { 
            background: #eee; 
            border: none; 
            padding: 5px 10px; 
            cursor: pointer; 
            font-size: 16px; 
            border-radius: 4px; 
        } 
        span { 
            font-size: 16px; 
            font-weight: bold; 
        } 
    `;


export const Summary = styled.div` 
    display: flex; 
    flex-direction: column; 
    margin-top: 20px;
    gap: 8px; `; 
    
export const SummaryRow = styled.div` 
    display: flex; 
    justify-content: space-between; 
    font-size: 14px; 
    `;

export const TotalRow = styled(SummaryRow)` 
    font-weight: bold; 
    font-size: 16px; 
`; 

export const OrderButton = styled.button` 
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
    transition: 0.3s; 
    &:hover { 
        opacity: 0.9; 
       
    } 
`;