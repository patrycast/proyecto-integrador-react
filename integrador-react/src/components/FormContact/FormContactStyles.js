import styled from "styled-components";
import { Form } from "formik";



export const FormContainer= styled(Form)`
    max-width: 1200px;         
    width: 100%;                        
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding-top: 40px ; 
    padding-left: 20px;
    border-radius: 8px;
    position: relative;
      `;

    
export const FormInput= styled.input`
    width:100%;           
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 7px;
    flex-wrap: wrap;
    border-color: ${({ isError }) => (isError ? "red" : " #ccc")};  
    background-color: rgb(58, 44, 44);
    color: #fff;
    font-size:18px;

    &::placeholder {
    color: #f8f3f3;    
    font-weight: 500;
    font-size: 18px;

    
    @media (max-width: 768px) {
        width: 50%;
    }
    @media (max-width: 480px) {
        width: 30%;
    }
  }
 
`;

export const ErrorText = styled.p` 
    color: red;
`;

export const SuccessMessage = styled.p` 
    color: #0faa07; 
    margin-top: 20px; 
    font-size: 16px; 
    font-weight: 500; 
    text-align: center; `;