import { Categorias } from "../../components/Categorias/Categorias";
import { CardsSuggest } from "../../components/Suggest/CardsSuggest";
import { HomeContainer, SuggestContainer } from "./HomeStyles";

export const Home = () => {
  return (
    <HomeContainer>
        <div>hero seccion</div>

        <SuggestContainer>
          <h3>Sugerencias</h3>
          <CardsSuggest/>
        </SuggestContainer>
        
        <div>
          <h3>
            <Categorias/>
          </h3>
        </div>
        <div>productos</div>
    </HomeContainer>
  )
}
