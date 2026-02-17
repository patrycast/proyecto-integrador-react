import { styled } from "styled-components";



export const InputRegister = styled.input`
    border: 2px solid ${({ isError }) => (isError ? "red" : "#ccc")};
    padding: 0.5rem;
    border-radius: 6px;
`;