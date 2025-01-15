// import React , {useEffect, useState} from "react";
// import ApiBackend from "../api/ApiBackend.js";
// import {useSelector} from "react-redux";
// // import {useAuth} from "../hooks/UseAuth.jsx";
//
// export const PrivateView = () => {
//
//     const [myAccount, setMyAccount] = useState({});
//     const token = useSelector(store => store.auth.token)
//
//
//     useEffect(() => {
//
//
//         ApiBackend.get(
//             "/accounts/me",
//             {
//                 headers: {
//                     Authorization: "Bearer " + token,
//                 }
//             }
//         )
//             .then(response => {
//                 setMyAccount(response.data);
//             })
//     }, []);
//     return (
//         <div>
//             <h1>
//                 PrivateView
//             </h1>
//             <div>
//                 <span>{myAccount.username}</span>
//             </div>
//         </div>
//     )
// }
