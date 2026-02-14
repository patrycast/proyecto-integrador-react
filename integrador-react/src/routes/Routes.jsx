import { Routes as ReactDomRoutes, Route} from "react-router-dom";
import { Home } from "../pages/Home/Home.jsx";
import { Login } from "../pages/Login/Login.jsx";
import { Register } from "../pages/Register/Register.jsx";
import { MisPedidos } from "../pages/MisPedidos/MisPedidos.jsx";
import { Felicitaciones } from "../pages/Felicitaciones/Felicitaciones.jsx";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound.jsx";
import { Nosotros } from "../pages/Nosotros/Nosotros.jsx";
import { OrderSummary } from "../pages/OrderSummary/OrderSummary.jsx";
import { Contacto } from "../pages/Contacto/Contacto.jsx";



export const Routes = () => {
  return (
    <ReactDomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        {/* cambiar luego por productos */}
        <Route path="/productos" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/OrderSummary" element={<OrderSummary />}/>
        <Route path="/MisPedidos" element={<MisPedidos />}/>
        <Route path="/felicitaciones" element={<Felicitaciones />}/>

        <Route path="*" element={<PageNotFound />}/>
    </ReactDomRoutes>
  )
}
