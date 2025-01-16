import {useEffect, useState} from "react";
import ApiBackend from "../api/ApiBackend.js";
import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

export const AccountView = () => {

    const [myAccount, setMyAccount] = useState({});
    const token = useSelector(store => store.auth.token)

    useEffect(() => {
        ApiBackend.get("/account")
            .then(response => {
                setMyAccount(response.data);
            })
    }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

    return (
        <div className="account-page">
            <section className="hero-section text-center py-5"
                     style={{minHeight: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div className="container">
                    <h1 className="mt-5">Bienvenue sur votre profil</h1>
                    <hr/>
                    <p className="lead">
                        Ici, vous pouvez consulter vos informations, les modifier, ainsi que consulter votre panier ou vos précédents achats.                    </p>
                </div>
            </section>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Mon Compte</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-4" data-aos="fade-right">
                            <div className="card-header bg-primary text-white text-center">
                                <h4>Informations personnelles</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <strong>Nom :</strong>
                                    </div>
                                    <div className="col-6">
                                        <span>{myAccount.firstName} {myAccount.lastName}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <strong>Email :</strong>
                                    </div>
                                    <div className="col-6">
                                        <span>{myAccount.email}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <strong>Nom d'utilisateur :</strong>
                                    </div>
                                    <div className="col-6">
                                        <span>{myAccount.username}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <strong>Date de naissance :</strong>
                                    </div>
                                    <div className="col-6">
                                        <span>{myAccount.birthday}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card mb-4" data-aos="fade-left">
                            <div className="card-header bg-primary text-white text-center">
                                <h4>Paramètres du compte</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <button className="btn btn-warning w-100">Modifier mes informations</button>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12">
                                        <button className="btn btn-danger w-100" onClick={handleLogout}>Se déconnecter</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            );

            }
