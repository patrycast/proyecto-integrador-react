import { ButtonStyled } from "./ButtonStyles"

export const Button = ({children, onClick, disabled,  type = "button" }) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled} type={type}>
      {children}
    </ButtonStyled>
  )
}
