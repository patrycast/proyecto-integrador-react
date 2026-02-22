import styled from "styled-components";

export const Section = styled.section`
width: 100vw;
height: 100vh;
margin: 0 auto;
/* margin: 0 4rem; */



    img{
        width: 90%;
        height: 90%;
        object-fit: contain;
        border-radius: 50%;
         position: absolute;
    }
`;

export const Title= styled.h1`
    color: #e3bf78;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: center;
    margin: 0;
    position: relative;
    top: 70px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    
`;