
import { FormContactFormik } from "../../components/FormContact/FormContactFormik"
import copa from "../../assets/copa.jpg"
import { ImgForm, ContactImage, SectionContact, TitleContact, DivContact } from "./ContactoStyles"


export const Contacto = () => {
  return (
    <SectionContact>
      <TitleContact>Escribinos tu consulta, te contestaremos a la brevedad</TitleContact>

      <DivContact> 
        <FormContactFormik />
          <ImgForm>
            <ContactImage src={copa} width="150px"  alt="Copa" />
          </ImgForm> 
      </DivContact>
    </SectionContact>
  )
}
