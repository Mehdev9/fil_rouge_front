import React, { useState } from "react";
import ApiBackend from "../api/ApiBackend.js";
import { Link } from "react-router-dom";


const AdminProductView = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        category: '',
        brand: '',
        price: '',
        quantity: ''
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        ApiBackend.post("/dashboard/products", product)
            .then(response => {
                setSuccess('Produit ajouté avec succès.');
                setProduct({
                    name: '',
                    description: '',
                    category: '',
                    brand: '',
                    price: '',
                    quantity: ''
                });
            })
            .catch(error => {
                setError('Une erreur est survenue lors de l\'ajout du produit.');
            });
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
                    <li className="nav-item mb-3">
                        <Link to="/dashboard/products" className="nav-link">
                            <i className="bi bi-shop"></i> Produits
                        </Link>
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
                <h1 className="text-warning pt-5">Ajouter un Produit</h1>

                <section className="py-5 shadow-lg" data-aos="fade-up">
                    <div className="container bg-primary text-light rounded p-4">
                        <h2 className="text-warning pb-2">Formulaire d'ajout</h2>
                        <hr />

                        {error && <div className="alert alert-danger">{error}</div>}
                        {success && <div className="alert alert-success">{success}</div>}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nom du produit</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={product.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    value={product.description}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Catégorie</label>
                                <select
                                    className="form-select"
                                    id="category"
                                    name="category"
                                    value={product.category}
                                    onChange={handleChange}
                                >
                                    <option value="">Sélectionner une catégorie</option>
                                    <option value="Carte Mère">Carte Mère</option>
                                    <option value="Carte Graphique">Carte Graphique</option>
                                    <option value="SSD">SSD</option>
                                    <option value="Boîtier">Boîtier</option>
                                    <option value="Alimentation">Alimentation</option>
                                    <option value="Processeur">Processeur</option>
                                </select>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="brand" className="form-label">Marque</label>
                                <select
                                    className="form-select"
                                    id="brand"
                                    name="brand"
                                    value={product.brand}
                                    onChange={handleChange}
                                >
                                    <option value="">Sélectionner une marque</option>
                                    <option value="Corsair">Corsair</option>
                                    <option value="ASUS">ASUS</option>
                                    <option value="MSI">MSI</option>
                                    <option value="Gigabyte">Gigabyte</option>
                                    <option value="Intel">Intel</option>
                                    <option value="AMD">AMD</option>
                                    <option value="EVGA">EVGA</option>
                                    <option value="NZXT">NZXT</option>
                                    <option value="Razer">Razer</option>
                                    <option value="Cooler Master">Cooler Master</option>
                                </select>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Prix</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    name="price"
                                    value={product.price}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="quantity" className="form-label">Quantité</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="quantity"
                                    name="quantity"
                                    value={product.quantity}
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className="btn text-light btn-warning">Ajouter</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdminProductView;
