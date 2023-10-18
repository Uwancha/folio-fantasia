import React, { useContext } from "react";

import "../styles/projects.scss"

import shoppingSiteImage from "../assets/shoppingCart.png"
import memoryCardImage from "../assets/cardgame.png"
import weatherAppImage from "../assets/weather-app.png"
import cvMakerSiteImage from "../assets/cv-maker.png"
import fentaleRestaurantImage from "../assets/fentale-restaurant.png"
import { ThemeContext } from "../App";


interface  Project {
    id: number;
    image: string;
    summary: string;
    title: string;
    liveLink: string,
    githubLink: string
  }
  
const projects: Project[] = [
    {
      id: 1,
      title: 'A shopping cart, an e-commerce site',
      image: shoppingSiteImage,
      summary: 'A full-featured e-commerce application built using React, Context API and other modern technologies. Users can browse products, view details, add to cart and checkout.',
      liveLink: 'https://uwancha-ecommerce-site.netlify.app',
      githubLink: 'https://github.com/Uwancha/shopping-cart'
    },
    {
      id: 2,
      title: 'Memory card game',
      image: memoryCardImage,
      summary: `This project was built while learning full stack web development through The Odin Project's curriculum.`,
      liveLink: 'https://cardgame-uwancha.netlify.app',
      githubLink: 'https://github.com/Uwancha/memory-card'
    },
    {
      id: 3,
      title: 'Weather app',
      image: weatherAppImage,
      summary: 'This is a weather application built using HTML, CSS, JavaScript, and webpack to bundle the files. The app fetches weather data from the WeatherAPI to provide real-time weather information for different locations.',
      liveLink: 'https://uwancha.github.io/weather-app',
      githubLink: 'https://github.com/Uwancha/weather-app'
    },
    {
        id: 4,
        title: 'fentale restaurant',
        image: fentaleRestaurantImage,
        summary: 'This is a simple restaurant page built with HTML, CSS, and JavaScript, and bundled using webpack. The page is rendered dynamically by using JavaScript to manipulate DOM elements.',
        liveLink: 'https://uwancha.github.io/fentale-restaurant',
        githubLink: 'https://github.com/Uwancha/fentale-restaurant'
      },
      {
        id: 5,
        title: 'Cv maker',
        image: cvMakerSiteImage,
        summary: 'This project is a small CV application built using React. It allows users to enter their general information, educational experience, and practical experience. The application provides an intuitive interface for adding and editing the CV details, and it supports submitting the form and displaying the entered information.',
        liveLink: 'https://main--uwancha-cvmaker.netlify.app/',
        githubLink: 'https://github.com/Uwancha/cv-maker'
      },
];

const Projects: React.FC = () => {
  const { theme } = useContext(ThemeContext)

    return (
        
            <article className={`article${theme}`}>
                <h3>Some of my works</h3>
                {projects.map((project) => (
                    <section key={project.id} className={`section${theme}`}>
                            <img src={project.image} alt={project.title} />
                            <div className="div">
                                <p>{project.summary}</p>
                                <div className="links">
                                    <a href={project.liveLink}>Live preview</a>
                                    <a href={project.githubLink}>Source code</a>
                                </div>
                            </div>
                    </section>
                ))}
            </article>
        
    )
}

export default Projects;