import React from "react";
import "./Portfolio.css";
import ecommerce from "../../assets/ecommerce.png";
import gpt3 from "../../assets/gp3image.png";
import calculator from "../../assets/calculator.png";
import mern from "../../assets/Picture1.jpg";
import weatherapp from "../../assets/weatherApp.png";
import caffeinecafe from "../../assets/caffeinecafe.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: ecommerce,
      title: "Ecommerce with Sanity",
      desc: "Ecommerce shop built with sanity and stripe",
      github: "https://github.com/ctrenfro/ecommerce_sanity",
      demo: "https://ecommerce-sanity-r5ek846ij-ctrenfro.vercel.app/",
    },
    {
      id: 2,
      image: gpt3,
      title: "Open AI's GPT3 AI",
      desc: "Ask questions to the GPT3 AI",
      github: "https://gpt3api.herokuapp.com/",
      demo: "https://gpt3api.herokuapp.com/",
    },
    {
      id: 3,
      image: weatherapp,
      title: "Weather App",
      desc: "Simple weather app",
      github: "https://github.com/ctrenfro/WeatherApp",
      demo: "http://ctrenfro.github.io/WeatherApp",
    },
    {
      id: 4,
      image: calculator,
      title: "Calculator App",
      desc: "Simple calculator app",
      github: "https://github.com/ctrenfro/calculator",
      demo: "https://ctrenfro.github.io/calculator/",
    },
    {
      id: 5,
      image: mern,
      title: "YourPlaces",
      desc: "Simple mern project",
      github: "https://github.com/ctrenfro/mernProject",
      demo: "http://ctrenfro.github.io/mernProject",
    },
    {
      id: 6,
      image: caffeinecafe,
      title: "CaffeineCafe",
      desc: "Word press based site about a cafe and its store.",
      demo: "https://caffeinecafe.in/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, desc, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="portfolio__item-cta">
                {github && (
                  <a
                    href={github}
                    className="btn"
                    target="_blacnk"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
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
