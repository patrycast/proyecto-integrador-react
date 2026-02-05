import { CardProducto } from "./CardProducto"
import { ProductsContainer } from "./CardsProductosStyles"
import { useSelector } from "react-redux"


export const CardsProductos = () => {
    const products= useSelector(state => state.products.products)

  return (
    <div>
        <ProductsContainer>
            {products.map((product) => (
                <CardProducto key={product.id} {...product} />

            ))}
        </ProductsContainer>

        <div>
            <button onClick={(e) => e.preventDefault()}>Ver Menos</button>
            <button onClick={(e) => e.preventDefault()}>Ver Más</button>
        </div>
    </div>
  )
}
