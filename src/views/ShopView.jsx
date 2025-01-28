import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Bounce, toast} from "react-toastify";
import { useLocation } from 'react-router-dom';

const ShopView = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const categoryFromURL = queryParams.get('category');
        if (categoryFromURL) {
            setCategoryFilter(categoryFromURL);
        }
    }, [location.search]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = 'http://localhost:8080/dashboard/products/shop';

                const filters = [];
                if (searchQuery) filters.push(`query=${searchQuery}`);
                if (priceFilter) filters.push(`price=${priceFilter}`);
                if (categoryFilter) filters.push(`category=${categoryFilter}`);
                if (brandFilter) filters.push(`brand=${brandFilter}`);

                if (filters.length > 0) {
                    url += `?${filters.join('&')}`;
                }

                const response = await axios.get(url);
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Erreur lors du chargement des produits : ", error);
                setError("Erreur de chargement des produits.");
                setLoading(false);
            }
        };
        fetchProducts();
    }, [searchQuery, priceFilter, categoryFilter, brandFilter]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPriceFilter(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value);
    };

    const handleBrandChange = (e) => {
        setBrandFilter(e.target.value);
    };

    const handleAddToCart = async (productId, name, description, price, quantity = 1) => {
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
                    price: price,
                    name: name,
                    description: description
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
                    <p className="lead bg-violet">
                        C'est ici que vous trouverez les meilleurs composants pour votre configuration !
                    </p>
                </div>
            </section>

            <div className="container">
                <div className="row justify-content-center mb-4">
                    <div className="col-md-8">
                        <div className="input-group mt-4 shadow-sm border rounded-pill">
                            <input
                                type="text"
                                className="form-control rounded-pill border-0"
                                placeholder="Rechercher par nom"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button className="btn btn-outline-primary rounded-pill" type="button">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mb-4">
                    <div className="col-md-3">
                        <select
                            className="form-select"
                            value={priceFilter}
                            onChange={handlePriceChange}
                        >
                            <option value="">Filtrer par prix</option>
                            <option value="low-high">Prix: croissant</option>
                            <option value="high-low">Prix: décroissant</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <select
                            className="form-select"
                            value={categoryFilter}
                            onChange={handleCategoryChange}
                        >
                            <option value="">Filtrer par catégorie</option>
                            <option value="Carte Mère">Carte Mère</option>
                            <option value="Carte Graphique">Carte Graphique</option>
                            <option value="SSD">SSD</option>
                            <option value="Boîtier">Boîtier</option>
                            <option value="Alimentation">Alimentation</option>
                            <option value="Processeur">Processeur</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <select
                            className="form-select"
                            value={brandFilter}
                            onChange={handleBrandChange}
                        >
                            <option value="">Filtrer par marque</option>
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
                </div>

                <hr/>

                <div className="row">
                    {products.length === 0 ? (
                        <div className="col-12 text-center">Aucun produit trouvé.</div>
                    ) : (
                        products.map((product) => (
                            <div className="col-md-4 mb-5" data-aos="fade-up" key={product.id}>
                                <div className="card bg-primary text-white text-center">
                                    <img
                                        src={`http://localhost:8080/${product.imageUrl}`}
                                        alt={product.name}
                                        className="card-img-top"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <hr/>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text">
                                            <strong>Prix : </strong>{product.price} €
                                        </p>
                                        <div className="d-flex justify-content-between w-100">
                                            <Link to={`/products/${product.id}`} className="btn btn-warning">
                                                Voir le produit
                                            </Link>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => handleAddToCart(product.id, product.price, 1)}
                                            >
                                                Ajouter au panier
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopView;
