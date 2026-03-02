import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    height: 700px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center;

    @media(max-width: 768px){
            height: 400px;
        }

    @media(max-width: 480px){
            height: 300px;
        }    

    img{
        width:600px; 
        height: auto;
        object-fit: contain;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0.7;
        filter: saturate(0.5);
        margin-top: 10px;
    }

    @media(max-width: 768px){
        img{
            width: 400px;
        }
    }
    @media(max-width: 480px){
        img{
            width: 300px;
        }
    }
`;

export const Title= styled.h1`
    color: #e3bf78;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media(max-width: 480px){
        font-size: 1.5rem;
    }
    
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 20px;
`;