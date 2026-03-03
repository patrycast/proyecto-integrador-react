import { styled } from "styled-components";

export const OrderSummaryContainer= styled.section`
  margin: 0 2rem;
`;

export const ContainerStyled = styled.div`
    max-width: 1200px;
      height: 100%;
    display: flex;
    justify-content: space-between; 
    align-items:  flex-start;
    margin: 0 40px;


@media (max-width: 768px) {
   flex-direction: column;   
    align-items: center;      
    gap: 20px;        
}    

`;