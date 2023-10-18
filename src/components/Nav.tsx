import React, { useContext, } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import "../styles/nav.scss"

const Nav: React.FC = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div className={`header${theme}`}>
            <h2>Sito</h2>
            <nav className={`nav${theme}`}>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
                <div onClick={toggleTheme}>
                    {theme === "dark" ? (<span>light</span>) :  (<span>dark</span>) }
                </div>
            </nav>
        </div>
    )
}

export default Nav;