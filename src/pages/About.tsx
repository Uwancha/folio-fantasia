import React, { useContext } from "react";
import "../styles/about.scss";
import { ThemeContext } from "../App";

const About: React.FC = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <section className={`about${theme}`}>
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
                   
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" />
                </div>
            </div>

            <p>I am currently looking for new frontend development opportunities and collaborations. If you have a project that could use my skills, or just want to say hello, feel free to contact me.</p> 
            <p>You can find me on <a href="https://github.com/Uwancha">GitHub</a> or send me an email at <span>uwancha@email.com</span>.</p>
        </section>
    )
}

export default About;