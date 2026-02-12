
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, clearCart } from "../../../redux/slices/cartSlice";
import { CartModalCard } from "./CartModalCard";
import { 
  ModalContainer, 
  Overlay,
  TitleCart, 
  ButtonCart,
  Summary,
  SummaryRow, 
  TotalRow, 
  OrderButton, 
  CartWrapper,
  ButtonsCart,
 } from "./CartModalStyles";
 import { IoTrash } from "react-icons/io5";



export const CartModal = () => {

  const { cart, shipping, hidden : cartHidden} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(toggleCart())
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

    if(cartHidden) return null;

 const cartTotal= cart.reduce((acc, item) => acc + item.price * item.qty, 0);

 const cartTotalWithShipping = cartTotal + shipping;
  return (
    <CartWrapper>
    <Overlay onClick={handleToggleCart}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
            <TitleCart>Tu Carrito</TitleCart>
            <ButtonsCart>
              <ButtonCart onClick={handleToggleCart}>X</ButtonCart>
              <ButtonCart onClick={handleClearCart}><IoTrash /></ButtonCart>
            </ButtonsCart>

         
          {cart.length ? (
            cart.map((item) => (
              <CartModalCard key={item.id} {...item}/>
            ))
          ) : <p style={{ textAlign: "center" }}>Tu carrito está vacío</p>}


        <Summary>
          <SummaryRow>
            <span>Subtotal:</span>
            <span>$ {cartTotal}</span>
          </SummaryRow>
          <SummaryRow>
            <span>Envío:</span>
            <span>$ {shipping}</span>
          </SummaryRow>
          <TotalRow>
            <span>Total:</span>
            <span>$ {cartTotalWithShipping}</span>
          </TotalRow>
        <OrderButton>INICIAR PEDIDO</OrderButton>
        </Summary>

        </ModalContainer>



    </Overlay>
    </CartWrapper>
  )
}
