import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            defaultAddress: {},
        }
    },
    reducers: {
        setUser(state, { type, payload }) {
            // console.log(payload);
            state.user = payload;
            if (payload && !payload.defaultAddress && payload.addresses && payload.addresses.length > 0) {
                state.user.defaultAddress = payload.addresses[0];
            }
        },
        addressHandle: (state, { payload }) => {
            // console.log(payload)
            state.user.defaultAddress = payload;


        }
    },
})

const { actions, reducer } = userSlice;

export const { setUser, addressHandle } = actions
export default reducer;