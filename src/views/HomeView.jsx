import { useEffect } from "react";
import ApiBackend from "../api/ApiBackend.js";
import React from "react";

export const HomeView = () => {

    useEffect(() => {
        ApiBackend.get("/hello")
            .then((response) => {
                console.log(response);
            });
    }, []);

    return (
        <div className="about-page">
            <section className="hero-section text-center py-5">
                <div className="container">
                    <h1 className="mt-5">Bienvenue sur CompoTower !</h1>
                    <p className="lead">
                        Découvrez les meilleurs composants PC, conçus pour offrir performance, fiabilité et innovation à
                        un prix compétitif.
                        Que vous soyez un passionné de jeux vidéo, un créateur de contenu ou un professionnel, nous
                        avons ce qu'il vous faut.
                    </p>
                    <hr />
                </div>
            </section>
        </div>
    );
};
