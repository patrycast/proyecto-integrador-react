import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE= {
    user: null,
    hiddenMenu: true,
}


const userSlice= createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setUser:(state, action) =>{
            return {
                ...state,
                user: action.payload,
            }
        },
        toggleMenu: (state) => {
            return {
                ...state,
                hiddenMenu: !state.hiddenMenu,
            }
        },
    }
})

export const { setUser, toggleMenu} = userSlice.actions;
export default userSlice.reducer;