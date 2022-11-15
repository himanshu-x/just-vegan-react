import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        setUser(state, { type, payload }) {
            // console.log(payload);
            state.user = payload;
        }
    },
})

const { actions, reducer } = userSlice;

export const { setUser } = actions
export default reducer;