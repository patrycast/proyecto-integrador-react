
import styled from "styled-components"; 


export const NosotrosContainer = styled.section` 
    padding: 0rem 2rem; 
    line-height: 1.8; 
    color: #c7c2c2; 
    font-family: 'Lora', serif; 
`; 

export const Titulo = styled.h1` 
    font-size: 2.5rem; 
    margin-bottom: 1.5rem; 
    color: #a0522d;
    text-align: center; 
`;

export const NosotrosWrapper= styled.div`
    display: flex;
`;

export const ImgNosotros =styled.img`
    width: 40%;
    border-radius: 8px;
    object-fit: cover;


     @media (max-width: 768px) {
    display: none;  
  }
`;

export const ParrafoWrapper= styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-right: 1rem;

    @media (max-width: 768px) {
        width: 100%;
        margin-right: 0;
  }
`;

export const Parrafo = styled.p` 
    margin-bottom: 1.2rem; 
    font-size: 1.1rem;
`; 