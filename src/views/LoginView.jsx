import React from 'react';
import {LoginForm} from "../components/LoginForm.jsx";
export const LoginView = () => {
    return (
        <div className="home-page">
            <section className="hero-section text-center py-5"
                     style={{minHeight: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div className="container">
                    <h1 className="mt-5">Connexion</h1>
                    <hr/>
                    <p className="lead">
                        Accédez à votre profil et achetez en toute simplicité en vous connectant à votre compte.
                    </p>
                </div>
            </section>

            <div>
                <LoginForm/>
            </div>
        </div>
    )
}
