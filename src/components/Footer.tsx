import React from "react";

import "../styles/footer.scss";

import linkedIcon from "../assets/linkedin_145807.png";
import githubIcon from "../assets/github_733609.png";
import twitterIcon from "../assets/twitter_3670151.png";

const Footer: React.FC = () => {

    return (

        <footer>
            <div className="links">
                <a href="" className="github"><img src={githubIcon} alt="link to github" /></a>
                <a href=""><img src={linkedIcon} alt="link to linkedin" /></a>
                <a href=""><img src={twitterIcon} alt="link to twitter" /></a>
            </div>
            <p>&copy; 2023 designed and coded by Sitota Alemu</p>
        </footer>

    )
}

export default Footer;