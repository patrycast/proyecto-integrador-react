import * as Yup from 'yup'

export const validationSchema = Yup.object({
    nombre: Yup.string().required("El nombre es obligatorio")
        .min(2, "El nombre debe tener al menos 2 caracteres").max(50, "El nombre no puede tener más de 50 caracteres")
        .matches(/^[a-zA-Z\s]+$/, "El nombre solo puede contener letras y espacios"),

    email: Yup.string().email("El email no es válido").required("El email es obligatorio"),

    password: Yup.string().min(6, "La contraseña debe tener al menos 6 caracteres")
        .max(20, "La contraseña no puede tener más de 20 caracteres")
        .required("La contraseña es obligatoria")
})