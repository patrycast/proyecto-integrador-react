
import { useState } from "react";

export const UserModal = () => {
    const [hiddenUser, setHiddenUser] = useState(false);

    return (
    <>
        <span onClick={() => setHiddenUser(false)} style={{ cursor: "pointer" }}>
        Abrir menú
      </span>

      {!hiddenUser && (
        <Overlay onClick={() => setHiddenUser(true)}>
          <ModalContainerStyled onClick={(e) => e.stopPropagation()}>
            <UsernameStyled>Pepito</UsernameStyled>
            <HrStyled />
            <LinkStyled to="/mis-ordenes">Mis Órdenes</LinkStyled>
            <span onClick={() => setHiddenUser(true)} style={{ cursor: "pointer" }}>
              Cerrar Sesión
            </span>
          </ModalContainerStyled>
        </Overlay>
      )}
    </>
  )
}
