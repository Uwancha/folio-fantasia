import React from "react";
import "../styles/about.scss";

import reactLogo from "../assets/react.svg"
import jsIcon from "../assets/javascript-2189147_640.png";
import htmlIcon from "../assets/html5-3384014_640.png";
import cssIcon from "../assets/logo-2582747_640.png";

const About: React.FC = () => {

    return (
        <section>
            <h1>A Little Story of Mine</h1>

            <p>
                My journey into technology began with a spark of curiosity around cybersecurity. 
                In 2020, I started researching the mysterious world of ethical hacking in my free time,
                intrigued by the idea of finding vulnerabilities to help make systems more secure.
            </p>

            <p>
                As I learned more, I discovered that hacking skills are nothing without a strong foundation in programming.
                That's when I decided to take my interests to the next level and learn to code. At first it was a challenge,
                but with persistence and plenty of online tutorials, I was soon able to grasp the basics of languages like Python and JavaScript.
            </p>

            <p>
                By late 2021, I was hooked. I wanted to take my new skills and use them to create things, not just break them.
                That's when I began teaching myself web development with a focus on building responsive, user-friendly interfaces.
                As someone who appreciates clean design and intuitive user experiences, I was passionate about learning the frontend skills needed to craft digital products people would enjoy using.
            </p>

            <p>
                It's been an exciting journey so far, but I know there's still so much more to discover.
                These days you'll find me constantly challenging myself to learn new technologies, problem-solve in creative ways, 
                and apply design-thinking principles to every project. My goal is to eventually turn my hobby into a career where I can use my passion for code and
                UX/UI to solve real problems and make a positive impact. The adventure continues!
            </p> 

            <div>
                <h2>Skills and Tools</h2>
                <div className="skills-icons">
                    <img src={htmlIcon} alt="html icon" />
                    <img src={cssIcon} alt="css icon" />
                    <img src={jsIcon} alt="javascript icon" />
                    <img src={reactLogo} alt="react logo" />
                </div>
            </div>


        
            
            <p>I am currently looking for new frontend development opportunities and collaborations. If you have a project that could use my skills, or just want to say hello, feel free to contact me.</p> 
            <p>You can find me on <a href="https://github.com/Uwancha">GitHub</a> or send me an email at uwancha@email.com.</p>
        </section>
    )
}

export default About;