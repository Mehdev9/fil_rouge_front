import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { HomeView } from "./views/HomeView.jsx";
import { RegisterView } from "./views/RegisterView.jsx";
import { LoginView } from "./views/LoginView.jsx";
import { PrivateView } from "./views/PrivateView.jsx";
import Navbar from "./components/Navbar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "./store/authSlice.js";
import React from "react";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(login(token));
        }
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeView />} />

                <Route element={<UnprotectedRoute />}>
                    <Route path="/register" element={<RegisterView />} />
                    <Route path="/login" element={<LoginView />} />
                </Route>


                <Route element={<ProtectedRoute />}>
                    <Route path="/account" element={<PrivateView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;

const ProtectedRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
};

const UnprotectedRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    return <Outlet />;
};
