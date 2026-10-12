
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

    const [prevUser, setPrevUser] = useState(user);
    if (user !== prevUser) {
        setPrevUser(user);
        setUserMenuOpen(false);
    }

    const closeMenu = () => setOpenMenu(false);

    useEffect(() => {
        if (!openMenu) return;
        const closeOnOutside = () => setOpenMenu(false);
        document.addEventListener("click", closeOnOutside);
        return () => document.removeEventListener("click", closeOnOutside);
    }, [openMenu]);

  return (
    <NavbarContainer  open={openMenu}>
        <CartModal />
        <UserModal isOpen={userMenuOpen} onClose={() => setUserMenuOpen(false)} />

            <Link to="/" onClick={closeMenu}>
                <LogoStyled src={logo} alt="Logo"/>
            </Link>

        <div>
            <h1>La Ruta del Vino</h1>
        </div>

        <nav>
            <MenuButton
              aria-label="Abrir menú"
              onClick={(e) => { e.stopPropagation(); setOpenMenu(!openMenu); }}
            >
             <FaBars size={24} color={"white"} />
            </MenuButton>

            <ul onClick={(e) => e.stopPropagation()}>
                
                <CartNavStyled to="/nosotros" onClick={closeMenu}>Nosotros</CartNavStyled>
                <CartNavStyled to="/productos" onClick={closeMenu}>Productos</CartNavStyled>


                <CartNavStyled onClick={closeMenu}> 
                    <IconCart /> 
                </CartNavStyled>
                
                
{/* ---------------------------------------------------ver------------------------------------------- */}
                
                <div>
                    <div onClick={() => { user ? setUserMenuOpen(true) : navigate("/login"); closeMenu(); }}>
                        <span>
                            {user ? `Hola ${user.nombre}` : <IoPerson size={24}/>}
                        </span>

                    </div>
                </div>


              
                 <CartNavStyled to="/contacto" onClick={closeMenu}>Contacto</CartNavStyled>
{/* ------------------------------------------------------------------------------------------------------------------ */}
            </ul>
        </nav>
    </NavbarContainer>
  )
}
