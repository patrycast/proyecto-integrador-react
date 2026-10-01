
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import logo from "../../assets/logo.jpg";
import {NavbarContainer, LogoStyled, CartNavStyled, MenuButton} from "./NavbarStyles";
import { CartModal } from "./CartModal/CartModal";
import { IconCart } from "./IconCart/IconCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserModal } from "./UserModal/UserModal";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";



export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const { user } = useSelector((state) => state.user)
    const navigate = useNavigate();

    useEffect(() => {
        setUserMenuOpen(false);
    }, [user]);

  return (
    <NavbarContainer  open={openMenu}>
        <CartModal />
        <UserModal isOpen={userMenuOpen} onClose={() => setUserMenuOpen(false)} />

            <Link to="/">
                <LogoStyled src={logo} alt="Logo"/>
            </Link>

        <div>
            <h1>La Ruta del Vino</h1>
        </div>

        <nav>
            <MenuButton onClick={() => setOpenMenu(!openMenu)}>
             <FaBars size={24} color={"white"} marginBottom={"20px"} />
            </MenuButton>

            <ul>
                
                <CartNavStyled to="/nosotros">Nosotros</CartNavStyled>
                <CartNavStyled to="/productos">Productos</CartNavStyled>


                <CartNavStyled> 
                    <IconCart /> 
                </CartNavStyled>
                
                
{/* ---------------------------------------------------ver------------------------------------------- */}
                
                <div>
                    <div onClick={() => user ? (setUserMenuOpen(true)) : (navigate("/login"))}>
                        <span>
                            {user ? `Hola ${user.nombre}` : <IoPerson size={24}/>}
                        </span>

                    </div>
                </div>


              
                 <CartNavStyled to="/contacto">Contacto</CartNavStyled>
{/* ------------------------------------------------------------------------------------------------------------------ */}
            </ul>
        </nav>
    </NavbarContainer>
  )
}
