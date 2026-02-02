
import { categories } from "../../mock/categories"
import { Categoria } from "../Categorias/Categoria"
// import { CategoriasContainer } from "./CategoriasStyles"

export const Categorias = () => {
  return (
    // <CategoriasContainer>
    <div>
        {categories.map((cat) => (
            <Categoria key={cat.id} {...cat} />
        ))}
    {/* </CategoriasContainer> */}
    </div>
  )
}
