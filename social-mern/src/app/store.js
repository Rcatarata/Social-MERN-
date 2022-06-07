import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import talkReducer from '../features/talks/talkSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        talks: talkReducer
    },
});