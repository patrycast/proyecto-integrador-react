import { createSlice } from "@reduxjs/toolkit";
import { addProductToCart, removeFromCart, clearShipping } from "./utils/cart-utils";
import { SHIPPPING } from "../../utils/constants/constants";

const INITIAL_STATE = {
    cart: [],
    shipping: 0,
    hidden: true,
}


const cartSlice= createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {

        toggleCart: (state) => {
            return {
                ...state,
                hidden: !state.hidden,
            }
        },

        addItemToCart: (state, action) => {
            return {
                ...state,
                cart: addProductToCart(state.cart, action.payload),
                shipping: SHIPPPING,
            }
        },

        clearCart: (state) =>{
            return{
                ...state,
                cart: [],
                shipping: 0,
            }
        },

        deleteItemFromCart: (state, action) => {
            return {
                ...state,
                cart: removeFromCart(state.cart, action.payload),
                shipping: clearShipping(state.cart, SHIPPPING),
            }
        },
    }
})

export const {toggleCart, addItemToCart, clearCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;