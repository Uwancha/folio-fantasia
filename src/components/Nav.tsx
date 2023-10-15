import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss"

const Nav: React.FC = () => {

    return (
        <div className="header">
            <h2>Sito</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    )
}

export default Nav;