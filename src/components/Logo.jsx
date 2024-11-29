import {Link} from "react-router-dom";
import React from "react";
import '../css/logo.css';


const Logo = () => {
    return (

    <div className="logo-container">
        <div className="logo-icon">
            <div className="icon"></div>
            <div className="icon-base"></div>
        </div>
        <div className="logo-text">
            <span>Compo</span><span className="tower">Tower</span>
        </div>
    </div>


);
};

export default Logo;