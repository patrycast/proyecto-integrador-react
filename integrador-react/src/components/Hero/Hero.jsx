import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { pickCategory } from "../../redux/slices/categoriesSlice";
import { toast} from "sonner";
import { FaSearch } from "react-icons/fa";

export const Hero = ({scrollToProducts}) => {

    const {categories} = useSelector(state => state.categories)
    const categoriesList=categories.map((category) => category.category); 
    const [valueCategory, setValueCategory] = useState("");
    const dispatch = useDispatch();
   

    // if(hiddenSearch) return null;

    const handleSubmit= (e, value) => { 
        e.preventDefault();
        const valuedCategory= value.trim().toLowerCase().split(" ").join("");

        const foundCategory = categoriesList.find((category) => category.toLowerCase() === valuedCategory) 

        if(foundCategory){
            dispatch(pickCategory(foundCategory))
            scrollToProducts();
        }else{
            toast.error("Categoria no encontrada")
        }
        setValueCategory("");
    }

  return (
    <section>
        <form > 
            <div> 
                 {/* <div> */}
                    <FaSearch />
                {/* </div> */}
            <input  
                type="text" 
                placeholder="Buscar por categoria"
                onChange={(e) => setValueCategory(e.target.value)}
                value={valueCategory} />
               

            <button   
                type="submit"
                onClick={(e) => handleSubmit(e, valueCategory)}
                disabled={!valueCategory} 
                >Buscar
            </button>    

        </div>
        </form>
    </section>
  )
}

