import * as Yup from 'yup';
export const validationSchema = Yup.object(
    {
        email: Yup.string().email("Email no válido").required("El email es obligatorio"),
        password: Yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("La contraseña es obligatoria"),
    }
)