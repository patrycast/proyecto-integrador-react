
import { useSelector } from "react-redux"
import { Categoria } from "../Categorias/Categoria"
import { CategoriasContainer } from "./CategoriasStyles"


export const Categorias = () => {
  const { categories } = useSelector(state =>  state.categories)


  return (
    <CategoriasContainer>
        {categories.map((cat) => (
            <Categoria key={cat.id} {...cat} />
        ))}
    </CategoriasContainer>
  )
}
