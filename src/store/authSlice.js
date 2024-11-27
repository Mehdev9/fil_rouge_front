import {createSlice} from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        "token": null,
        "isAuthenticated": false,
    },
    reducers: {
        login: (state, {payload}) => {
            let isTokenValid = false

            try {
                const jwtDecoded = jwtDecode(payload);
                const containAllAttributes = !!jwtDecoded.sub && !!jwtDecoded.exp && !!jwtDecoded.role
                const isTokenExpired = new Date() > new Date(jwtDecoded.exp * 1000)
                isTokenValid = containAllAttributes && !isTokenExpired
            } catch (err) {
                isTokenValid = false;
            }

            if (isTokenValid) {
                state.token = payload
                state.isAuthenticated = true;
                localStorage.setItem("token", payload);
            }
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
        }
    }
})

export default authSlice.reducer;

export const {login, logout} = authSlice.actions;