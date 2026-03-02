import styled from "styled-components";

export const CardsSuggestContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 2rem;
    background: #5817174f; 
    padding: 2rem 4rem;
    max-width: 1200px; 
    margin: 0 auto;
    
    img {
      width: 100%;            
      aspect-ratio: 4 / 3;
      object-fit: cover;    
      border-radius: 8px; 
    }
    
    
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      padding: 2rem;
    
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.44);  

  &:hover { 
    transition: all 0.3s ease;
    img { 
      transform: scale(0.95);
  }}


`

export const SuggestInfo = styled.div`
  margin-bottom: 15px;

`;
