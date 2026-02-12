
import { IoCart } from "react-icons/io5";
import { CartIconWrapper, CartBadge } from "./IconCartStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../../redux/slices/cartSlice";


export const IconCart = () => {
  const totalCart= useSelector((state) => state.cart.cart).reduce(
    (acc, item) => (acc + item.qty), 0)
    
  const dispatch = useDispatch();

  const handleToggleCart= () =>{
    dispatch(toggleCart())

  }

  return (
    <CartIconWrapper onClick={handleToggleCart}>
      <IoCart size={27}/>
      <CartBadge>{totalCart}</CartBadge>
    </CartIconWrapper>
  );
};
