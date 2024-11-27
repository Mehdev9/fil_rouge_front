import {useEffect} from "react";
import ApiBackend from "../api/ApiBackend.js";
import React from "react";


export const ContactView = () => {


    useEffect(() => {
        ApiBackend.get("/hello")
            .then((response) => {
                console.log(response)
            })
    }, []);
    return (

        <h1 className="text-warning text-center display-3 mt-5 mb-4 fw-bold">
            Page de contact
        </h1>

    )
}
