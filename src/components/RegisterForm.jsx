import React from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import apiBackend from "../api/ApiBackend.js";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
    const navigate = useNavigate();

    const validationSchema = yup.object({
        firstName: yup.string().required("Champs requis"),
        lastName: yup.string().required("Champs requis"),
        birthday: yup.date().required("Champs requis").nullable(),
        username: yup.string().required("Champs requis"),
        email: yup.string().email("Email invalide").required("Champs requis"),
        password: yup.string().required("Champs requis"),
        repeatPassword: yup.string().oneOf([yup.ref("password")], "Les mots de passe sont différents").required("Champs requis")
    });

    const submit = (values) => {
        apiBackend.post("/register", values)
            .then((response) => {
                if (response.status === 201)
                    navigate("/login");
            })
            .catch((error) => {
                console.error("Registration failed:", error);
            });
    };

    return (
        <section className="debut-section py-5" data-aos="fade-up">
            <div className="container bg-primary text-light rounded p-4 d-flex flex-column align-items-center">
                <h2 className="text-center text-warning pb-4">Formulaire d'inscription</h2>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        birthday: "",
                        username: "",
                        email: "",
                        password: "",
                        repeatPassword: ""
                    }}
                    onSubmit={submit}
                    validationSchema={validationSchema}
                >
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="firstName">Prénom:</label>
                                    <Field
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Prénom"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="firstName"
                                        component="div"
                                        className="alert alert-danger d-flex align-items-center mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="lastName">Nom:</label>
                                    <Field
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Nom"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="lastName"
                                        component="div"
                                        className="alert alert-danger d-flex align-items-center mt-2"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="birthday">Date de naissance:</label>
                                    <Field
                                        type="date"
                                        id="birthday"
                                        name="birthday"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="birthday"
                                        component="div"
                                        className="alert alert-danger d-flex align-items-center mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="username">Nom d'utilisateur:</label>
                                    <Field
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Nom d'utilisateur"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="username"
                                        component="div"
                                        className="alert alert-danger d-flex align-items-center mt-2"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="alert alert-danger d-flex align-items-center mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="password">Mot de passe:</label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Mot de passe"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="alert alert-danger d-flex align-items-center mt-2"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="repeatPassword">Confirmation de Mot de passe:</label>
                                    <Field
                                        type="password"
                                        id="repeatPassword"
                                        name="repeatPassword"
                                        placeholder="Confirmation de Mot de passe"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="repeatPassword"
                                        component="div"
                                        className="alert alert-danger d-flex align-items-center mt-2"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-warning mt-3">Valider</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </section>
    );
};
