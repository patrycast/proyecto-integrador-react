
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import logo from "../../assets/logo.jpg";
import {NavbarContainer, LogoStyled, CartNavStyled} from "./NavbarStyles";
import { CartModal } from "./CartModal/CartModal";
import { IconCart } from "./IconCart/IconCart";


export const Navbar = () => {

  return (
    <NavbarContainer>
        <CartModal />

            <Link to="/">
                <LogoStyled src={logo} alt="Logo"/>
            </Link>

        <div>
            <h1>La Ruta del Vino</h1>
        </div>

        <nav>
            <ul>
                
                <CartNavStyled to="/nosotros">Nosotros</CartNavStyled>
                <CartNavStyled to="/productos">Productos</CartNavStyled>


                <CartNavStyled> 
                    <IconCart /> 
                </CartNavStyled>
                
                <CartNavStyled to="/login"><IoPerson size={24}/></CartNavStyled>
                <CartNavStyled to="/contacto">Contacto</CartNavStyled>

            </ul>
        </nav>
    </NavbarContainer>
  )
}
