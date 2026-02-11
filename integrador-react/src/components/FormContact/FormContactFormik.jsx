
import { Formik, Field, ErrorMessage} from "formik";
import { useState } from "react";
import { FormContainer } from "./FormContactStyles"
import { FormInput, ErrorText, SuccessMessage } from "./FormContactStyles"
import { initialValues } from "./formik/initial-values";
import { ValidationSchema } from "./formik/validation-schema";


export const FormContactFormik = () => {
    const [successMessage, setSuccessMessage] = useState("");

  return ( 
        <Formik
            initialValues={initialValues}
            validationSchema={ValidationSchema}
            onSubmit={(values) => {
                console.log("form", values)
                setSuccessMessage("¡Tu mensaje fue enviado correctamente!");
            }}

            >
            {() => (
                <FormContainer>
                    <Field as={FormInput} label="Nombre" name="name" type="text" placeholder="Nombre" />
                    <ErrorMessage name="name" component={ErrorText} />
                    

                    <Field as={FormInput} label="Apellido" name="lastName" type="text" placeholder="Apellido" />
                    <ErrorMessage name="lastName" component={ErrorText} />

                    <Field as={FormInput} label="Email" name="email" type="email" placeholder="Email" />
                    <ErrorMessage name="email" component={ErrorText} />

                    <Field as={FormInput} label="Mensaje" name="message" type="text" placeholder="Mensaje" />
                    <ErrorMessage name="message" component={ErrorText} />

                    {successMessage && (
                    <SuccessMessage>
                        {successMessage}
                    </SuccessMessage>
                    )}

                    <button type="submit">Enviar</button>

                     
                
                </FormContainer>
                
            )}

        </Formik>
  )
}


