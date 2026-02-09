import { useRef } from "react";
import { Categorias } from "../../components/Categorias/Categorias";
import { CardsProductos } from "../../components/Productos/CardsProductos";
import { CardsSuggest } from "../../components/Suggest/CardsSuggest";
import { HomeContainer, SuggestContainer, ProductsContainer } from "./HomeStyles";
import { Hero } from "../../components/Hero/Hero";

export const Home = () => {
  const productsRef= useRef(null);


  const handleScrollToProducts = () =>{
      window.scrollTo(
        productsRef.current.getBoundingClientRect().x,
        productsRef.current.getBoundingClientRect().y,
      )
  }

//   const handleScrollToProducts = () => {
//   productsRef.current?.scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//   });
// };


  return (
    <HomeContainer>
      
        <section> 
          <h2>hero seccion</h2>
          <Hero scrollToProducts={handleScrollToProducts} />
        </section>

      <SuggestContainer>    
          <h2>Sugerencias</h2>
          <CardsSuggest/>
        </SuggestContainer>
        
        <section>
          <h2>Categorias</h2>
            <Categorias/>
        </section>

        <ProductsContainer ref={productsRef}>
          <h2>Productos</h2>
          <CardsProductos/>
        </ProductsContainer>
    </HomeContainer>
  )
}
