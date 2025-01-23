import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';
import Logo from './Logo.jsx';

const Nav = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

    return (
        <nav className="nav-bar bg-primary text-light">
            <ul className="nav-list">
                <li className="nav-logo">
                    <Logo />
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Accueil</Link>
                </li>
                <li className="nav-item">
                    <Link to="/shop" className="nav-link">Produits</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">A propos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/services" className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Compte
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {isLoggedIn ? (
                            <>
                                <li>
                                    <Link to="/account" className="dropdown-item">Mon compte</Link>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={handleLogout}>Déconnexion</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login" className="dropdown-item">Connexion</Link>
                                </li>
                                <li>
                                    <Link to="/register" className="dropdown-item">Inscription</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
