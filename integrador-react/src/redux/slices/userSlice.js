import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE= {
    user: null,
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
        clearUser: (state) => {
            return {
                ...state,
                user: null,
            }
        }
    }
})

export const { setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;