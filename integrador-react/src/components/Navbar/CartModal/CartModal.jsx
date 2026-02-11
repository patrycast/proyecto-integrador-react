import { ModalContainer, Overlay, TitleCart, Summary,SummaryRow, TotalRow, OrderButton, ProductItem
  , ProductName, ProductDesc, ProductPrice, QuantityControls, CartWrapper
 } from "./CartModalStyles";

export const CartModal = ({hiddenCart, setHiddenCart}) => {
    if(hiddenCart) return null;

  return (
    <CartWrapper>
    <Overlay onClick={() => setHiddenCart(true)}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
            <TitleCart>Tu Carrito</TitleCart>
            <button onClick={() => setHiddenCart(true)}>X</button>

          <ProductItem>
          <div>
            <ProductName>La Aco</ProductName>
            <ProductDesc>Cheta la gorra</ProductDesc>
            <ProductPrice>$ 3.000,00</ProductPrice>
          </div>
          <QuantityControls>
            <button>-</button>
            <span>3</span>
            <button>+</button>
          </QuantityControls>
        </ProductItem>


        <Summary>
          <SummaryRow>
            <span>Subtotal:</span>
            <span>$ 9.000,00</span>
          </SummaryRow>
          <SummaryRow>
            <span>Envío:</span>
            <span>$ 500,00</span>
          </SummaryRow>
          <TotalRow>
            <span>Total:</span>
            <span>$ 9.500,00</span>
          </TotalRow>
        </Summary>

        <OrderButton>INICIAR PEDIDO</OrderButton>
        </ModalContainer>



    </Overlay>
    </CartWrapper>
  )
}
