import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bounce, toast } from "react-toastify";
import { Link } from 'react-router-dom';
import ApiBackend from "../api/ApiBackend.js";

const CartView = () => {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = 1;

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await ApiBackend.get(`http://localhost:8080/cart/user`);
                setCart(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Erreur lors de la récupération du panier :", error);
                setError("Erreur de chargement du panier.");
                setLoading(false);
            }
        };

        fetchCart();
    }, [userId]);

    const handleRemoveProduct = async (productId) => {
        try {
            await ApiBackend.delete(`/cart/remove?productId=${productId}`);
            setCart((prevCart) => ({
                ...prevCart,
                items: prevCart.items.filter(item => item.productId !== productId)
            }));
            toast.success("Produit supprimé du panier avec succès.", {
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
            console.error("Erreur lors de la suppression du produit :", error);
            setError("Erreur lors de la suppression du produit.");
        }
    };

    if (loading) {
        return <div className="text-center my-5">Chargement du panier...</div>;
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
                    <h1 className="mt-5">Mon Panier</h1>
                    <hr />
                    <p className="lead bg-violet">
                        Voici les produits que vous avez ajoutés à votre panier.
                    </p>
                </div>
            </section>

            <div className="container">
                <div className="row justify-content-center mt-5">
                    {cart && cart.items.length === 0 ? (
                        <div className="col-12 text-center">Votre panier est vide.</div>
                    ) : (
                        cart.items.map((item) => (
                            <div key={item.id} className="col-md-4 mb-4">
                                <div className="card bg-primary text-white text-center">
                                    <img
                                        src={`http://localhost:8080/products/${item.productId}/image`}
                                        alt="Product"
                                        className="card-img-top"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.productId}</h5>
                                        <hr />
                                        <p className="card-text">Quantité: {item.quantity}</p>
                                        <p className="card-text">Prix: {item.price} €</p>
                                        <div className="d-flex justify-content-between">
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleRemoveProduct(item.productId)}
                                            >
                                                Supprimer
                                            </button>
                                            <Link to={`/products/${item.productId}`} className="btn btn-warning">
                                                Voir le produit
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                {cart && cart.items.length > 0 && (
                    <div className="text-center mt-4">
                        <button className="btn btn-success">Passer à la caisse</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartView;
