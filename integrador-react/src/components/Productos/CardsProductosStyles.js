import { styled } from "styled-components";

export const ProductsContainer = styled.section`
    display: grid;
    place-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 400px);
    row-gap: 3.5rem;
    padding: 1rem 0; 
`;

export const ProductCard = styled.div`
    width: 300px;
    border-radius: 15px;
    padding: 1.5rem 1rem;
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


export const Buttons= styled.div`
    display: flex;
    gap: 0.9rem;
    margin-top: 1.5rem;

`;

export const ButtonProduct = styled.button`
        padding: 0.5rem 1rem;
        background-color: var(--btn-products);
        color: var(--color-text-p);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        font-weight: 500;

        &:hover {
            background-color: #b82e2e;
        }

        &:disabled {
        background: #555;
        cursor: not-allowed;
        opacity: 0.6;
  }
    `;