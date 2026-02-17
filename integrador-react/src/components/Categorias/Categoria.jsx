import { useSelector, useDispatch } from "react-redux"
import { CardCategoria } from "./CategoriasStyles"
import { pickCategory } from  "../../redux/slices/categoriesSlice"


export const Categoria = ({ category, img, title}) => {

  const {pickedCategory}= useSelector((state) => state.categories)
  
  
  const dispatch = useDispatch();

  return (
    <CardCategoria 
      picked={category === pickedCategory}
      onClick={() => dispatch(pickCategory(category))}
      >
      <img src={img} alt={title} />
        <h3>{category}</h3>
    </CardCategoria>
    
  )
}
