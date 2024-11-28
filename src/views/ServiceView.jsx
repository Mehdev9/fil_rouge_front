import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="services-page">
            <section className="hero-section text-center py-5">
                <div className="container">
                    <h1 className="mt-5">Nos Services</h1>
                    <p className="lead">Découvrez nos solutions et produits pour améliorer votre expérience
                        informatique.</p>
                    <hr/>
                </div>
            </section>

            <section className="product-offer-section py-5">
                <div className="container bg-primary text-light rounded p-4">
                    <h2 className="text-center text-warning pb-4">Nos Composants PC</h2>
                    <p className="text-center">
                        Nous offrons une large sélection de composants PC de qualité, des cartes mères aux cartes
                        graphiques, des processeurs aux systèmes de refroidissement.
                    </p>
                    <div className="row mt-5 justify-content-center">
                        <div className="col-md-4">
                            <div className="service-item">
                                <div className="card bg-muted text-warning">
                                    <div className="card-body">
                                        <h3 className="card-title">Cartes Mères</h3>
                                        <p className="card-text text-muted">Des cartes mères fiables et performantes, compatibles
                                            avec toutes les configurations modernes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <div className="card bg-white text-warning">
                                    <div className="card-body">
                                        <h3 className="card-title">Cartes Graphiques</h3>
                                        <p className="card-text text-muted">Boostez vos performances graphiques avec nos cartes
                                            graphiques haut de gamme, idéales pour le gaming et la création de
                                            contenu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <div className="card bg-white text-warning">
                                    <div className="card-body">
                                        <h3 className="card-title">Processeurs</h3>
                                        <p className="card-text text-muted">Choisissez parmi une sélection des meilleurs
                                            processeurs pour garantir la puissance de votre machine.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="custom-pc-section py-5 text-light">
                <div className="container bg-primary text-warning rounded p-4 d-flex flex-column align-items-center">
                    <h2 className="text-center pb-4">Composants de Haute Qualité</h2>
                    <p className="text-center text-light">
                        Tous nos composants sont soigneusement sélectionnés pour garantir une performance optimale et
                        une compatibilité parfaite avec vos besoins informatiques.
                    </p>
                    <Link to="/shop" className="btn btn-warning">Voir tous les produits</Link>
                </div>
            </section>

        </div>
    );
};

export default Services;
