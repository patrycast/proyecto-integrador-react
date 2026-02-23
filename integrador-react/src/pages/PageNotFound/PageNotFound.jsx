import { Section, Title, ButtonContainer } from "./PageNotFoundStyles";
import { Button} from "../../components/UI/Button/Button";

export const PageNotFound = () => {
  return ( <>
    <Section>
      <Title>Página no encontrada</Title>
      <img src="/assets/pageNotFound.png" alt="pagina no encontrada" />

    </Section>
    <ButtonContainer>
      <Button>Volver</Button>

    </ButtonContainer>
    </>
  )
}
