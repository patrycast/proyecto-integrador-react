import { Formik, Field, Form , ErrorMessage} from "formik";
import { Link, useNavigate } from "react-router-dom";
import { initialValues } from "./formik/initial-values";
import { validationSchema } from "./formik/validation-schema";
import { ErrorText } from "../../components/FormContact/FormContactStyles";
import { InputRegister } from "./RegisterStyled";
import { createUser } from "./services/services";
import { toast } from "sonner"


export const Register = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Registrate</h1>
         <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
            onSubmit={async (values) => {
                try {
                    await createUser(
                        values.nombre,
                        values.email,
                        values.password
                    )
                    toast.success("Usuario registrado exitosamente")
                    toast.info("Ahora podes iniciar sesión")
                    setTimeout(() => {
                        navigate("/login")
                    }, 2000)
                } catch (error) {
                    toast.error(error.response.data.errors[0].msg);
                }
            }}
        
         >
            {({ errors, touched }) => (
            <Form>
                < Field as={InputRegister} type="text" placeholder="Nombre" name="nombre" isError={errors.nombre && touched.nombre}/>
                <ErrorMessage name="nombre" component={ErrorText}/>

                <Field as={InputRegister} type="text" placeholder="Email" name="email" isError={errors.email && touched.email} />
                <ErrorMessage name="email" component={ErrorText}/>

                <Field as={InputRegister} type="password" placeholder="Contraseña" name="password" isError={errors.password && touched.password} />
                <ErrorMessage name="password" component={ErrorText}/>
                
                <button type="submit">Registrate</button>
                <Link to="/login">
                    <p>¿Si ya tenés una cuenta? Inicia Sesión</p>
                </Link>
            </Form>
            )}
        </Formik>
    </div>
  )
}
