import { createSlice } from "@reduxjs/toolkit"
import {categories} from "../../mock/categories"


const INITIAL_STATE = {
    categories: categories,
    pickedCategory: null,
}


export const categoriesSlice = createSlice({
    name: "categories",
    initialState: INITIAL_STATE,
    reducers: {
        getCategories: (state) => {
            return state;
        },
        pickCategory: (state, action) => {
            return {
                ...state,
                pickedCategory: action.payload !== state.pickedCategory ? action.payload : null
            };
        },
    },
});


export const { getCategories, pickCategory} = categoriesSlice.actions;

export default categoriesSlice.reducer;