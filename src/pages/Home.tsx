import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

import "../styles/home.scss"
import image from "../assets/developer-3461405_640.png"

const Home: React.FC = () => {
    const { theme } = useContext(ThemeContext)
    console.log(theme)
    return (
        <div className={`home${theme}`}>
            <img src={image} alt="programmer icon" />
            <div className="texts">
                <h4 className={`h4${theme}`}>Hi there!</h4>
                <h3>I'm Sitota Alemu</h3>
                <h3>
                    A frontend developer based in Addis Ababa, Ethiopia. 
                </h3>
                <h3>
                    I build interactive and responsive user interfaces.
                </h3>
               
                <Link to="/about" className={`link${theme}`}>
                    More About ME
                </Link>
            </div>
        </div>
    )
}

export default Home;