import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './screen/redux/counterStatus'

export const store = configureStore({
    reducer: {
        Dim: counterReducer,
    },
})