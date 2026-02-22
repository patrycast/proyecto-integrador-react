import styled from "styled-components";

export const HeroContainer = styled.section`
    height: auto;
    /* border: 2px solid red; */
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    margin: 0.5rem 4rem;
    gap: 1rem;
`;


export const Search= styled.div`
    /* border: 2px solid blue; */
    display: flex;
    gap: 0.3rem;
    margin-bottom: 1.5rem;
    
    input{
        width: 14rem;
        background: #cc9797;
        color: #eeebeb;
        border: none;
        padding-left: 0.8rem;
        border-radius: 5px;

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
        width: 100%;
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
      font-size: 14px;
      padding: 0.4rem; 
    }

    button {
      font-size: 14px;
      padding: 0.4rem;
    }
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
    }

    @media (max-width: 768px) {
    flex-direction: column;
    img {
      display: none;
    }
  }
`;

export const InfoWelcome= styled.div`
    /* color: #e8cde1; */
    /* border: 2px solid red; */
`;


export const TitleHero = styled.h2`
    font-size: 2rem;
`;

export const ParrafoHero = styled.p`
    font-size: 1.5rem;
`;