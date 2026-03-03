import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const HeroContainer = styled.section`
    height: auto;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    margin: 0.5rem 4rem;
    gap: 1rem;

      @media (max-width: 768px) {
        margin: 0 auto;
        padding-top: 1rem;
        margin: 0.5rem 1rem;
      }
`;


export const Search= styled.div`
    display: flex;
    gap: 0.7rem;
    margin-bottom: 1.5rem;

    
    input{
        width: 24rem;
        background: #cc9797;
        color: #eeebeb;
        border: none;
        padding: 0.8rem;
        border-radius: 5px;
        outline: none;
        font-weight: 700;
        font-size: 18px;

         &::placeholder {
        color: #393434;     
        font-weight : 500 ;
        font-size: 18px;
  }
    }


    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;

        input {
        width: 98%;
        padding: 0.5rem;
        font-size: 16px;
        }

        button {
        width: 100%;
        margin-top: 0.5rem;
        }

       
    }

  @media (max-width: 480px) {
    input {
      width:100%;
      font-size: 14px;
    }

    button {
      width:100%;
      font-size: 14px;
    }
  }
    
`;

  export const IconSearch= styled(FaSearch)`
    color: #e3d6d6;
     @media (max-width: 768px) {
        display: none;
    }
  `;



export const DivWelcome= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;



    img{
        max-width: 450px;
        border-radius: 20px 10px 30px 10px;
        opacity: 0.8;
        transition: opacity 0.3s ease-in-out;
    }
    img:hover{
        opacity:1;
        transition: opacity 0.3s ease-in-out;
    }

    @media (max-width: 768px) {
    flex-direction: column;
    img {
      display: none;
    }
  }
`;

export const InfoWelcome= styled.div`

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
  animation: fadeUp 0.8s ease;


  @media (max-width: 768px) {
    text-align: center;
  }

`;

export const TitleHero = styled.h2`
    font-size: 2rem;
  
`;

export const ParrafoHero = styled.p`
    font-size: 1.5rem;
`;