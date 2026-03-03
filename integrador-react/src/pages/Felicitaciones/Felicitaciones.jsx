import { FelicitacionesContainer } from "./FelicitacionesStyles"
import { useNavigate } from "react-router-dom"
import { Button} from "../../components/UI/Button/Button"

export const Felicitaciones = () => {
  const navigate = useNavigate();

  return (
    <FelicitacionesContainer>
      <h1>¡Felicitaciones por tu compra!</h1>
      <p>Tu pedido ha sido procesado con éxito. Gracias por elegirnos.</p>
      <img src="/assets/felicitaciones.png" alt="felicitaciones" />

      <Button onClick={() => navigate("/")}>Volver al inicio</Button>
    </FelicitacionesContainer>
  )
}
