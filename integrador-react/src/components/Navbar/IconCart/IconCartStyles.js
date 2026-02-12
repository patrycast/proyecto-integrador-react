import styled from "styled-components";

export const CartIconWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -6px;     
  right: -8px;   
  background-color: red;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 50%;  
  width: 19px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
