import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";


const store = configureStore({
    reducer: combineReducers({
        auth: authReducer
    })
})
export default store;