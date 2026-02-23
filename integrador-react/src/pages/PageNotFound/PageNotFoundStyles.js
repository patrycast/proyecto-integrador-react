import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    height: 450px;
    margin: 20px auto;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: center;

    img{
        width:600px; 
        height: auto;
        object-fit: contain;
        border-radius: 50%;
        position: absolute; display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0.7;
        filter: saturate(0.5);
    }
`;

export const Title= styled.h1`
    color: #e3bf78;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    position: relative;
    top: 50px;
    left: 10%;
    transform: translate(-50%, -50%);
    z-index: 10;
    
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;