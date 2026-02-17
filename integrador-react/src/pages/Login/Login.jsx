import {Formik, Form, Field, ErrorMessage } from "formik"
import {  Link } from "react-router-dom"
import { initialValues } from "./formik/initial-values"
import { validationSchema } from "./formik/validation-schema"
import { login } from "./services/services"
import { toast } from "sonner"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/slices/userSlice"



export const Login = () => {
  const dispatch = useDispatch();
 
  return (
    <div>
        <h1>Inicia Sesión</h1>
        <Formik
        initialValues= {initialValues}
        validationSchema= {validationSchema} 
        onSubmit={async (values) => {
          try {
            const user = await login(values.email, values.password);
            console.log(user)
            if(user){
              dispatch(setUser({
                ...user.usuario,
                token: user.token,
              }))
              toast.success("Inicio de sesión exitoso")
            }

          }catch(error){
            toast.error(error.response.data.msg)

          }
        }}
        >
            <Form>
                <Field type="text" placeholder="Email" name="email"/>
                <ErrorMessage name="email" component="div"/>
                <Field type="password" placeholder="Contraseña" name="password"/>
                <ErrorMessage name="password" component="div"/>
                <Link to="/forgotPassword"></Link>
                <Link to="/register"><p>No tenes una cuenta? Registrate</p></Link>
                <button type="submit">Ingresar</button>
            </Form>
        </Formik>
    </div>
  )
}
