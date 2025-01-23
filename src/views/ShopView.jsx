import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ShopView = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/dashboard/products/shop')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erreur lors du chargement des produits : ", error);
                setError("Erreur de chargement des produits.");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center my-5">Chargement des produits...</div>;
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
                    <h1 className="mt-5">Composants</h1>
                    <hr />
                    <p className="lead">
                        C'est ici que vous trouverez les meilleurs composants pour votre configuration !
                    </p>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <div className="card">
                                <img
                                    src={`http://localhost:8080${product.imageUrl}`}
                                    alt={product.name}
                                    className="card-img-top"
                                    style={{height: '250px', objectFit: 'cover'}}
                                />

                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">
                                        <strong>Prix : </strong>{product.price} €
                                    </p>
                                    <Link to={`/product/${product.id}`} className="btn btn-primary">
                                        Voir le produit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopView;
