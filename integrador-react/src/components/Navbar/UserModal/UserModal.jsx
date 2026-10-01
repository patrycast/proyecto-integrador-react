import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../redux/slices/userSlice";
import { Overlay, ModalContainerStyled, UsernameStyled, LinkStyled } from "./UserModalStyles";
import { useNavigate } from "react-router-dom";

export const UserModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  if (!isOpen || !user) return null;

  const handleLogout = () => {
      dispatch(clearUser());
      onClose();
      navigate("/login");
    }

    return (
    <>
      <Overlay onClick={onClose}>
        <ModalContainerStyled onClick={(e) => e.stopPropagation()}>

          <UsernameStyled>{user?.nombre}</UsernameStyled>
          {/* <LinkStyled to="/mis-ordenes">Mis Órdenes</LinkStyled> */}
          <LinkStyled to="/misPedidos" onClick={onClose}>Mis Órdenes</LinkStyled>

          <span onClick={handleLogout} style={{ cursor: "pointer" }}>
            Cerrar Sesión
          </span>

        </ModalContainerStyled>
      </Overlay>
    </>
  )
}