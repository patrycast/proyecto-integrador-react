
// import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../../redux/slices/userSlice";
import { useEffect } from "react";
import { Overlay, ModalContainerStyled, UsernameStyled, LinkStyled } from "./UserModalStyles";

export const UserModal = () => {
  const {hiddenMenu} = useSelector((state) => state.user)
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(toggleMenu())
    }, [dispatch])

    return (
    <>
        {/* <span onClick={() => dispatch(toggleMenu())} style={{ cursor: "pointer" }}>
        Abrir menú
      </span> */}

      {!hiddenMenu && (
        <Overlay onClick={() => dispatch(toggleMenu())}>
          <ModalContainerStyled isOpen={!hiddenMenu} onClick={(e) => e.stopPropagation()}>

            <UsernameStyled>Pepito</UsernameStyled>
            <LinkStyled to="/mis-ordenes">Mis Órdenes</LinkStyled>
            <span onClick={() => dispatch(toggleMenu())} style={{ cursor: "pointer" }}>

              Cerrar Sesión
            </span>
          </ModalContainerStyled>
        </Overlay>
      )}
    </>
  )
}
