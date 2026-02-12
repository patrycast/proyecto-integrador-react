import { useDispatch } from "react-redux"
import { addItemToCart, toggleCart } from "../../redux/slices/cartSlice"
import { CardSuggestStyled } from "./CardsSuggestStyles"
import { toast } from "sonner"

export const CardSuggest = ({title,  desc, price, id}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart({id, title, desc, price}))
    toast.success("Producto agregado al carrito")
    dispatch(toggleCart())
    
  }
  
  return (
    <CardSuggestStyled>
        {/* <img src={img} alt={title} /> */}

        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <span>$ {price}</span>
        </div>

        <button onClick={handleAddToCart}>Agregar</button>
    </CardSuggestStyled>

  )
}
