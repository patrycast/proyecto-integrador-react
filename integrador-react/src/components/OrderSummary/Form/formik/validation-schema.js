import * as yup from "yup";
export const validationSchema = yup.object({
    name: yup.string().required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede tener más de 50 caracteres"),
    cellphone: yup.string().required("El celular es obligatorio")
    .matches(/^\d{10}$/, "El celular debe tener 10 dígitos"),
    address: yup.string().required("La dirección es obligatoria")
    .min(2, "La dirección debe tener al menos 2 caracteres")
    .max(50, "La dirección no puede tener más de 50 caracteres"),
    location: yup.string().required("La localidad es obligatoria")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede tener más de 50 caracteres"),
})