import { useEffect, useState } from "react";
import ApiBackend from "../api/ApiBackend.js";
import React from "react";
import { Link } from "react-router-dom";

export const DashboardView = () => {

    useEffect(() => {
        ApiBackend.get("/dashboard")
            .then((response) => {
            });
    }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

    return (
        <div className="dashboard-page d-flex">

            <div className="sidebar bg-dark text-light p-4 mt-5" style={{width: '250px'}}>
                <hr className="my-4 border-3 border-warning"/>
                <h3 className="text-warning text-center mb-4">CompoTower</h3>
                <hr className="my-4 border-3 border-warning"/>
                <ul className="nav flex-column">
                    <li className="nav-item mb-3">
                        <Link to="/dashboard" className="nav-link">
                            <i className="bi bi-house-door"></i> Dashboard
                        </Link>
                    </li>
                    <li className="nav-item dropdown mb-3">
                        <a className="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-shop"></i> Produits
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                            <li>
                                <Link to="/dashboard/products" className="dropdown-item">
                                    Ajouter un produit
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/products/edit" className="dropdown-item">
                                    Modifier un produit
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item mb-3">
                        <Link to="/orders" className="nav-link">
                            <i className="bi bi-box"></i> Commandes
                        </Link>
                    </li>
                    <li className="nav-item mb-3">
                        <Link to="/account" className="nav-link">
                            <i className="bi bi-person-circle"></i> Profil
                        </Link>
                    </li>
                    <li className="nav-item mb-3">
                        <Link to="/offers" className="nav-link">
                            <i className="bi bi-tag"></i> Offres
                        </Link>
                    </li>
                    <li className="nav-item mb-3">
                        <button
                            className="nav-link bg-transparent border-0 d-flex align-items-center"
                            onClick={() => {
                                localStorage.removeItem("token");
                                window.location.href = "/";
                            }}
                        >
                            <i className="bi bi-box-arrow-right me-2"></i> Déconnexion
                        </button>
                    </li>
                </ul>
            </div>

            <div className="main-content flex-grow-1 p-4">
                <section className="hero-section text-center py-5"
                         style={{
                             minHeight: '600px',
                             display: 'flex',
                             flexDirection: 'column',
                             justifyContent: 'center'
                         }}>
                    <div className="container">
                        <h1 className="mt-5">Bienvenue dans votre tableau de bord</h1>
                        <hr/>
                        <p className="lead">
                            Gérer vos produits, commandes et profil avec facilité. Accédez aux dernières informations
                            et gérez vos préférences en un clin d'œil.
                        </p>
                    </div>
                </section>

                <section className="py-5 shadow-lg" data-aos="fade-up">
                    <div className="container bg-primary text-light rounded p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center">
                                <h2 className="text-warning pb-4">Statistiques récentes</h2>
                                <p>
                                    Visualisez vos commandes récentes et suivez les performances de vos produits en un
                                    coup d'œil.
                                </p>
                                <Link to="/orders" className="btn btn-warning">Voir toutes les commandes</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="recent-activity py-5 shadow-lg" data-aos="fade-up">
                    <div className="container bg-primary text-light rounded p-4">
                        <h2 className="text-warning pb-4">Activité récente</h2>
                        <p>
                            Vous avez récemment consulté des produits et effectué des achats. Suivez ici votre activité.
                        </p>
                        <Link to="/profile" className="btn btn-warning">Voir mon profil</Link>
                    </div>
                </section>
            </div>
        </div>
    );
};
