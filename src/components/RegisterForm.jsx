import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import apiBackend from "../api/ApiBackend.js";
import {useNavigate} from "react-router-dom";
import error from "eslint-plugin-react/lib/util/error.js";

export const RegisterForm = () => {
    const navigate = useNavigate();

    const validationSchema = yup.object({
        username: yup.string().required("Champs requis"),
        email: yup.string().email("mail requis").required("Champs requis"),
        password: yup.string().required("Champs requis"),
        repeatPassword: yup.string().oneOf([yup.ref("password")], "Mots de passe differents")


    })

    const submit = (values) => {
        apiBackend.post("/register", values)
            .then((response) => {
                if (response.status === 201)
                    navigate("/login")
            })
    }
    return (
        <section className="debut-section py-5" data-aos="fade-up">
            <div className="container bg-primary text-light rounded p-4 d-flex flex-column align-items-center">
                <h2 className="text-center text-warning pb-4">Formulaire d'inscription</h2>
                <Formik
                    initialValues={{
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
                                    <label htmlFor="username">Nom d'utilisateur:</label>
                                    <Field
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Nom d'utilisateur"
                                        className="form-control"
                                    />
                                    <ErrorMessage name="username" component="div" className="text-danger mt-2"/>
                                </div>
                            </div>

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
                                    <ErrorMessage name="email" component="div" className="text-danger mt-2"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
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
                                    <ErrorMessage name="password" component="div" className="text-danger mt-2"/>
                                </div>
                            </div>

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
                                    <ErrorMessage name="repeatPassword" component="div" className="text-danger mt-2"/>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-warning mt-3">Valider</button>
                        </div>

                        {error && (
                            <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
                                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                <span>Le mot de passe ne correspond pas à la confirmation.</span>
                            </div>
                        )}
                    </Form>
                </Formik>
            </div>
        </section>

    )
}