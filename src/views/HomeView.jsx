import {useEffect} from "react";
import ApiBackend from "../api/ApiBackend.js";
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "../components/Navbar.jsx";

export const HomeView = () => {


    useEffect(() => {
        ApiBackend.get("/hello")
            .then((response) => {
                console.log(response)
            })
    }, []);
    return (

        <h1>
            Homeview
        </h1>
    )
}
