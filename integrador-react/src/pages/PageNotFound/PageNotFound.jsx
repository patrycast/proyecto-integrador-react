import { Section, Title, ButtonContainer } from "./PageNotFoundStyles";
import { Button} from "../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate= useNavigate();

  return ( <>
    <Section>
      <Title>Página no encontrada</Title>
      <img src="/assets/pageNotFound.png" alt="pagina no encontrada" />

    
    <ButtonContainer>
      <Button onClick={() => navigate("/")}>Volver</Button>

    </ButtonContainer>
    </Section>
    </>
  )
}
