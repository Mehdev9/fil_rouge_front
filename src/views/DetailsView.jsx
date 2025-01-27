import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

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

    if (loading) {
        return <div className="text-center my-5">Chargement du produit...</div>;
    }

    if (error) {
        return <div className="text-center my-5 text-danger">{error}</div>;
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={`http://localhost:8080${product.imageUrl}`}
                        alt={product.name}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p><strong>Prix : </strong>{product.price} €</p>
                    <p><strong>Marque : </strong>{product.brand}</p>
                    <p><strong>Catégorie : </strong>{product.category}</p>
                    <Link to="/shop" className="btn btn-secondary">Retour à la boutique</Link>
                    <Link to={`/cart/${product.id}`} className="btn btn-success ms-2">Ajouter au panier</Link>
                </div>
            </div>
        </div>
    );
};

export default DetailsView;
