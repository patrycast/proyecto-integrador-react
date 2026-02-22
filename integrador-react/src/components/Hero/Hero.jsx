import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { pickCategory } from "../../redux/slices/categoriesSlice";
import { toast} from "sonner";
import { FaSearch } from "react-icons/fa";
import { HeroContainer, Search, DivWelcome, InfoWelcome, TitleHero, ParrafoHero } from "./HeroStyles";
import { Button } from "../UI/Button/Button";

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
    <HeroContainer>
        <form > 
            <Search> 
                 {/* <div> */}
            <input  
                type="text" 
                placeholder="Buscar por categoria"
                onChange={(e) => setValueCategory(e.target.value)}
                value={valueCategory} />
                    <FaSearch style={{fontSize:"20px", marginTop:"5px"}} />
                {/* </div> */}
               

            <Button   
                type="submit"
                onClick={(e) => handleSubmit(e, valueCategory)}
                disabled={!valueCategory} 
                >Buscar
            </Button>    

        </Search>

        </form>
        <DivWelcome>
           <InfoWelcome>
             <TitleHero>Bienvenid@ a tu próximo brindis</TitleHero>
            <ParrafoHero>Explorá vinos que transforman momentos simples en recuerdos inolvidables.</ParrafoHero>
           </InfoWelcome>
            <img  src="/assets/heroContainer.png" alt="" />



        </DivWelcome>
    </HeroContainer>
  )
}

