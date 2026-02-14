import { useSelector } from "react-redux";
import { ProductsOrderSummary } from "../../components/OrderSummary/Products/ProductsOrderSummary";
import { OrderSummaryForm } from "../../components/OrderSummary/Form/OrderSummaryForm";
import { ContainerStyled } from "./OrderSummaryStyles";


export const OrderSummary = () => {
  const { cart, shipping} = useSelector((state) => state.cart)
  const orderTotal= cart.reduce((acc, item) => (acc += item.price * item.qty), 0);
  
  return (
    <div>
        <h3>Inicia tu pedido</h3>
      <ContainerStyled>
         <OrderSummaryForm  cart={cart} orderTotal={orderTotal} shipping={shipping} />
        <ProductsOrderSummary cart={cart} shipping={shipping} orderTotal={orderTotal} />
       
      </ContainerStyled>
    </div>
  );
};