import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './screen/redux/counterStatus'
import authReducer from './Features/AuthSlice'

export const store = configureStore({
    reducer: {
        Dim: counterReducer,
        auth: authReducer,
    },
})