import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import apiBackend from "../api/ApiBackend.js";
import {useNavigate} from "react-router-dom";

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
                <Field name={"username"} placeholder={"Nom d'utilisateur"}/>
                <ErrorMessage name={"username"} component={"email"}/>

                <Field name={"email"} placeholder={"email"}/>
                <ErrorMessage name={"email"} component={"small"}/>

                <Field name={"password"} placeholder={"Mot de passe"}/>
                <ErrorMessage name={"password"} component={"small"}/>

                <Field name={"repeatPassword"} placeholder={"Confirmation de Mot de passe"}/>
                <ErrorMessage name={"repeatPassword"} component={"small"}/>

                <button type={"submit"}>Valider</button>

            </Form>
        </Formik>
    )
}