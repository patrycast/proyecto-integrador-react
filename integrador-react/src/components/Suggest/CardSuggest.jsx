import { CardSuggestStyled } from "./CardsSuggestStyles"

export const CardSuggest = ({title,  desc, price}) => {
  return (
    <CardSuggestStyled>
        {/* <img src={img} alt={title} /> */}

        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <span>$ {price}</span>
        </div>

        <button onClick={(e) => {e.preventDefault()}}>Agregar</button>
    </CardSuggestStyled>

  )
}
