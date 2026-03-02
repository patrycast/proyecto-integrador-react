import styled from "styled-components";

export const SectionContact = styled.section`
    margin: 0 auto;
    margin-top: 2rem; 
`;

export const TitleContact =styled.h2`
 text-align: center; 
`;
export const DivContact = styled.div`
width: 100%;
display: flex;
gap: 2rem;

`;


export const ImgForm = styled.div`
    filter: grayscale(50%); 

    
@media (max-width: 768px) {
    display: none;
}
   
`;   



export const ContactImage = styled.img` 
    width: 120px; 
    height: auto; 
    border-radius: 50%;
    object-fit: cover; 
`; 