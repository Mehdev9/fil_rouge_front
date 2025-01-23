import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import ApiBackend from "../api/ApiBackend.js";

const EditProductView = () => {
    const [products, setProducts] = useState([]);

    // Charger les produits au démarrage
    useEffect(() => {
        axios.get('http://localhost:8080/dashboard/products/shop')  // URL mise à jour pour charger les produits à éditer
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Erreur lors du chargement des produits : ", error);
            });
    }, []);

    // Supprimer un produit
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce produit ?");
        if (confirmDelete) {
            ApiBackend.delete(`/dashboard/products/${id}`)
                .then(response => {
                    alert("Produit supprimé avec succès.");
                    setProducts(products.filter(product => product.id !== id)); // Mettre à jour la liste après suppression
                })
                .catch(error => {
                    alert("Une erreur est survenue lors de la suppression du produit.");
                });
        }
    };



    return (
        <div className="dashboard-page d-flex">
            <div className="sidebar bg-dark text-light p-4 mt-5" style={{ width: '250px' }}>
                <hr className="my-4 border-3 border-warning" />
                <h3 className="text-warning text-center mb-4">CompoTower</h3>
                <hr className="my-4 border-3 border-warning" />
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
                                <Link to="/dashboard/products/add" className="dropdown-item">
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
                <h1 className="text-warning pt-5">Gérer les Produits</h1>

                <section className="py-5 shadow-lg" data-aos="fade-up">
                    <div className="container bg-primary text-light rounded p-4">
                        <h2 className="text-warning pb-2">Liste des Produits</h2>
                        <hr />

                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Description</th>
                                    <th>Prix</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {products.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center">Aucun produit disponible</td>
                                    </tr>
                                ) : (
                                    products.map((product) => (
                                        <tr key={product.id}>
                                            <td>{product.name}</td>
                                            <td>{product.description}</td>
                                            <td>{product.price} €</td>
                                            <td>
                                                {/* Modifier un produit */}
                                                <Link to={`/dashboard/products/edit/${product.id}`} className="btn btn-warning text-light me-2">
                                                    <i className="bi bi-pencil text-light"></i> Modifier
                                                </Link>

                                                {/* Supprimer un produit */}
                                                <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>
                                                    <i className="bi bi-trash"></i> Supprimer
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EditProductView;
