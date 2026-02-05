import { CardSuggest } from "./CardSuggest"
import { CardsSuggestContainer } from "./CardsSuggestStyles"
import { useSelector } from "react-redux"


export const CardsSuggest = () => {

  const {suggested} = useSelector((state) => state.suggested)

  return (
    <CardsSuggestContainer>
        {suggested.map(wine => (
            <CardSuggest key={wine.id} {...wine} />
        ))}      
    </CardsSuggestContainer>
  )
}
