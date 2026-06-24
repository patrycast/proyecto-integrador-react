import { styled } from "styled-components";

export const RegisterContainer = styled.div`
    max-width: 1400px;
    height: 530px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 

    @media (max-width: 768px) {
        max-width: 90%;
        height: auto;
        justify-content: flex-start;
    }
`;

export const FormRegister = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;


export const InputRegister = styled.input`
    border: 2px solid ${({ isError }) => (isError ? "red" : "#ccc")};
    padding: 0.5rem;
    border-radius: 6px;
    margin-right: 0.5rem;

      @media (max-width: 395px) {
    margin-right: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.5rem;
  }
`;

export const SpanRegister= styled.span`
    font-size: 18px;
    font-weight: 700;
    color: var(--btn-gradient); background: red;

    background: var(--btn-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0.4rem;
    cursor: pointer;
    border: 1px solid rgba(183, 74, 20, 0.41); 
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
`;