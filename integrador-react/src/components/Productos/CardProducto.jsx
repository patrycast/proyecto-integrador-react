import { ProductCard } from "./CardsProductosStyles"

export const CardProducto = ({img, title, desc, price}) => {
  return (
    <ProductCard>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{desc}</p>

        <div>
            <p>{price}</p>
            <button>Agregar</button>
        </div>
    </ProductCard>
  )
}
