import { useState } from "react";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import logo from "../../assets/logo.jpg";

import {NavbarContainer, LogoStyled, CartNavStyled} from "./NavbarStyles";
import { CartModal } from "./CartModal/CartModal";
import { IconCart } from "./IconCart/IconCart";




export const Navbar = () => {
    const [hiddenCart, setHiddenCart] = useState(true);


  return (
    <NavbarContainer>
        <CartModal hiddenCart={hiddenCart} setHiddenCart={setHiddenCart} />

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


                <div onClick={() => setHiddenCart(!hiddenCart)}> <IconCart /> </div>
                
                <CartNavStyled to="/login"><IoPerson size={24}/></CartNavStyled>

            </ul>
        </nav>
    </NavbarContainer>
  )
}
