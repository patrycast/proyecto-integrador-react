import { ButtonStyled } from "./ButtonStyles"

export const Button = ({children, onClick, disabled}) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>{children}</ButtonStyled>
  )
}
