import {useEffect} from "react";
import ApiBackend from "../api/ApiBackend.js";
import React from "react";


export const HomeView = () => {


    useEffect(() => {
        ApiBackend.get("/hello")
            .then((response) => {
                console.log(response)
            })
    }, []);
    return (

        <h1 className={"text-success"}>
            Homeview
        </h1>
    )
}
