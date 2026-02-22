import styled from "styled-components";

export const CategoriasContainer = styled.div`
background: #5b04043f;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
padding: 0 4rem; 
;`


export const CardCategoria = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  width: 140px;
  height: 140px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  
  img {
    margin-top: 30px;
    width: 140px;
    height:140px;
    border-radius: 50%;
    filter: sepia(0%);
    transition: filter 0.3s ease;

    &:hover{
      filter: brightness(100%);
      transition: filter 3s ease;
    }
  }
  
  &:active {
    transform: scale(0.95); 
    filter: sepia(100%);

  }

  

  h3{
    margin: 0;
  }
  `;