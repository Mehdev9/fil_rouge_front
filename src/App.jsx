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
import Question from "./components/Question.jsx";
import Footer from "./components/Footer.jsx";
import AboutView from "./views/AboutView.jsx";
import ServiceView from "./views/ServiceView.jsx";
import {ContactView} from "./views/ContactView.jsx";
import ShopView from "./views/ShopView.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        AOS.init({
            duration: 1000,  // durée de l'animation (en millisecondes)
            easing: 'ease',  // type d'accélération
            once: true,      // l'animation se déclenche uniquement une fois
        });
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(login(token));
        }
    }, [dispatch]);

    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomeView/>}/>

                    <Route element={<UnprotectedRoute/>}>
                        <Route path="/register" element={<RegisterView/>}/>
                        <Route path="/login" element={<LoginView/>}/>
                        <Route path="/about" element={<AboutView/>}/>
                        <Route path="/services" element={<ServiceView/>}/>
                        <Route path="/contact" element={<ContactView/>}/>
                        <Route path="/shop" element={<ShopView/>}/>




                    </Route>


                    <Route element={<ProtectedRoute/>}>
                        <Route path="/account" element={<PrivateView/>}/>
                    </Route>
                </Routes>

                <Question/>
            </div>
            <Footer/>
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
