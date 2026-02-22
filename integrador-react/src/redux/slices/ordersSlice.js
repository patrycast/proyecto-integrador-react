import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    orders: [],
    error: null,
}


const ordersSlice = createSlice({
    name: "orders",
    initialState: INITIAL_STATE,
    reducers: {
        createOrderFail: (state= INITIAL_STATE, action) => {
            return {
                ...state, 
                error: action.payload,
            }
        },
        getOrderSuccess: (state, action) => {
            return {
                ...state,
                error: null,
                orders: [...action.payload],
            }
        },
        getOrdersFail: (state, action) => {
            return {
                ...state,
                error: action.payload,
            }
        },
    }

})

export const { createOrderFail, getOrderSuccess, getOrdersFail } = ordersSlice.actions;
export default ordersSlice.reducer;