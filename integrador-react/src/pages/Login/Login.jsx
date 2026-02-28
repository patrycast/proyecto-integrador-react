import {Formik, Form, Field, ErrorMessage } from "formik"
import {  Link } from "react-router-dom"
import { initialValues } from "./formik/initial-values"
import { validationSchema } from "./formik/validation-schema"
// import { login } from "./services/services"
import { toast } from "sonner"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/slices/userSlice"
import { useRedirect } from "../../hooks/useRedirect"
import { useLocation } from "react-router-dom"
import { LoginUser } from "./services/services"



export const Login = () => {

  const dispatch = useDispatch();
  const { state } = useLocation();
  useRedirect(state?.redirectedFromOrderSummary ? "/OrderSummary" : "/")
 
  return (
    <div>
        <h1>Inicia Sesión</h1>
        <Formik
        initialValues= {initialValues}
        validationSchema= {validationSchema} 
        onSubmit={async (values) => {
          try {
            const user = await LoginUser(values.email, values.password);
            if(user){
              dispatch(setUser({
                ...user.usuario,
                token: user.token,
              }))
              toast.success("Inicio de sesión exitoso")
            }

          }catch(error){
            // toast.error(error.response.data.msg)
            const msg = error.response?.data?.msg || 
            error.response?.data?.errors?.[0]?.msg || 
            error.message || "No se pudo iniciar sesión"; 
            toast.error(msg);

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
