import { CardCategoria } from "./CategoriasStyles"


export const Categoria = ({ category}) => {
  return (
    <CardCategoria>
      {/* <img src={img} alt={title} /> */}
        <h3>{category}</h3>
    </CardCategoria>
    
  )
}
