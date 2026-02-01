import { NosotrosContainer, Titulo, Parrafo, ImgNosotros, NosotrosWrapper, ParrafoWrapper } from "./NosotrosStyles";
import nosotros from "../../assets/nosotros.jpg";


export function Nosotros() { 
    return ( 
    <NosotrosContainer> 
        <Titulo>Nosotros</Titulo> 
            
        <NosotrosWrapper>

            <ParrafoWrapper>
                <Parrafo> En <strong>La Ruta del Vino</strong> nos dedicamos a acercar a tu mesa los mejores vinos seleccionados 
                con cuidado y pasión. Cada botella que ofrecemos es más que una bebida: es una experiencia que refleja la 
                tradición de nuestras bodegas y el arte de quienes trabajan la tierra. 
            </Parrafo> 
            <Parrafo> Nuestro compromiso es brindarte una selección única, pensada para acompañar celebraciones, encuentros 
                y momentos de disfrute. Desde vinos jóvenes y frescos hasta etiquetas de guarda, cada elección está guiada 
                por la calidad y el deseo de compartir lo mejor. 
            </Parrafo> 
            <Parrafo>Recorreras un camino de aromas, sabores y emociones. Queremos que cada 
                cliente encuentre en nuestra tienda no solo un producto, sino un viaje sensorial que comienza en la copa 
                y se prolonga en la memoria. 
            </Parrafo> 
            <Parrafo> <em>La Ruta del Vino es tu destino para descubrir, elegir y disfrutar vinos que inspiran confianza y 
                elegancia. Te invitamos a ser parte de este recorrido.</em> 
            </Parrafo> 
            </ParrafoWrapper>
            <ImgNosotros src={nosotros} alt="Imagen de Nosotros" />
        </NosotrosWrapper>
    </NosotrosContainer> 
    ); 
}