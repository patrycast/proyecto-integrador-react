
import { FormContactFormik } from "../../components/FormContact/FormContactFormik"
import { ImgForm, ContactImage } from "../../components/FormContact/FormContactStyles"


export const Contacto = () => {
  return (
    <section>
      <h3>Escribinos tu consulta, te contestaremos a la brevedad</h3>

      <div>
        {/* <FormContactFormik /> */}
        
        <FormContactFormik />
          <ImgForm>
            <ContactImage src="/src/assets/copa.jpg" width="150px"  alt="Copa" />
          </ImgForm> 
      </div>
    </section>
  )
}
