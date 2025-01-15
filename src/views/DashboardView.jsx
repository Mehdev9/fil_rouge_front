import { useEffect } from "react";
import ApiBackend from "../api/ApiBackend.js";
import React from "react";
import { Link } from "react-router-dom";

export const DashboardView = () => {


    useEffect(() => {
        ApiBackend.get("/dashboard")
            .then((response) => {
                console.log(response);
            });
    }, []);

    return (
        <div className="dashboard-page">
            <div className="container-fluid">
                <div className="row">
                    {/* Menu latéral à gauche */}
                    <div className="col-md-3 col-lg-2 bg-dark text-white p-4 position-fixed h-100">
                        <h3 className="text-warning">Menu</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to="/stats" className="nav-link text-white">Statistiques</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shop" className="nav-link text-white">Produits récents</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link text-white">Gestion de compte</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/notifications" className="nav-link text-white">Notifications</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/offers" className="nav-link text-white">Offres spéciales</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/news" className="nav-link text-white">Dernières actualités</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contenu principal à droite */}
                    <div className="col-md-9 col-lg-10 ml-md-3 pl-md-5">
                        <div className="container py-5">
                            <div className="row">
                                {/* Section 1: Statistiques */}
                                <div className="col-md-4 mb-4">
                                    <div className="card text-white bg-primary">
                                        <div className="card-header text-center">
                                            <h4 className="text-warning">Statistiques</h4>
                                        </div>
                                        <div className="card-body">
                                            <p className="text-center">Suivez les ventes, les stocks, consultez les tendances et bien plus encore.</p>
                                            <Link to="/stats" className="btn btn-warning d-block mx-auto">Voir les statistiques</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2: Produits récents */}
                                <div className="col-md-4 mb-4">
                                    <div className="card text-white bg-primary">
                                        <div className="card-header text-center">
                                            <h4 className="text-warning">Produits récents</h4>
                                        </div>
                                        <div className="card-body">
                                            <p className="text-center">Consultez les nouveaux produits disponibles dans notre catalogue.</p>
                                            <Link to="/shop" className="btn btn-warning d-block mx-auto">Voir les nouveaux produits</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3: Gestion de compte */}
                                <div className="col-md-4 mb-4">
                                    <div className="card text-white bg-primary">
                                        <div className="card-header text-center">
                                            <h4 className="text-warning">Gestion de compte</h4>
                                        </div>
                                        <div className="card-body">
                                            <p className="text-center">Mettez à jour vos informations personnelles et gérez vos préférences.</p>
                                            <Link to="/profile" className="btn btn-warning d-block mx-auto">Gérer mon compte</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {/* Section 4: Notifications */}
                                <div className="col-md-6 mb-4">
                                    <div className="card text-white bg-secondary">
                                        <div className="card-header text-center">
                                            <h4 className="text-warning">Notifications</h4>
                                        </div>
                                        <div className="card-body">
                                            <p className="text-center">Consultez les dernières notifications concernant vos commandes et promotions.</p>
                                            <Link to="/notifications" className="btn btn-warning d-block mx-auto">Voir les notifications</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 5: Offres spéciales */}
                                <div className="col-md-6 mb-4">
                                    <div className="card text-white bg-secondary">
                                        <div className="card-header text-center">
                                            <h4 className="text-warning">Offres spéciales</h4>
                                        </div>
                                        <div className="card-body">
                                            <p className="text-center">Profitez de nos offres exclusives sur les produits populaires.</p>
                                            <Link to="/offers" className="btn btn-warning d-block mx-auto">Voir les offres</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {/* Section 6: Dernières actualités */}
                                <div className="col-md-12">
                                    <div className="card text-white bg-primary">
                                        <div className="card-header text-center">
                                            <h4 className="text-warning">Dernières actualités</h4>
                                        </div>
                                        <div className="card-body">
                                            <p className="text-center">Restez informé sur les dernières innovations dans le monde des composants PC.</p>
                                            <Link to="/news" className="btn btn-warning d-block mx-auto">Voir les actualités</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
