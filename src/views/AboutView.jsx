import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-page">
            <section className="hero-section text-center py-5">
                <div className="container">
                    <h1 className="mt-5">À propos de CompoTower</h1>
                    <p className="lead">Votre boutique en ligne pour des composants PC de qualité à des prix
                        compétitifs.</p>
                    <hr/>
                </div>

            </section>

            <section className="mission-section py-5">
                <div className="container bg-primary text-light rounded p-4">
                    <h2 className="text-center text-warning pb-4">Notre Mission</h2>
                    <p>
                        Chez <strong>CompoTower</strong>, notre mission est de fournir à nos clients les meilleurs
                        composants PC disponibles sur le marché.
                        Nous croyons que la performance, la fiabilité et l'innovation sont les clés d'un PC performant,
                        qu'il s'agisse de jeux vidéo, de création de contenu, ou de l'informatique professionnelle.
                    </p>
                    <p>
                        Depuis notre lancement en 2020, nous nous efforçons d'offrir des produits de qualité à des prix
                        compétitifs, avec un service client exceptionnel et des conseils d'experts pour chaque projet.
                    </p>
                </div>
            </section>

            <section className="our-values-section py-5 text-light">
                <div className="container bg-primary text-warning rounded pb-5 p-4">
                    <h2 className="text-center">Nos Valeurs</h2>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="card bg-muted">
                                <div className="card-body text-warning">
                                    <h3 className="card-title">Qualité</h3>
                                    <p className="card-text text-muted">Nous sélectionnons rigoureusement chaque produit pour vous
                                        garantir leur fiabilité ainsi que leur performance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-white">
                                <div className="card-body text-warning">
                                    <h3 className="card-title">Innovation</h3>
                                    <p className="card-text text-muted">Nous restons à l'affût des dernières tendances et des
                                        innovations pour vous offrir les meilleures technologies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-white">
                                <div className="card-body text-warning">
                                    <h3 className="card-title">Service Client</h3>
                                    <p className="card-text text-muted">Notre équipe est là pour vous aider à chaque étape de votre
                                        projet, du conseil à l'assemblage de votre PC personnalisé.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section bg-primary text-light">
                    <div className="team-section py-5">
                        <div className="container text-warning">
                            <h2 className="text-center pb-5">Rencontrez notre équipe</h2>
                            <div className="row justify-content-center">
                                <div className="col-md-4 text-center">
                                    <div className="team-member">
                                        <img src="https://via.placeholder.com/150" alt="Equipe"
                                             className="img-fluid rounded-circle mb-3"/>
                                        <h4>Mehdi Belkateb</h4>
                                        <p>Fondateur et CEO</p>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="team-member">
                                        <img src="https://via.placeholder.com/150" alt="Equipe"
                                             className="img-fluid rounded-circle mb-3"/>
                                        <h4>Marie Lefevre</h4>
                                        <p>Responsable Service Client</p>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="team-member">
                                        <img src="https://via.placeholder.com/150" alt="Equipe"
                                             className="img-fluid rounded-circle mb-3"/>
                                        <h4>Paul Martin</h4>
                                        <p>Expert en Produits et Ingénieur</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                </div>
            </section>
        </div>
    );
};

export default About;
