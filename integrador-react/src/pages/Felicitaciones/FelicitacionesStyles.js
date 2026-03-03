import styled from "styled-components";

export const FelicitacionesContainer = styled.section`
width: 100vw;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

img{
    width: 400px;
    border-radius: 10%;
    margin-bottom: 50px;
}

@media (max-width: 768px) {
    width:90%;
    margin: 0 auto;
    align-items: flex-start;

    h1{
        font-size: 1.5rem;
    }

    img{
        width: 90%;
    }
}

`;