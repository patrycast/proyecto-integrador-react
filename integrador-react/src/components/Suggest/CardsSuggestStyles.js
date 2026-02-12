import styled from "styled-components";

export const CardsSuggestContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    padding: 1rem;
    gap: 3rem;
    background: brown; padding: 1rem 4rem;


  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;}
`;




export const CardSuggestTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem; 
`;

export const CardSuggestStyled= styled.div`
  min-width: 150px; 
  background: #722f37; 
  color: white; 
  padding: 1rem; 
  border-radius: 8px; 
  text-align: center; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  

  &:hover { 
    min-width: 240px;
    transform: scale(1.03);
    transform-origin: center;
// img { 
//   max-width: 100%; 
//   border-radius: 8px; 
  }
`
