
import { useDispatch } from "react-redux";
import { addItemToCart, deleteItemFromCart } from "../../redux/slices/cartSlice";
import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';
import { ModalCardContainer, ProductItem, ProductDesc, 
    ProductPrice, QuantityControls, ProductName, ButtonsCart,
    ButtonCart} from "./CardProductOrderSummaryStyles"; 



export const CardProductOrderSummary = ({ id, title, desc, price, qty }) => {
    const dispatch = useDispatch()

    const handleIncement = () => {
        dispatch(addItemToCart({ id, title, desc, price }));
      };
    
     const handleDecrement = () => {
        dispatch(deleteItemFromCart(id));
      }
 
  return (
    <ModalCardContainer>

      <ProductItem>
        <ProductName>{title}</ProductName>
        <ProductDesc>{desc}</ProductDesc>
        <ProductPrice>${price}</ProductPrice>
      </ProductItem>
      <ButtonsCart>
        <ButtonCart
      
          onClick={handleDecrement}
        >
            {qty ===1 ? <IoMdTrash /> : <FaMinus />}
        </ButtonCart>
        <QuantityControls>{qty}</QuantityControls>
        <ButtonCart onClick={handleIncement}>
          <BsPlusLg />
        </ButtonCart>
      </ButtonsCart>
    </ModalCardContainer>
  );
};


