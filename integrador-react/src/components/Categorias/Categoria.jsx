import { useSelector, useDispatch } from "react-redux"
import { CardCategoria } from "./CategoriasStyles"
import { pickCategory } from  "../../redux/slices/categoriesSlice"


export const Categoria = ({ category}) => {

  const {pickedCategory}= useSelector((state) => state.categories)
  
  // const isPicked= category === pickedCategory
  
  const dispatch = useDispatch();

  return (
    <CardCategoria 
      // picked={isPicked}
      picked={category === pickedCategory}
      onClick={() => dispatch(pickCategory(category))}
      >
      {/* <img src={img} alt={title} /> */}
        <h3>{category}</h3>
    </CardCategoria>
    
  )
}
