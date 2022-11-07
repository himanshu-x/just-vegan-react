import { createSlice } from '@reduxjs/toolkit'

const deliveryAddressSlice = createSlice({
    name: 'delivery-address',
    initialState: {
        default: ''
    },
    reducers: {
        setDefaultAddress: (state, action) => {
            state.default = action.payload;
        }
    }
})

const { actions, reducer } = deliveryAddressSlice;

export const { setDefaultAddress } = actions
export default reducer;