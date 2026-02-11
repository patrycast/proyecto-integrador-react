import * as Yup from "yup"; 

const letrasRegex= /^[a-zA-ZÀ-ÿ\s]+$/;

export const ValidationSchema = Yup.object({ 
    name: Yup.string()
    .min(2, "El nombre debe tener al menos 2 caracteres") 
    .max(50, "El nombre no puede superar los 50 caracteres") 
    .matches(letrasRegex, "El nombre solo puede contener letras") 
    .required("El nombre es obligatorio"), 
    
    lastName: Yup.string() 
    .min(2, "El apellido debe tener al menos 2 caracteres") 
    .max(50, "El apellido no puede superar los 50 caracteres") 
    .matches(letrasRegex, "El apellido solo puede contener letras") 
    .required("El apellido es obligatorio"),
    
    email: Yup.string() 
    .email("El email no es válido") 
    .required("El email es obligatorio"), 
    message: Yup.string() 
    .min(10, "El mensaje debe tener al menos 10 caracteres") 
    .max(500, "El mensaje no puede superar los 500 caracteres") 
    .required("El mensaje es obligatorio"), });


