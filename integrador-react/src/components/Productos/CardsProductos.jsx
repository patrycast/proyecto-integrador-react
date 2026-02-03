import { CardProducto } from "./CardProducto"
import { products } from "../../mock/products"
import { ProductsContainer } from "./CardsProductosStyles"


export const CardsProductos = () => {
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
