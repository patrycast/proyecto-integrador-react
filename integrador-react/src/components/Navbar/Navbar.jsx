
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import logo from "../../assets/logo.jpg";
import {NavbarContainer, LogoStyled, CartNavStyled} from "./NavbarStyles";
import { CartModal } from "./CartModal/CartModal";
import { IconCart } from "./IconCart/IconCart";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleMenu } from "../../redux/slices/userSlice";
import { UserModal } from "./UserModal/UserModal";



export const Navbar = () => {
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <NavbarContainer>
        <CartModal />
        <UserModal/>

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
                
                
{/* ---------------------------------------------------ver------------------------------------------- */}
                
                <div>
                    <div onClick={() => user ? (dispatch(toggleMenu())) : (navigate("/login"))}>
                        <span>
                            {user ? `Hola ${user.nombre}` : <IoPerson size={24}/>}
                        </span>

                    </div>
                </div>


              
                 {/* {user ? `Hola ${user.nombre}` : 
                <div><IoPerson size={24}
                 onClick={() => user ? (dispatch(toggleMenu())) : (navigate("/login"))}/>
                </div>}   */}
                {/* <CartNavStyled to="/login"><IoPerson size={24}/></CartNavStyled> */}
                <CartNavStyled to="/contacto">Contacto</CartNavStyled>
{/* ------------------------------------------------------------------------------------------------------------------ */}
            </ul>
        </nav>
    </NavbarContainer>
  )
}
