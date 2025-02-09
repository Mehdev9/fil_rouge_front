import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { HomeView } from "./views/HomeView.jsx";
import { RegisterView } from "./views/RegisterView.jsx";
import { LoginView } from "./views/LoginView.jsx";
import { AccountView } from "./views/AccountView.jsx";
import Navbar from "./components/Navbar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "./store/authSlice.js";
import React from "react";
import Question from "./components/Question.jsx";
import Footer from "./components/Footer.jsx";
import AboutView from "./views/AboutView.jsx";
import ServiceView from "./views/ServiceView.jsx";
import { ContactView } from "./views/ContactView.jsx";
import ShopView from "./views/ShopView.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { DashboardView } from "./views/DashboardView.jsx";
import AdminProductView from "./views/AdminProductView.jsx";
import EditProductView from "./views/EditProductView.jsx";
import { ToastContainer, toast } from 'react-toastify';
import DetailsView from "./views/DetailsView.jsx";
import CartView from "./views/CartView.jsx";
import FormEditProductView from "./views/FormEditProductView.jsx";

const App = () => {
    const [loading, setLoading] = React.useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: true,
        });
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(login(token));
        }
        setLoading(false);
    }, [dispatch]);

    if (loading) {
        return (
            <div>Chargement...</div>
        );
    }

    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/about" element={<AboutView />} />
                    <Route path="/services" element={<ServiceView />} />
                    <Route path="/contact" element={<ContactView />} />
                    <Route path="/shop" element={<ShopView />} />
                    <Route path="/products/:id" element={<DetailsView />} />


                    <Route element={<UnprotectedRoute />}>
                        <Route path="/register" element={<RegisterView />} />
                        <Route path="/login" element={<LoginView />} />
                    </Route>

                    <Route element={<ProtectedRoute />}>
                        <Route path="/dashboard/products" element={<AdminProductView />} />
                        <Route path="/dashboard/products/edit" element={<EditProductView />} />
                        <Route path="/dashboard/products/edit/:productId" element={<FormEditProductView />} />

                        <Route path="/account" element={<AccountView />} />
                        <Route path="/dashboard" element={<DashboardView />} />
                        <Route path="/cart" element={<CartView />} />
                    </Route>
                </Routes>

                <Question />
                <Footer />
                <ToastContainer />
            </div>
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
