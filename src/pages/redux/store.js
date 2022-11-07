import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import { combineReducers } from 'redux'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})