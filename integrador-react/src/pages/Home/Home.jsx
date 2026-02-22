import { useRef } from "react";
import { Categorias } from "../../components/Categorias/Categorias";
import { CardsProductos } from "../../components/Productos/CardsProductos";
import { CardsSuggest } from "../../components/Suggest/CardsSuggest";
import { HomeContainer, SuggestContainer, ProductsContainer, HomeTitle } from "./HomeStyles";
import { Hero } from "../../components/Hero/Hero";

export const Home = () => {
  const productsRef= useRef(null);


  const handleScrollToProducts = () =>{
      window.scrollTo(
        productsRef.current.getBoundingClientRect().x,
        productsRef.current.getBoundingClientRect().y,
      )
  }


  return (
    <HomeContainer>
      
        <section> 
          {/* <HomeTitle>hero seccion</HomeTitle> */}
          <Hero scrollToProducts={handleScrollToProducts} />
        </section>

      <SuggestContainer>    
          <HomeTitle>Sugerencias</HomeTitle>
          <CardsSuggest/>
        </SuggestContainer>
        
        <section>
          <HomeTitle>Categorias</HomeTitle>
            <Categorias/>
        </section>

        <section>
          <ProductsContainer ref={productsRef}>
          <HomeTitle>Productos</HomeTitle>
          <CardsProductos/>
        </ProductsContainer>
        </section>
    </HomeContainer>
  )
}
