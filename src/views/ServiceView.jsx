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


            <section className="custom-pc-section py-5 text-light" data-aos="fade-up">
                <div className="container bg-primary text-warning rounded p-4 d-flex flex-column align-items-center">
                    <h2 className="text-center pb-4">Composants de Haute Qualité</h2>
                    <p className="text-center text-light">
                        Tous nos composants sont soigneusement sélectionnés pour garantir une performance optimale et
                        une compatibilité parfaite avec vos besoins informatiques.
                    </p>
                    <Link to="/shop" className="btn btn-warning">Voir tous les produits</Link>
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
                                <div className="card bg-muted text-warning mb-5" data-aos="flip-left">
                                    <div className="card-body">
                                        <h3 className="card-title">Cartes Mères</h3>
                                        <p className="card-text text-muted">Des cartes mères fiables et performantes,
                                            compatibles avec toutes les configurations modernes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-item">
                                <div className="card bg-white text-warning" data-aos="flip-down">
                                    <div className="card-body">
                                        <h3 className="card-title">Cartes Graphiques</h3>
                                        <p className="card-text text-muted">Boostez vos performances graphiques avec nos
                                            cartes graphiques haut de gamme, idéales pour le gaming et la création de
                                            contenu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-item">
                                <div className="card bg-white text-warning" data-aos="flip-right">
                                    <div className="card-body">
                                        <h3 className="card-title">Processeurs</h3>
                                        <p className="card-text text-muted">Choisissez parmi une sélection des meilleurs
                                            processeurs pour garantir la puissance de votre machine.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-item">
                                <div className="card bg-white text-warning" data-aos="flip-left">
                                    <div className="card-body">
                                        <h3 className="card-title">Boîtiers</h3>
                                        <p className="card-text text-muted">Des boîtiers robustes et modernes pour
                                            protéger vos composants tout en offrant une bonne circulation de l'air.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-item">
                                <div className="card bg-white text-warning" data-aos="flip-down" >
                                    <div className="card-body">
                                        <h3 className="card-title">SSD</h3>
                                        <p className="card-text text-muted">Améliorez la vitesse de votre système avec
                                            nos SSD haute performance, pour un démarrage ultra-rapide du système ou des
                                            programmes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-item">
                                <div className="card bg-white text-warning" data-aos="flip-right">
                                    <div className="card-body">
                                        <h3 className="card-title">Alimentations</h3>
                                        <p className="card-text text-muted">Des alimentations fiables et efficaces,
                                            conçues pour fournir une puissance suffisante et stable à votre système.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    );
};

export default Services;
