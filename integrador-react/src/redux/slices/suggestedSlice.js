import { createSlice } from "@reduxjs/toolkit"
import { products } from "../../mock/products"

const generateSuggested = (number) => {
    const suggested = []
    const usedIds = new Set()

    while (suggested.length < number) {
        const randomId = Math.floor(Math.random() * products.length)
        const product= { ...products[randomId]}

        if(!usedIds.has(product.id)){
            suggested.push(product)
            usedIds.add(product.id)
        }
    }
    return [...suggested]
}


const INITIAL_STATE = {
    suggested: generateSuggested(5),
}

export const suggestedSlice = createSlice({
    name: "suggested", 
    initialState: INITIAL_STATE,
    reducers: {
        randomSuggested: (state) => {
            return state;
        },
    },
});


export const {randomSuggested} = suggestedSlice.actions;

export default suggestedSlice.reducer;