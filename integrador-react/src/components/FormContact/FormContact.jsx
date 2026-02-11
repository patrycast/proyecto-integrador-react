import { useFormik } from "formik";
import { useState } from "react";
import { FormContainer } from "./FormContactStyles"
import { initialValues } from "./formik/initial-values";
import { ValidationSchema } from "./formik/validation-schema";


export const FormContact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { handleSubmit, getFieldProps, errors, touched} = useFormik({
        initialValues: initialValues,
        validationSchema: ValidationSchema,
        onSubmit: (values) => {
            console.log("form", values)
            setSuccessMessage("¡Tu mensaje fue enviado correctamente!"); 
        },
    })
  return (
    <FormContainer onSubmit={handleSubmit} >
        <div  style={{ display: "flex", flexDirection: "column", gap: "20px", width: "50%" }} > 
            <input label="nombre" type="text" placeholder="Nombre" name="name" {...getFieldProps("name")}/>
            {touched.name && errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
         
            <input label="apellido" type="text" placeholder="Apellido" name="lastName" {...getFieldProps("lastName")} />
            {touched.lastName && errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>} 

            <input label="email" type="email" placeholder="Email" name="email" {...getFieldProps("email")} />
            {touched.email && errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

            <textarea label="mensaje" placeholder="Mensaje" name="message"  {...getFieldProps("message")}/>
            {touched.message && errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>
        <button type="submit"  >Enviar</button>

        {successMessage && (
        <p style={{ color: "#0faa07", marginTop: "20px" }}>
          {successMessage}
        </p>
      )}

    </FormContainer>
  )
}
