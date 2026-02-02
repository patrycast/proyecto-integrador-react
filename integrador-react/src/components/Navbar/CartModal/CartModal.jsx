import { ModalContainer, Overlay, TitleCart } from "./CartModalStyles";

export const CartModal = ({hiddenCart, setHiddenCart}) => {
    if(hiddenCart) return null;

  return (
    <Overlay onClick={() => setHiddenCart(true)}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
            <TitleCart>Tu Carrito</TitleCart>
            <button onClick={() => setHiddenCart(true)}>X</button>
        </ModalContainer>

    </Overlay>
  )
}
