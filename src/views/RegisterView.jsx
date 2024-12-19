import React from 'react';
import {RegisterForm} from "../components/RegisterForm.jsx";
import {LoginForm} from "../components/LoginForm.jsx";

export const RegisterView = () => {
    return (
        <div className="register-page">
            <section className="hero-section text-center py-5"
                     style={{minHeight: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div className="container">
                    <h1 className="mt-5">Inscription</h1>
                    <hr/>
                    <p className="lead">
                        Créez votre compte en toute simplicité et accédez à votre profil pour acheter en toute sérénité.
                    </p>
                </div>
            </section>

            <div>
                <RegisterForm/>
            </div>
        </div>
    )
}
