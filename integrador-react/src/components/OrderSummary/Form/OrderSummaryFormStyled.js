
import styled from "styled-components";

export const FormContainer = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 12px;
  color: #fff;
  gap: 1.2rem;
  border: 2px solid #ffffff2a;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 14px;
  background: #4728284f;
  color: #fff;
  margin-bottom: 20px;
  margin-top: 5px;

  &::placeholder {
    color: #aaaeaa;
  }

  ${({ error }) =>
    error &&
    ` border-color: #ff0000; box-shadow: 0 0 4px rgba(209, 54, 54, 0.5); `}
`;

export const OrderButton = styled.button`
  margin-top: 20px;
  padding: 15px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background: var(--btn-gradient);
  color: #fff;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const ErrorMessageStyled = styled.div` 
  color: #d13636; 
  font-size: 16px; 
  margin-top: 4px; 
  font-weight: 500; 
`;

export const SuccessMessageStyled = styled.div`
  color: #4caf50;
  font-size: 14px;
  margin-top: 4px;
  font-weight: 500;
`;