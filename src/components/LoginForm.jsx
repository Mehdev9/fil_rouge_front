import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import apiBackend from "../api/ApiBackend.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {login} from "../store/authSlice.js";
import {useDispatch} from "react-redux";
// import {useAuth} from "../hooks/UseAuth.jsx";

export const LoginForm = () => {


    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const {login} = useAuth();


    const submit = (values) => {

        apiBackend.post("/authenticate", values)
            .then((response) => {
                if (response.status === 200) {
                    setError(false);
                    const token = response.data;
                    dispatch(login(token));
                    navigate("/");
                }
            })
            .catch((error) => {
                if (error.status === 403) {

                    setError(true);
                }
            })
    }
    return (
        <section className="debut-section py-5" data-aos="fade-up">
            <div className="container bg-primary text-light rounded p-4 d-flex flex-column align-items-center">
                <h2 className="text-center text-warning pb-4">Formulaire de connexion</h2>
                <Formik
                    initialValues={{username: '', password: ''}}
                    onSubmit={submit}
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
                                    <ErrorMessage name="username" component="div" className="error"/>
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
                                    <ErrorMessage name="password" component="div" className="error"/>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-warning mt-3">Valider</button>
                        </div>

                        {error && (
                            <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
                                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                <span>Mot de passe incorrect</span>
                            </div>
                        )}

                    </Form>
                </Formik>
            </div>
        </section>

    )
}