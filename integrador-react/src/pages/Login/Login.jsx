import {Formik} from "formik"
import {  Link } from "react-router-dom"


export const Login = () => {
  return (
    <div>
        <h1>Inicia Sesión</h1>
        <Formik>
            <form>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Contraseña"/>
                <Link to="/forgotPassword"></Link>
                <Link to="/register"><p>No tenes una cuenta? Registrate</p></Link>
                <button type="button" onClick={(e) => {e.preventDefault()}}>Ingresar</button>
            </form>
        </Formik>
    </div>
  )
}
