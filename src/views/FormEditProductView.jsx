import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import ApiBackend from '../api/ApiBackend.js';
import { Bounce, toast } from 'react-toastify';

const FormEditProductView = () => {
    const { productId } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
        stock: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/dashboard/products/${productId}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erreur lors du chargement du produit : ", error);
                setError("Impossible de charger les informations du produit.");
                setLoading(false);
            });
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!product.name || !product.description || !product.price || !product.stock) {
            toast.error("Tous les champs sont obligatoires.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            return;
        }

        ApiBackend.put(`/dashboard/products/${productId}`, product)
            .then((response) => {
                toast.success("Produit mis à jour avec succès !", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });

                history.push('/dashboard/products');
            })
            .catch((error) => {
                toast.error("Une erreur est survenue lors de la mise à jour du produit.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
                console.error("Erreur lors de la mise à jour du produit : ", error);
            });
    };

    if (loading) {
        return <div className="text-center my-5">Chargement du produit...</div>;
    }

    if (error) {
        return <div className="text-center my-5 text-danger">{error}</div>;
    }

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
                <h1 className="text-warning pt-5">Modifier le produit</h1>

                <section className="py-5 shadow-lg" data-aos="fade-up">
                    <div className="container bg-primary text-light rounded p-4">
                        <h2 className="text-warning pb-2">Modifier les informations du produit</h2>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={product.name}
                                    onChange={handleChange}
                                    required
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
                                    required
                                />
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
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="stock" className="form-label">Stock</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="stock"
                                    name="stock"
                                    value={product.stock}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-warning text-light">
                                Mettre à jour
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FormEditProductView;
