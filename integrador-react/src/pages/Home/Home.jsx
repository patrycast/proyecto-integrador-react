import { Categorias } from "../../components/Categorias/Categorias";
import { CardsProductos } from "../../components/Productos/CardsProductos";
import { CardsSuggest } from "../../components/Suggest/CardsSuggest";
import { HomeContainer, SuggestContainer } from "./HomeStyles";

export const Home = () => {
  return (
    <HomeContainer>
        <div>hero seccion</div>

        <SuggestContainer>
          <h2>Sugerencias</h2>
          <CardsSuggest/>
        </SuggestContainer>
        
        <div>
          <h2>Categorias</h2>
            <Categorias/>
        </div>

        <div>
          <h2>Productos</h2>
          <CardsProductos/>
        </div>
    </HomeContainer>
  )
}
