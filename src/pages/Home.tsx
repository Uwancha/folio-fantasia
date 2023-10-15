import React from "react";
import { Link } from "react-router-dom";

import "../styles/home.scss"
import image from "../assets/1666710204004.jpeg"

const Home: React.FC = () => {

    return (
        <div className="home">
            <img src={image} alt="sitota alemu" />
            <div className="texts">
                <h4>Hi there!</h4>
                <h3>I'm Sitota Alemu</h3>
                <h3>
                    A frontend developer based in Addis Ababa, Ethiopia. 
                </h3>
                <h3>
                    I build interactive and responsive user interfaces.
                </h3>
               
                <Link to="/about" className="link">
                        More About ME
                </Link>
            </div>
        </div>
    )
}

export default Home;