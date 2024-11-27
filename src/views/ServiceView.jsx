import React from 'react';
import { Link } from 'react-router-dom';
import '../css/services.css'; // Si vous avez des styles personnalisés pour cette page

const Services = () => {
    return (
        <div className="services-page">
            <section className="hero-section text-center text-light py-5" style={{ background: 'linear-gradient(to right, #333, #555)' }}>
                <div className="container">
                    <h1 className="display-4">Nos Services</h1>
                    <p className="lead">Découvrez nos solutions et produits pour améliorer votre expérience informatique.</p>
                    <Link to="/shop" className="btn btn-warning">Voir nos produits</Link>
                </div>
            </section>

            <section className="product-offer-section py-5">
                <div className="container">
                    <h2 className="text-center">Nos Composants PC</h2>
                    <p className="text-center">
                        Nous offrons une large sélection de composants PC de qualité, des cartes mères aux cartes graphiques, des processeurs aux systèmes de refroidissement.
                    </p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-item">
                                <h3>Cartes Mères</h3>
                                <p>Des cartes mères fiables et performantes, compatibles avec toutes les configurations modernes.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <h3>Cartes Graphiques</h3>
                                <p>Boostez vos performances graphiques avec nos cartes graphiques haut de gamme, idéales pour le gaming et la création de contenu.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <h3>Processeurs</h3>
                                <p>Choisissez parmi une sélection des meilleurs processeurs pour garantir la puissance de votre machine.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="custom-pc-section py-5" style={{ backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <h2 className="text-center">Composants de Haute Qualité</h2>
                    <p>
                        Tous nos composants sont soigneusement sélectionnés pour garantir une performance optimale et une compatibilité parfaite avec vos besoins informatiques.
                    </p>
                    <Link to="/shop" className="btn btn-warning">Voir tous les produits</Link>
                </div>
            </section>

            <section className="contact-section text-center py-5" style={{ backgroundColor: '#333', color: '#fff' }}>
                <div className="container">
                    <h2>Des Questions ?</h2>
                    <p>Nous sommes là pour vous aider à choisir les meilleurs composants pour votre configuration.</p>
                    <Link to="/contact" className="btn btn-light">Contactez-nous</Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
