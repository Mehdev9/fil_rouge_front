import axios from "axios";

const URL_API = "http://localhost:8080"

const ApiBackend = axios.create({
    baseURL : URL_API
})

export default ApiBackend;