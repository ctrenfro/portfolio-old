import React from "react";
import "./Portfolio.css";
import ecommerce from "../../assets/ecommerce.png";
import gpt3 from "../../assets/gp3image.png";
import calculator from "../../assets/calculator.png";
import mern from "../../assets/Picture1.jpg";
import weatherapp from "../../assets/weatherApp.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: ecommerce,
      title: "Ecommerce with Sanity",
      github: "https://github.com/ctrenfro/ecommerce_sanity",
      demo: "https://ecommerce-sanity-r5ek846ij-ctrenfro.vercel.app/",
    },
    {
      id: 2,
      image: gpt3,
      title: "Open AI's GPT3 AI",
      github: "https://gpt3api.herokuapp.com/",
      demo: "https://gpt3api.herokuapp.com/",
    },
    {
      id: 3,
      image: weatherapp,
      title: "Weather App",
      github: "https://github.com/ctrenfro/WeatherApp",
      demo: "http://ctrenfro.github.io/WeatherApp",
    },
    {
      id: 4,
      image: calculator,
      title: "Calculator App",
      github: "https://github.com/ctrenfro/calculator",
      demo: "https://ctrenfro.github.io/calculator/",
    },
    {
      id: 5,
      image: mern,
      title: "Mern Project",
      github: "https://github.com/ctrenfro/mernProject",
      demo: "http://ctrenfro.github.io/mernProject",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blacnk"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blacnk"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
