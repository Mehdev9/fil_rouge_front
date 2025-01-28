import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Bounce, toast } from "react-toastify";

const DetailsView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/dashboard/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Erreur lors du chargement du produit :", error);
                setError("Erreur de chargement des détails du produit.");
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    const handleAddToCart = async (productId, price, quantity = 1) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error("Vous devez être connecté pour ajouter un produit au panier.", {
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

            await axios.post('http://localhost:8080/cart/add', null, {
                params: {
                    productId: productId,
                    quantity: quantity,
                    price: price
                },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            toast.success("Produit ajouté avec succès au panier !", {
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
        } catch (error) {
            console.error('Erreur lors de l\'ajout au panier', error);
            toast.error("Une erreur est survenue.", {
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
        }
    };

    if (loading) {
        return <div className="text-center my-5">Chargement du produit...</div>;
    }

    if (error) {
        return <div className="text-center my-5 text-danger">{error}</div>;
    }

    return (
        <div className="shop-page">
            <section
                className="hero-section text-center py-5"
                style={{
                    minHeight: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <div className="container">
                    <h1 className="mt-5">Détails du produit</h1>
                    <hr />
                    <p className="lead bg-violet">
                        Découvrez plus d'informations sur ce produit.
                    </p>
                </div>
            </section>

            <div className="container">
                <div className="row justify-content-center mb-4 mt-5">
                    <div className="col-md-6 mb-4">
                        <img
                            src={`http://localhost:8080/${product.imageUrl}`}
                            alt={product.name}
                            className="img-fluid"
                            style={{ height: '400px', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-primary text-white" data-aos="fade-left">
                            <div className="card-body">
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p><strong>Prix : </strong>{product.price} €</p>
                                <p><strong>Marque : </strong>{product.brand}</p>
                                <p><strong>Catégorie : </strong>{product.category}</p>
                                <div className="d-flex justify-content-between mt-4">
                                    <Link to="/shop" className="btn btn-warning">Retour à la boutique</Link>
                                    <button
                                        className="btn btn-success ms-2"
                                        onClick={() => handleAddToCart(product.id, product.price, 1)}
                                    >
                                        Ajouter au panier
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsView;
