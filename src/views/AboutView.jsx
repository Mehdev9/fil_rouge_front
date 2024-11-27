import React from 'react';
import { Link } from 'react-router-dom';
import '../css/about.css'; // Si vous avez des styles personnalisés pour cette page

const About = () => {
    return (
        <div className="about-page">
            <section className="hero-section text-center text-light py-5" style={{ background: 'linear-gradient(to right, #333, #555)' }}>
                <div className="container">
                    <h1 className="display-4">À propos de CompoTower</h1>
                    <p className="lead">Votre boutique en ligne pour des composants PC de qualité à des prix compétitifs.</p>
                    <Link to="/contact" className="btn btn-warning">Contactez-nous</Link>
                </div>
            </section>

            <section className="mission-section py-5">
                <div className="container">
                    <h2 className="text-center">Notre Mission</h2>
                    <p>
                        Chez <strong>CompoTower</strong>, notre mission est de fournir à nos clients les meilleurs composants PC disponibles sur le marché.
                        Nous croyons que la performance, la fiabilité et l'innovation sont les clés d'un PC performant, qu'il s'agisse de jeux vidéo, de création de contenu, ou de l'informatique professionnelle.
                    </p>
                    <p>
                        Depuis notre lancement en 2020, nous nous efforçons d'offrir des produits de qualité à des prix compétitifs, avec un service client exceptionnel et des conseils d'experts pour chaque projet.
                    </p>
                </div>
            </section>

            <section className="our-values-section py-5" style={{ backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <h2 className="text-center">Nos Valeurs</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Qualité</h3>
                            <p>Nous sélectionnons rigoureusement chaque produit pour garantir sa fiabilité et sa performance.</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Innovation</h3>
                            <p>Nous restons à l'affût des dernières tendances et des innovations pour vous offrir les meilleures technologies.</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Service Client</h3>
                            <p>Notre équipe est là pour vous aider à chaque étape de votre projet, du conseil à l'assemblage de votre PC personnalisé.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section py-5">
                <div className="container">
                    <h2 className="text-center">Rencontrez notre équipe</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="team-member">
                                <img src="https://via.placeholder.com/150" alt="Equipe" className="img-fluid rounded-circle" />
                                <h4>Mehdi Belkateb</h4>
                                <p>Fondateur et CEO</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                <img src="https://via.placeholder.com/150" alt="Equipe" className="img-fluid rounded-circle" />
                                <h4>Marie Lefevre</h4>
                                <p>Responsable Service Client</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                <img src="https://via.placeholder.com/150" alt="Equipe" className="img-fluid rounded-circle" />
                                <h4>Paul Martin</h4>
                                <p>Expert en Produits et Ingénieur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section text-center py-5" style={{ backgroundColor: '#333', color: '#fff' }}>
                <div className="container">
                    <h2>Vous avez des questions ?</h2>
                    <p>Nous sommes là pour vous aider ! N'hésitez pas à nous contacter pour toute demande ou besoin de conseils.</p>
                    <Link to="/contact" className="btn btn-light">Contactez-nous</Link>
                </div>
            </section>
        </div>
    );
};

export default About;
