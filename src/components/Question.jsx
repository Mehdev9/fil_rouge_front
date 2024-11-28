import {Link} from "react-router-dom";
import React from "react";


const Question = () => {
    return (
<section className="contact-section text-center py-5">
    <div className="container">
        <h2>Vous avez des questions ?</h2>
        <p>Nous sommes là pour vous aider ! N'hésitez pas à nous contacter pour toute demande ou besoin de
            conseils.</p>
        <Link to="/contact" className="btn btn-warning">Contactez-nous</Link>
    </div>
</section>
    );
};

export default Question;