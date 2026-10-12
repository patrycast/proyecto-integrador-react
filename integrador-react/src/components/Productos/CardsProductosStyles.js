import { styled } from "styled-components";

export const ProductsContainer = styled.section`
    display: grid;
    place-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    row-gap: 3.5rem;
    column-gap: 1.5rem;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 1rem 1.5rem;

    @media (max-width: 480px) {
        row-gap: 2rem;
        padding: 1rem;
    }
`;

export const ProductCard = styled.div`
    width: 100%;
    max-width: 320px;
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

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
`;


export const Buttons= styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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