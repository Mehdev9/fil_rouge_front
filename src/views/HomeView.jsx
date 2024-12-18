import { useEffect } from "react";
import ApiBackend from "../api/ApiBackend.js";
import React from "react";
import {Link} from "react-router-dom";

export const HomeView = () => {

    useEffect(() => {
        ApiBackend.get("/hello")
            .then((response) => {
                console.log(response);
            });
    }, []);

    return (
        <div className="home-page">
            <section className="hero-section text-center py-5" style={{ minHeight: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="container">
                    <h1 className="mt-5">Bienvenue sur CompoTower !</h1>
                    <hr/>
                    <p className="lead">
                        Découvrez les meilleurs composants PC, conçus pour offrir performance, fiabilité et innovation à
                        un prix compétitif.
                        Que vous soyez un passionné de jeux vidéo, un créateur de contenu ou un professionnel, nous
                        avons ce qu'il vous faut.
                    </p>
                </div>
            </section>

            <section className="debut-section py-5" data-aos="fade-up">
                <div className="container bg-primary text-light rounded p-4 d-flex flex-column align-items-center">
                    <h2 className="text-center text-warning pb-4">Commencez vos achats</h2>
                    <p className="text-center">
                        Vous pouvez dès à présent commencer à explorer notre catalogue et trouver les produits qui vous
                        correspondent.
                    </p>
                    <Link to="/shop" className="btn btn-warning">Voir tous les produits</Link>

                </div>
            </section>

            <section className="connexion-section py-5" data-aos="fade-up">
                <div className="container bg-primary text-light rounded p-4 d-flex flex-column align-items-center">
                    <h2 className="text-center text-warning pb-4">Connectez-vous</h2>
                    <p className="text-center">
                        Gagnez du temps et connectez vous à votre compte pour commencez vos achats
                    </p>
                    <Link to="/login" className="btn btn-warning mb-4">Connexion</Link>

                    <h2 className="text-center text-warning pb-2">Devenez membre</h2>
                    <p className="text-center">
                        Si vous n'avez pas encore de compte, alors rejoignez-nous !
                    </p>
                    <p className="text-center">
                        Créez votre profil pour pouvoir commencer vos achats avec nous et pouvoir bénéficiez de nos
                        offres !
                    </p>
                    <Link to="/register" className="btn btn-warning">Inscrivez-vous</Link>
                </div>
            </section>


            <section className="news-section py-5">
                <div className="container-fluid bg-primary text-light rounded">

                    <div className="row">
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center text-center">
                            <h3 className="text-warning"> Les derniers boitiers Lian Li</h3>
                            <p className="text-center text-light">
                                Découvrez les toutes dernières nouveautés Lian Li dans la catégorie boîtiers. Leurs
                                nouveaux modèles offrent un flux d'air optimal, des finitions soignées, et un design
                                ultra-moderne qui allie élégance et fonctionnalité !
                            </p>
                        </div>
                    <div className="col-md-6">
                        <img src="/src/img/lianli.jpg" alt="lian li"
                             className="img-fluid lian-img" style={{ minHeight: '100%', minWidth: '100%' }} data-aos="fade-left"/>
                    </div>
                    </div>



                </div>
            </section>

            <section className="news-section py-5">
                <div className="container-fluid bg-primary text-light rounded">

                    <div className="row">
                        <div className="col-md-6">
                            <img src="/src/img/msi.webp" alt="lian li"
                                 className="img-fluid lian-img" style={{ minHeight: '100%' }} data-aos="fade-right"/>
                        </div>

                        <div className="col-md-6 text-center d-flex flex-column justify-content-center text-center">
                            <h3 className="text-warning">Les dernières innovations MSI</h3>
                            <p className="text-center text-light">
                                Découvrez les toutes dernières innovations de MSI dans le domaine des composants PC.
                                Leur nouvelle gamme de cartes mères et cartes graphiques offre des performances
                                exceptionnelles pour les gamers et créateurs de contenu. Avec des technologies avancées
                                comme le ray tracing et des refroidissements améliorés, MSI continue de repousser les
                                limites de la puissance et de l'efficacité tout en offrant des designs modernes et
                                élégants. Ne manquez pas ces produits révolutionnaires pour améliorer votre expérience
                                informatique !
                            </p>

                        </div>
                    </div>

                </div>
            </section>

            <section className="news-section py-5">
                <div className="container-fluid bg-primary text-light rounded">

                    <div className="row">
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center text-center">
                            <h3 className="text-warning">Les nouvelles configurations Alienware</h3>
                            <p className="text-center text-light">
                                Alienware dévoile ses dernières configurations de PC de gaming ultra-performants. Avec
                                des processeurs de dernière génération et des cartes graphiques NVIDIA RTX, ces machines
                                sont conçues pour offrir une expérience de jeu immersive et fluide, même pour les titres
                                les plus gourmands. Leur design emblématique, alliant puissance et esthétique futuriste,
                                ne manquera pas de vous impressionner. Découvrez des performances sans compromis et un
                                refroidissement de pointe pour des sessions de jeu ininterrompues !
                            </p>

                        </div>
                    <div className="col-md-6">
                        <img src="/src/img/alien.jpg" alt="lian li"
                             className="img-fluid lian-img" style={{ minHeight: '100%' }} data-aos="fade-left"/>
                    </div>
                    </div>



                </div>
            </section>

            <section className="news-section py-5">
            <div className="container-fluid bg-primary text-light rounded">

                    <div className="row">
                        <div className="col-md-6">
                            <img src="/src/img/amdnvi.jpg" alt="lian li"
                                 className="img-fluid lian-img" style={{ minHeight: '100%' }} data-aos="fade-right"/>
                        </div>

                        <div className="col-md-6 text-center d-flex flex-column justify-content-center text-center">
                            <h3 className="text-warning">Les dernières avancées d'AMD et NVIDIA</h3>
                            <p className="text-center text-light">
                                AMD et NVIDIA continuent de redéfinir les standards de performance avec leurs dernières
                                technologies. AMD, avec ses processeurs Ryzen de nouvelle génération, offre des
                                performances époustouflantes pour le gaming et la création de contenu, tout en
                                garantissant une consommation énergétique réduite. De son côté, NVIDIA repousse encore
                                les limites de la réalité virtuelle et du ray tracing avec ses cartes graphiques RTX 40
                                Series, permettant des graphismes ultra-réalistes et une fluidité incomparable.
                                Ensemble, ces géants de l'industrie offrent une expérience informatique inégalée, que
                                vous soyez un gamer ou un professionnel de la création !
                            </p>

                        </div>
                    </div>

                </div>
            </section>


        </div>
    );
};
