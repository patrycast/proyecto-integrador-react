import styled from "styled-components";
// import { Formik } from "formik";
import { Form } from "formik";



export const FormContainer= styled(Form)`
    max-width: 500px;         
    width: 100%;                        
    min-height: 100vh;   
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding-top: 40px ; 
    border-radius: 8px;
    position: relative;
      `;

export const ImgForm = styled.div`
    flex: 1;              
    max-width: 100%;     
    height: auto;         
    object-fit: cover; 
    position: absolute;
    top: 90px;
    right: 20px;     
   
`;   
export const ContactImage = styled.img` 
    width: 150px; 
    height: auto; 
    border-radius: 50%;
    object-fit: cover; 
`; 
    
export const FormInput= styled.input`
    width:90%;           
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