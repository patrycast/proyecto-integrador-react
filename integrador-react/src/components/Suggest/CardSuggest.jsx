import { useDispatch } from "react-redux"
import { addItemToCart, toggleCart } from "../../redux/slices/cartSlice"
import { CardSuggestStyled, SuggestInfo } from "./CardsSuggestStyles"
import { toast } from "sonner"
import { Button } from "../UI/Button/Button"

export const CardSuggest = ({title, img, desc, price, id}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart({id, title, img, desc, price}))
    toast.success("Producto agregado al carrito")
    dispatch(toggleCart())
    
  }
  
  return (
    <CardSuggestStyled>
        <img src={img} alt={title} />

        <SuggestInfo>
            <h3>{title}</h3>
            <p>{desc}</p>
            <span>$ {price}</span>
        </SuggestInfo>

        <Button onClick={handleAddToCart}>Agregar</Button>
    </CardSuggestStyled>

  )
}
