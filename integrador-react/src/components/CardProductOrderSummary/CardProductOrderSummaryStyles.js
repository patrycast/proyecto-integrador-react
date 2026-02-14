import styled from "styled-components";

export const ModalCardContainer = styled.div`
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
     background: #6d1f1f; 
     margin-top: 1rem; 
     box-sizing: border-box;
     padding: 0 1rem; 
    

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;}
`;


    export const ProductItem = styled.div` 
        display: flex; 
        justify-content: center; 
        align-items: center;
        margin: 0 auto;
        gap: 20px;
        padding: 1rem;  
         
    `; 
    export const ProductName = styled.h3` 
        font-size: 18px; 
        margin: 0; 
    `; 
    export const ProductDesc = styled.p` 
        font-size: 12px; 
        color: rgb(210, 204, 204); 
        padding:1rem 0;
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

    export const ButtonsCart = styled.div`
            display: flex;
            width: 80%;
            justify-content: space-around;
            `;


    export const ButtonCart = styled.button`
        text-align: center;
            width:28px;
            height:28px;
            color: var(--borgoña-oscuro);
            background: linear-gradient(90deg,rgba(59, 48, 34, 1) 0%, rgba(209, 54, 54, 1) 57%, rgba(59, 35, 41, 1) 100%);
            color: #fff; ;
            font-weight: 800;
            border-radius: 5px; 
            font-size: 18px;
            transition: 0.3s ease-in-out;


            &:hover {
                background: rgba(226, 74, 3, 0.86);
                
            }
    `;