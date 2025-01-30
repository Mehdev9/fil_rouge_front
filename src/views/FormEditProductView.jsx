import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ApiBackend from '../api/ApiBackend.js';
import { Bounce, toast } from 'react-toastify';

const FormEditProductView = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null); // Initial state is null
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch product data on component mount
    useEffect(() => {
        axios
            .get(`http://localhost:8080/dashboard/products/${productId}`)
            .then((response) => {
                setProduct(response.data);  // Set product data
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erreur lors du chargement du produit : ", error);
                setError("Impossible de charger les informations du produit.");
                setLoading(false);
            });
    }, [productId]);

    // Initialize Formik only when product data is available
    const formik = useFormik({
        enableReinitialize: true, // Allows form to reinitialize when product changes
        initialValues: {
            name: product?.name || '',
            description: product?.description || '',
            category: product?.category || '',
            brand: product?.brand || '',
            price: product?.price || '',
            quantity: product?.quantity || '',
            imageUrl: null, // You can keep the image field empty or pre-populate if needed
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(4, "Le nom doit comporter au moins 4 caractères")
                .max(30, "Le nom ne peut pas dépasser 30 caractères")
                .required("Le nom est requis"),
            description: Yup.string()
                .min(1, "La description doit comporter au moins 20 caractères")
                .max(255, "La description ne peut pas dépasser 255 caractères")
                .required("La description est requise"),
            category: Yup.string().required("La catégorie est requise"),
            brand: Yup.string().required("La marque est requise"),
            price: Yup.number().positive("Le prix doit être un nombre positif").required("Le prix est requis"),
            quantity: Yup.number().integer("La quantité doit être un entier").positive("La quantité doit être un nombre positif").required("La quantité est requise"),
        }),
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("description", values.description);
            formData.append("category", values.category);
            formData.append("brand", values.brand);
            formData.append("price", values.price);
            formData.append("quantity", values.quantity);

            if (values.imageUrl) {
                formData.append("imageUrl", values.imageUrl);
            }

            ApiBackend.put(`/dashboard/products/${productId}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
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

                    navigate('/dashboard/products');
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
        },
    });

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
                        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                            <div className="mb-3">
                                <label htmlFor="imageUrl" className="form-label">Image du produit</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="imageUrl"
                                    name="imageUrl"
                                    onChange={(event) => {
                                        formik.setFieldValue("imageUrl", event.target.files[0]);
                                    }}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nom du produit</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <div className="text-danger">{formik.errors.name}</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.description && formik.errors.description && (
                                    <div className="text-danger">{formik.errors.description}</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Catégorie</label>
                                <select
                                    className="form-select"
                                    id="category"
                                    name="category"
                                    value={formik.values.category}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="">Sélectionner une catégorie</option>
                                    <option value="Carte Mère">Carte Mère</option>
                                    <option value="Carte Graphique">Carte Graphique</option>
                                    <option value="SSD">SSD</option>
                                    <option value="Boîtier">Boîtier</option>
                                    <option value="Alimentation">Alimentation</option>
                                    <option value="Processeur">Processeur</option>
                                </select>
                                {formik.touched.category && formik.errors.category && (
                                    <div className="text-danger">{formik.errors.category}</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="brand" className="form-label">Marque</label>
                                <select
                                    className="form-select"
                                    id="brand"
                                    name="brand"
                                    value={formik.values.brand}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
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
                                {formik.touched.brand && formik.errors.brand && (
                                    <div className="text-danger">{formik.errors.brand}</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Prix</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    name="price"
                                    value={formik.values.price}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.price && formik.errors.price && (
                                    <div className="text-danger">{formik.errors.price}</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="quantity" className="form-label">Quantité</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="quantity"
                                    name="quantity"
                                    value={formik.values.quantity}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.quantity && formik.errors.quantity && (
                                    <div className="text-danger">{formik.errors.quantity}</div>
                                )}
                            </div>

                            <button type="submit" className="btn btn-warning text-light">Mettre à jour</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FormEditProductView;
