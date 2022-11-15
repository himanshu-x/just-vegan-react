import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import dishCartReducer from '../../features/dishCartSlice';
import deliveryAddressReducer from '../../features/deliveryAddress';
import userSliceReducer from '../../features/userSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        dishCart: dishCartReducer,
        deliveryAddress: deliveryAddressReducer,
        userStore: userSliceReducer
    },
})