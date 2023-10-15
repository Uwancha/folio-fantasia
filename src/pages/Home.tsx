import React from "react";
import { Link } from "react-router-dom";

import "../styles/home.scss"
import image from "../assets/1666710204004.jpeg"

const Home: React.FC = () => {

    return (
        <div className="home">
            <img src={image} alt="" />
            <div>
                <div className="greetings">
                    <h4>Hey there! I'm</h4>
                    <h1>Sitota Alemu</h1>
                </div>
                <div className="msg">
                    <p>
                        I'm a frontend developer based in Addis
                        Ababa, Ethiopia. I enjoy building interactive and responsive user interfaces.
                    </p>
                </div>

                <Link to="/about" className="link">More About ME</Link>
                
            </div>
        </div>
    )
}

export default Home;