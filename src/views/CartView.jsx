import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
            await ApiBackend.delete(`cart/remove?productId=${productId}`);
            setCart((prevCart) => ({
                ...prevCart,
                items: prevCart.items.filter(item => item.productId !== productId)
            }));
        } catch (error) {
            console.error("Erreur lors de la suppression du produit :", error);
            setError("Erreur lors de la suppression du produit.");
        }
    };

    const handleQuantityChange = async (productId, newQuantity) => {
        // Tu peux également ajouter une fonctionnalité pour changer la quantité, et mettre à jour le panier
    };

    if (loading) {
        return <div>Chargement du panier...</div>;
    }

    if (error) {
        return <div className="text-danger">{error}</div>;
    }

    return (
        <div className="container my-5">
            <h2>Mon Panier</h2>
            {cart && cart.items.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
                <div>
                    <div className="row">
                        {cart.items.map((item) => (
                            <div key={item.id} className="col-md-4 mb-3">
                                <div className="card">
                                    <img src={`http://localhost:8080/products/${item.productId}/image`} alt="Product" className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">Produit ID: {item.productId}</h5>
                                        <p className="card-text">Quantité: {item.quantity}</p>
                                        <p className="card-text">Prix: {item.price} €</p>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleRemoveProduct(item.productId)}
                                        >
                                            Supprimer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-primary">Passer à la caisse</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartView;
