import { styled } from "styled-components";

export const ProductsContainer = styled.section`
    display: grid;
    place-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 400px);
    row-gap: 3.5rem;
    /* width: 100%; */
    padding: 1rem 0; 
`;

export const ProductCard = styled.div`
    width: 300px;
    border-radius: 15px;
    padding: 1rem;
    border: 2px solid #d64141; 
    box-shadow: 0 4px 8px rgba(218, 166, 166, 0.48);

    img {
        width: 100%; 
        margin-bottom: 1rem;
        border-radius: 20px;
    }

    h3 {
        font-weight: 600;
        margin: 0;
    }
    p {
        color: #737171;
        font-size: 1.2rem;
    }
`;
