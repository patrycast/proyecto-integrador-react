import { CardProducto } from "./CardProducto"
import { ProductsContainer } from "./CardsProductosStyles"
import { useSelector } from "react-redux"
import { useState } from "react"

const MAX_PRODUCTS= 8;


export const CardsProductos = () => {
    const [maxProducts, setMaxProducts] = useState(MAX_PRODUCTS)
    
    const products= useSelector(state => state.products.products) 

    const {pickedCategory} = useSelector(state => state.categories)
   
    const filtereProducts= pickedCategory ? products.filter(
        product => product.category === pickedCategory
    ) : products
   


    const renderedProducts= filtereProducts.slice(0, maxProducts)

  return (
    <div>
      
        <ProductsContainer>
            {renderedProducts.map((product) => (
                <CardProducto key={product.id} {...product} />

            ))}
        </ProductsContainer>

        {!pickedCategory && (

        <div>
            <button onClick={() => 
              setMaxProducts(prev => prev - MAX_PRODUCTS)}
              disabled= {maxProducts === MAX_PRODUCTS}>
                Ver Menos
            </button>

            <button onClick={() => 
              setMaxProducts(prev => prev + MAX_PRODUCTS) } 
              disabled={maxProducts >= filtereProducts.length}>
                Ver Más
            </button>
        </div>
        )} 

    </div>
  )
} 
