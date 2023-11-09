import React, { useContext, } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import "../styles/nav.css"

import lightMode from "../assets/mode.png";
import darkMode from "../assets/night-mode.png"

const Nav: React.FC = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div className={`header${theme}`}>
            <h2>Sito</h2>
            <nav className={`nav${theme}`}>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
                <div onClick={toggleTheme} className="theme">
                    {theme === "dark" ? (<img src={lightMode} alt="light mode icon" className="themeIconDark" />) :  (<img src={darkMode} alt="dark mode icon" className="themeIconLight"/>) }
                </div>
            </nav>
        </div>
    )
}

export default Nav; 