import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { CartNavStyled } from "./NavbarStyles";
import logo from "../../assets/logo.png";

import {NavbarContainer, LogoStyled} from "./NavbarStyles";




export const Navbar = () => {
  return (
    <NavbarContainer>
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
                <CartNavStyled to="/cart"> <IoCart size={24} /> </CartNavStyled>
                <CartNavStyled to="/login"><IoPerson size={24}/></CartNavStyled>
            </ul>
        </nav>
    </NavbarContainer>
  )
}
