import styled from "styled-components";

export const ProductsContainerStyled = styled.div`
  width: 400px; 
  height: 100vh;
  padding: 20px;
  border: 2px solid  #ffffff2a;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const ProductsTitleStyled = styled.h3`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 300px;
`;

export const PriceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: auto;
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

export const EnvioStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

export const TotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
`;

export const PriceTotalStyled = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;
