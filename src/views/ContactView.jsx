import { useEffect } from "react";
import ApiBackend from "../api/ApiBackend.js";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    email: Yup.string().email('Email invalide').required('L\'email est obligatoire'),
    object: Yup.string().required('L\'objet est obligatoire'),
    message: Yup.string().min(10, 'Le message doit comporter au moins 10 caractères').required('Le message est obligatoire'),
});

export const ContactView = () => {

    const handleSubmit = (values) => {
        ApiBackend.post("/contact", values)
            .then((response) => {
                console.log('Message envoyé avec succès:', response);
                alert("Votre message a été envoyé !");
            })
            .catch((error) => {
                console.error("Erreur lors de l'envoi du message:", error);
                alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
            });
    };

    return (
        <div className="contact-page">
            <section className="hero-section text-center py-5"
                     style={{
                         minHeight: '600px',
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'center'
                     }}>
                <div className="container">
                    <h1 className="mt-5">Contactez-nous</h1>
                    <hr/>
                    <p className="lead">
                        Une question ? une demande ? Remplissez ce petit formulaire et notre équipe vous répondra
                        dans les plus brefs délais.
                    </p>
                </div>
            </section>

            <section className="debut-section py-5" data-aos="fade-up">
                <div className="container bg-primary text-light rounded p-4 d-flex flex-column align-items-center">
                    <h2 className="text-center text-warning pb-4">Formulaire de contact</h2>
                    <Formik
                        initialValues={{email: '', object: '', message: ''}}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <Field type="email" id="email" name="email" className="form-control"/>
                                        <ErrorMessage name="email" component="div" className="error"/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="object">Objet:</label>
                                        <Field type="text" id="object" name="object" className="form-control"/>
                                        <ErrorMessage name="object" component="div" className="error"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <Field as="textarea" id="message" name="message" className="form-control"/>
                                <ErrorMessage name="message" component="div" className="error"/>
                            </div>

                            <div>
                                <button type="submit" className="btn btn-warning mt-3">Envoyer</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </section>

        </div>
    );
};
