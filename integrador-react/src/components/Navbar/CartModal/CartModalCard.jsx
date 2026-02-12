import { useDispatch } from "react-redux";
import { addItemToCart, deleteItemFromCart } from "../../../redux/slices/cartSlice";
import { ModalCardContainer, ProductItem, ProductDesc, ProductPrice, QuantityControls, ProductName } from "./CartModalStyles"; 
import { IoTrash } from "react-icons/io5";

export const CartModalCard = ({ id, title, img, desc, price, qty }) => {
const dispatch = useDispatch();

  const handleIncement = () => {
    dispatch(addItemToCart({ id, title, img, desc, price }));
  };

 const handleDecrement = () => {
    dispatch(deleteItemFromCart(id));
  }


  return (
    <ModalCardContainer>
      
      <ProductItem>
        <div>
          <ProductName>{title}</ProductName>
          <ProductDesc>{desc}</ProductDesc>
          <ProductPrice>$ {price}</ProductPrice>
        </div>

          <QuantityControls>
            {qty === 1 ? ( <button onClick={handleDecrement}> <IoTrash /> </button> ) : ( <button onClick={handleDecrement}>-</button> )}
            <span>{qty}</span>
            <button onClick={handleIncement}>+</button>
          </QuantityControls>

      </ProductItem>
    </ModalCardContainer>

    
  );
};