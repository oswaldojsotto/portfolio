import React from "react";
import { Link } from "react-scroll";
import {
  languageIntroduction,
  languageProjects,
  languageAbout,
  languageContact,
} from "../hooks/GeneralTraductions";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import LanguageMenu from "./LanguageMenu";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../redux/themeSlice";
import { switchLanguage } from "../redux/languageSlice";
import { switchBurger } from "../redux/burgerSlice";
import { useNavigate } from "react-router-dom";

const SideMenu = ({ references }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);
  const burger = useSelector(state => state.burger.value);
  const navigate = useNavigate();
  const projectReference = references[0].projectsRef;
  const introReference = references[1].introRef;
  const aboutReference = references[2].aboutRef;
  const contactReference = references[3].contactRef;
  const handleSelectLanguage = event => {
    dispatch(switchLanguage(event.target.value));
  };

  const closeSideMenu = () => {
    dispatch(switchBurger(false));
  };

  const backToMainPage = ref => {
    navigate("/");

    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <motion.ul
        className="sidemenu-main"
        variants={variants2}
        animate={burger ? "open" : "closed"}>
        <motion.li variants={variants} className="li-item">
          <div className="theme-wrapper-sidemenu">
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
        </motion.li>

        <Link
          onMouseDown={() => backToMainPage(introReference)}
          to="introduction"
          activeClass="active"
          smooth="smooth"
          onClick={closeSideMenu}>
          <motion.li variants={variants} className="li-item">
            <button className="cta cta-sidemenu">
              <span className="hover-underline-animation">
                {languageIntroduction()}
              </span>
            </button>
          </motion.li>
        </Link>

        <Link
          onMouseDown={() => backToMainPage(projectReference)}
          to="projects"
          activeClass="active"
          smooth="smooth"
          onClick={closeSideMenu}>
          <motion.li variants={variants} className="li-item">
            <button className="cta cta-sidemenu">
              <span className="hover-underline-animation">
                {languageProjects()}
              </span>
            </button>
          </motion.li>
        </Link>
        <Link
          onMouseDown={() => backToMainPage(aboutReference)}
          to="about"
          activeClass="active"
          smooth="smooth"
          onClick={closeSideMenu}>
          <motion.li variants={variants} className="li-item">
            <button className="cta cta-sidemenu">
              <span className="hover-underline-animation">
                {languageAbout()}
              </span>
            </button>
          </motion.li>
        </Link>
        <Link
          onMouseDown={() => backToMainPage(contactReference)}
          to="contact-end-footer"
          activeClass="active"
          smooth="smooth"
          onClick={closeSideMenu}>
          <motion.li variants={variants} className="li-item">
            <button className="cta cta-sidemenu">
              <span className="hover-underline-animation">
                {languageContact()}
              </span>
            </button>
          </motion.li>
        </Link>
        <motion.li
          variants={variants}
          className="li-item language-selector-sidemenu"
          transition={{ ease: "easeOut", duration: 0.3 }}>
          <LanguageMenu handleSelectLanguage={handleSelectLanguage} />
          <FontAwesomeIcon
            icon={faGlobe}
            className="translate-icon"
            style={{ color: "#5c5c5c" }}
          />
        </motion.li>
      </motion.ul>
    </>
  );
};

export default SideMenu;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const variants2 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
