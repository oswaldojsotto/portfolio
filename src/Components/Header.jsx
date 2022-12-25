import React, { useEffect } from "react";
import logoDark from "/logo_dark.png";
import logoLight from "/logo_light.png";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../redux/themeSlice";
import { switchLanguage } from "../redux/languageSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import FadeLinkAnimation from "../Helpers/FadeLinkAnimation";
import ProgressBar from "../Helpers/ProgressBar";
import { motion } from "framer-motion";
import LanguageMenu from "./LanguageMenu";
import Hamburguer from "./Hamburguer";
import { useNavigate } from "react-router-dom";
import {
  languageIntroduction,
  languageProjects,
  languageAbout,
  languageContact,
} from "../hooks/GeneralTraductions";

const Header = ({ references }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);
  const navigate = useNavigate();
  const projectReference = references[0].projectsRef;
  const introReference = references[1].introRef;
  const aboutReference = references[2].aboutRef;
  const contactReference = references[3].contactRef;

  const handleSelectLanguage = event => {
    dispatch(switchLanguage(event.target.value));
  };

  const backToMainPage = ref => {
    navigate("/");

    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: "smooth", offset: "20% auto" });
    }, 300);
  };

  return (
    <div className={theme ? "header-main-light" : "header-main"}>
      <ProgressBar />
      <div
        className="logo-container"
        onMouseDown={() => backToMainPage(introReference)}>
        <Link
          to="introduction"
          spy={true}
          smooth={true}
          offset={-110}
          duration={2000}>
          <img
            src={!theme ? logoDark : logoLight}
            className="header-logo"></img>
        </Link>
      </div>
      <Hamburguer references={references} />
      <div className="header-navbar">
        <ul className="links-container">
          <button
            className="cta"
            onMouseDown={() => backToMainPage(introReference)}>
            <span className="hover-underline-animation">
              <FadeLinkAnimation
                key={languageIntroduction()}
                to={"introduction"}
                text={languageIntroduction()}
              />
            </span>
          </button>

          <button
            className="cta"
            onMouseDown={() => backToMainPage(projectReference)}>
            <span className="hover-underline-animation">
              <FadeLinkAnimation
                key={languageProjects()}
                to={"projects"}
                text={languageProjects()}
              />
            </span>
          </button>

          <button
            className="cta"
            onMouseDown={() => backToMainPage(aboutReference)}>
            <span className="hover-underline-animation">
              <FadeLinkAnimation
                key={languageAbout()}
                to={"about"}
                text={languageAbout()}
              />
            </span>
          </button>
          <button
            className="cta"
            onMouseDown={() => backToMainPage(contactReference)}>
            <span className="hover-underline-animation">
              <FadeLinkAnimation
                key={languageContact()}
                to={"contact-end-footer"}
                text={languageContact()}
              />
            </span>
          </button>

          <motion.div
            className="language-selector"
            animate={{ y: [-300, 0] }}
            transition={{ ease: "easeOut", duration: 0.3 }}>
            <FontAwesomeIcon icon={faGlobe} className="translate-icon" />

            <LanguageMenu handleSelectLanguage={handleSelectLanguage} />
          </motion.div>

          <div className="wrapper">
            <div className="toggle">
              <input
                className="toggle-input"
                type="checkbox"
                value={theme}
                onClick={() => dispatch(switchTheme(!theme))}
              />
              <div className="toggle-bg"></div>
              <div className="toggle-switch">
                <div className="toggle-switch-figure"></div>
                <div className="toggle-switch-figureAlt"></div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;

//Traduction of links text
