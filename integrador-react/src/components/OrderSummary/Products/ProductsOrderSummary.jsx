import { CartModalCard } from "../../Navbar/CartModal/CartModalCard";
import { CardProductOrderSummary } from "../../CardProductOrderSummary/CardProductOrderSummary";


import { ProductsContainerStyled, ProductsTitleStyled, CardsWrapperStyled, 
  PriceContainerStyled, SubtotalStyled, EnvioStyled, TotalStyled } from "./ProductsOrderSummaryStyled";


export const ProductsOrderSummary = ({cart,shipping , orderTotal}) => {
  // const orderTotal = cart.reduce( (acc, item) => acc + item.price * item.qty, 0 );

  return (
    <ProductsContainerStyled>
      <ProductsTitleStyled>Tu pedido</ProductsTitleStyled>

      <CardsWrapperStyled>
      
        {cart.length ? (
          cart.map((item) => (
            <CardProductOrderSummary key={item.id} {...item} />
          ))
        ) : (<p>No hay productos en el carrito</p>) }


      </CardsWrapperStyled>

      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal</p>
          <span>${orderTotal}</span>
        </SubtotalStyled>
        <EnvioStyled>
          <p>Envío</p>
          <span>${shipping}</span>
        </EnvioStyled>
        <TotalStyled>
          <p>Total</p>
          <span>${orderTotal + shipping}</span>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductsContainerStyled>
  );
};


