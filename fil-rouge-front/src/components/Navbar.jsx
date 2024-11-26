import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

const Nav = () => {
    return (
        <nav className="nav-bar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Accueil</Link>
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
            </ul>
        </nav>
    );
};

export default Nav;
