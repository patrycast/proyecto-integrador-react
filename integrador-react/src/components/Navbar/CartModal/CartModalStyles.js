import styled, { keyframes} from "styled-components"; 

export const CartWrapper = styled.div` 
/* max-width: 400px; 
margin: 0 auto; 
padding: 20px; 
background: #fff; 
border-radius: 12px; 
box-shadow: 0 4px 10px rgba(0,0,0,0.1); 
display: flex; 
flex-direction: column; 
height: 100%;  */
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

const slideInRight = keyframes` 
from { 
    transform: translateX(100%); 
    opacity: 0; 
    } to { 
        transform: translateX(0); 
        opacity: 1; 
    } `; 

export const ModalContainer = styled.div` 
    display: flex; 
    flex-direction: column;
    position: fixed; 
    top:0; 
    right: 0px; 
    width: 320px; 
    height: 100vh;
    background: var(--borgoña-claro); 
    border: 1px solid #454444; 
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    z-index: 2000;
    animation: ${slideInRight} 0.5s ease forwards;   
    `;

export const ModalCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
     background: #6d1f1f; 
     margin-top: 1rem; 
    

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;}
`;


    export const TitleCart= styled.h3`
        text-align: center; 
    `;

    export const ButtonsCart = styled.div`
        display: flex;
        width: 100%;
        justify-content: space-between;
        `;


export const ButtonCart = styled.button`
        width:35px;
        height:35px;
        color: var(--borgoña-oscuro);
        background: linear-gradient(90deg,rgba(59, 48, 34, 1) 0%, rgba(209, 54, 54, 1) 57%, rgba(59, 35, 41, 1) 100%);
    color: #fff; ;
        font-weight: 800;
        border-radius: 5px; 
        font-size: 20px;
        transition: 0.3s ease-in-out;


        &:hover {
            background: rgba(226, 107, 3, 0.86);
            
        }
        `

    export const ProductItem = styled.div` 
        display: flex; 
        justify-content: center; 
        align-items: center;
        margin: 0 auto;
        gap: 20px;
        border-bottom: 1px solid #4c4646;
        padding: 1rem;  
         
    `; 
    export const ProductName = styled.h3` 
        font-size: 18px; 
        margin: 0; 
    `; 
    export const ProductDesc = styled.p` 
        font-size: 14px; 
        color: #bdb8b8; 
        margin-top: 15px;
        margin: 0; 
    `; 
    export const ProductPrice = styled.p` 
        font-size: 15px; 
        font-weight: bold; 
        margin-top: 5px; 
    `; 
    export const QuantityControls = styled.div` 
        display: flex; 
        align-items: center; 
        gap: 10px; 
        button { 
            background: #420808b3; 
            color: white;
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
    justify-content: flex-end;
    /* margin-top: 120px; */
    padding: 1.5rem;
    gap: 8px; 
    margin-top: auto; 
    margin-bottom: 2rem;;
 `; 
    
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
    margin-top: 50px;
    border: none; 
    padding: 12px; 
    border-radius: 8px; 
    font-size: 16px; 
    font-weight: bold; 
    cursor: pointer; 
    text-transform: uppercase; 
    transition: 0.6s; 

    &:hover { 
        /* opacity: 0.7;  */
        background: rgba(226, 107, 3, 0.86);
        color: black;
        transition: 0.6s ease-in-out;
       
    } 
`;


// ::::::::::::::::::::::::::::::::::::::::::::::
