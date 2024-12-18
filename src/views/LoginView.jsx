import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ApiBackend from "../api/ApiBackend.js";
import { login } from "../store/authSlice.js";

const validationSchema = Yup.object({
    username: Yup.string().required("Le nom d'utilisateur est requis"),
    password: Yup.string().required("Le mot de passe est requis"),
});

export const LoginView = () => {
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        ApiBackend.get("/login")
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("Erreur de connexion:", error);
            });
    }, []);


    const submit = (values) => {
        ApiBackend.post("/authenticate", values)
            .then((response) => {
                if (response.status === 200) {
                    setError(false);
                    const token = response.data;
                    dispatch(login(token));
                    navigate("/");
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 403) {
                    setError(true);
                }
            });
    };

    return (
        <Formik
            initialValues={{
                username: "",
                password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={submit}
        >
            {({ touched, errors }) => (
                <Form>

                    <div className="form-group">
                        <label htmlFor="username">Nom d'utilisateur</label>
                        <Field
                            name="username"
                            id="username"
                            placeholder="Nom d'utilisateur"
                            className={`form-control ${touched.username && errors.username ? "is-invalid" : ""}`}
                        />
                        {touched.username && errors.username && (
                            <div className="invalid-feedback">{errors.username}</div>
                        )}
                    </div>


                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <Field
                            name="password"
                            id="password"
                            type="password"
                            placeholder="Mot de passe"
                            className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`}
                        />
                        {touched.password && errors.password && (
                            <div className="invalid-feedback">{errors.password}</div>
                        )}
                    </div>


                    <div className="form-group">
                        <button type="submit" className="btn btn-warning mt-3">
                            Valider
                        </button>
                    </div>


                    {error && (
                        <div className="alert alert-danger mt-3">
                            Mot de passe incorrect
                        </div>
                    )}
                </Form>
            )}
        </Formik>
    );
};
