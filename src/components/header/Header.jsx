import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
//import me from "../../assets/me.jpg";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Christopher Renfro</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials />

        {/* <div className="me">
          <img src={me} alt="" className="pic" />
        </div> */}

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
