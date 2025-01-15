import axios from "axios";
import store from "../store/Store.js";

const URL_API = "http://localhost:8080"

const ApiBackend = axios.create({
    baseURL : URL_API
})

ApiBackend.interceptors.request.use(
    request => {
        const token = store.getState()?.auth?.token;
        if (token) {

            request.headers.Authorization = "Bearer "+token;
        }


        return request;
    }
)
export default ApiBackend;