import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleMenu, clearUser } from "../../../redux/slices/userSlice";
import { useEffect } from "react";
import { Overlay, ModalContainerStyled, UsernameStyled, LinkStyled } from "./UserModalStyles";
import { useNavigate } from "react-router-dom";

export const UserModal = () => {
  const navigate = useNavigate();
  const {hiddenMenu, user} = useSelector((state) => state.user)

  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(toggleMenu())
    }, [dispatch])



  const handleLogout = () => {
      dispatch(clearUser());
      dispatch(toggleMenu());
      navigate("/login");
    }
    

    return (
    <>

      {!hiddenMenu && (
        <Overlay onClick={() => dispatch(toggleMenu())}>
          <ModalContainerStyled isOpen={!hiddenMenu} onClick={(e) => e.stopPropagation()}>

            <UsernameStyled>{user?.nombre}</UsernameStyled>
            {/* <LinkStyled to="/mis-ordenes">Mis Órdenes</LinkStyled> */}
            <LinkStyled to="/MisPedidos">Mis Órdenes</LinkStyled>

            <span onClick={handleLogout} style={{ cursor: "pointer" }}>
              Cerrar Sesión
            </span>
            
          </ModalContainerStyled>
        </Overlay>
      )}
    </>
  )
}
