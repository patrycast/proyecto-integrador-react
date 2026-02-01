import { Formik } from "formik";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div>
        <h1>Registrate</h1>
         <Formik>
            <form>
                <input type="text" placeholder="Nombre"/>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Contraseña" />
                <Link to="/login">
                    <p>¿Tienes una cuenta? Inicia Sesión</p>
                </Link>
                <button type="button" onClick={(e) => {e.preventDefault()}}>Registrate</button>
            </form>
        </Formik>
    </div>
  )
}
