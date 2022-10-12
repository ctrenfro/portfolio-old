import React from "react";
import "./About.css";
//import me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About" />
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Training</h5>
              <small>Associates Degree of Software Development</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience</h5>
              <small>
                Currently in my first posiiton as a web design intern
              </small>
            </article>
          </div>
          <p>
            I am a new programmer with an Associate's degree in Software
            Development. I have spent about a year practicing on my own mostly
            with React, but am interested in any web development technology. I
            come from a background as a hiring and shift manager, but wanted to
            build a career in technology.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
