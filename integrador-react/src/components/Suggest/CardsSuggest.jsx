import { CardSuggest } from "./CardSuggest"
import { suggestWines } from "../../mock/suggestWines"
import { CardsSuggestContainer } from "./CardsSuggestStyles"

export const CardsSuggest = () => {
  return (
    <CardsSuggestContainer>
        {suggestWines.map(wine => (
            <CardSuggest key={wine.id} {...wine} />
        ))}      
    </CardsSuggestContainer>
  )
}
