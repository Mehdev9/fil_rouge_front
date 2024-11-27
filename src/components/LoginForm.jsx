import {Field, Form, Formik} from "formik";
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
                    navigate("/account");
                }
            })
            .catch((error) => {
                if (error.status === 403) {

                    setError(true);
                }
            })
    }
    return (
        <Formik initialValues={{
            username: "",
            password: "",
        }}
                onSubmit={submit}
        >

            <Form>
                <Field name="username" placeholder="Nom d'utilisateur"/>
                <Field name="password" placeholder="Mot de passe"/>
                <button type="submit">Valider</button>
                <p>{error && "Mot de passe incorrect"}</p>
            </Form>
        </Formik>
    )
}