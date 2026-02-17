import { useDispatch } from "react-redux"
import { addItemToCart, toggleCart } from "../../redux/slices/cartSlice"
import { ProductCard } from "./CardsProductosStyles"
import { toast } from "sonner"

export const CardProducto = ({img, title, desc, price, id}) => { 
    const dispatch= useDispatch();

    const handleAddToCart= () => {
        dispatch(addItemToCart({id, img, title, desc, price}))
        toast.success("Producto agregado al carrito")
        dispatch(toggleCart())
    }


  return (
    <ProductCard>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{desc}</p>

        <div>
            <p>{price}</p>
            <button onClick={handleAddToCart}>Agregar</button>
        </div>
    </ProductCard>
  )
}
