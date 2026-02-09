import styled from "styled-components";

export const CategoriasContainer = styled.div`
background: blue;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));`


export const CardCategoria = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  /* width: 180px; */
  width: 140px;
  height: 140px;
  /* padding: 2rem 0.5rem; */
  border: 2px solid red;
  border-radius: 50%;
  background-color: ${({picked}) => (picked ? "#FFD700" : "#746f6f")}; cursor: pointer;
  transition: transform 0.3s ease;

  &:active {
    transform: scale(0.95); 
  }

  

  h3{
    margin: 0;
  }
  `;