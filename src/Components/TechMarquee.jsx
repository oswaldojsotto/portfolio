import React from "react";
import { useSelector } from "react-redux";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faGitAlt,
  faGithub,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import typescript from "/logos/typescript_light.svg";
import typescriptdark from "/logos/typescript_dark.svg";
import redux from "/logos/redux_light.svg";
import reduxdark from "/logos/redux_dark.svg";
import tailwinddark from "/logos/tailwind_dark.svg";
import tailwindlight from "/logos/tailwind_light.svg";
import muidark from "/logos/mui_dark.svg";
import muilight from "/logos/mui_light.svg";
import AboutTextAnimation from "../Helpers/AboutTextAnimation";

const TechMarquee = () => {
  const theme = useSelector(state => state.theme.value);
  const language = useSelector(state => state.language.value);

  const tech = () => {
    switch (language) {
      case "english":
        return "Some of the tools I use:";
      case "spanish":
        return "Algunas de las herramientas que uso:";
      case "italian":
        return "Alcuni degli strumenti che utilizzo:";
    }
  };

  return (
    <>
      <div className="tech-container">
        <AboutTextAnimation classN={"tech"} text={tech()} />
      </div>
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={theme ? "marquee-container-dark" : "marquee-container"}>
        <Marquee
          gradient={false}
          speed={20}
          className={theme ? "marquee-dark" : "marquee"}>
          <div className="mark-container">
            <p className="tooltip">HTML5</p>
            <FontAwesomeIcon
              icon={faHtml5}
              className={theme ? "logo-dark" : "logo-light"}
            />
          </div>

          <div className="mark-container">
            <p className="tooltip">CSS3</p>
            <FontAwesomeIcon
              icon={faCss3Alt}
              className={theme ? "logo-dark" : "logo-light"}
            />
          </div>

          <div className="mark-container">
            <label htmlFor="faHtml5" className="tooltip">
              Javascript
            </label>
            <FontAwesomeIcon
              icon={faJs}
              className={theme ? "logo-dark" : "logo-light"}
            />
          </div>

          <div className="mark-container">
            <p className="tooltip">React</p>
            <FontAwesomeIcon
              icon={faReact}
              className={theme ? "logo-dark" : "logo-light"}
            />
          </div>

          <div className="mark-container">
            <p className="tooltip">Typescript</p>
            <img
              src={theme ? typescriptdark : typescript}
              className={theme ? "logo-dark" : "logo-light"}></img>
          </div>

          <div className="mark-container">
            <p className="tooltip">Redux</p>
            <img
              src={theme ? reduxdark : redux}
              className={theme ? "logo-dark" : "logo-light"}></img>
          </div>
          <div className="mark-container">
            <p className="tooltip">Git</p>
            <FontAwesomeIcon
              icon={faGitAlt}
              className={theme ? "logo-dark" : "logo-light"}
            />
          </div>

          <div className="mark-container">
            <p className="tooltip">Github</p>
            <FontAwesomeIcon
              icon={faGithub}
              className={theme ? "logo-dark" : "logo-light"}
            />
          </div>

          <div className="mark-container">
            <p className="tooltip">Sass</p>
            <FontAwesomeIcon
              icon={faSass}
              className={theme ? "logo-dark" : "logo-light"}
            />
          </div>

          <div className="mark-container">
            <p className="tooltip">Tailwind Css</p>

            <img
              src={theme ? tailwinddark : tailwindlight}
              className={theme ? "logo-dark" : "logo-light"}></img>
          </div>

          <div className="mark-container">
            <p className="tooltip">Material UI</p>
            <img
              src={theme ? muidark : muilight}
              className={theme ? "logo-dark" : "logo-light"}></img>
          </div>
        </Marquee>
      </motion.div>
    </>
  );
};

export default TechMarquee;
