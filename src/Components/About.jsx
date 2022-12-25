import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "../redux/menuControlSlice";
import { Parallax } from "react-parallax";
import parallaxbg from "/parallax1.png";
import parallaxbgdark from "/parallax6.png";
import { motion } from "framer-motion";
import { switchBurger } from "../redux/burgerSlice";
import AboutTextAnimation from "../Helpers/AboutTextAnimation";
import { aboutText } from "../hooks/GeneralTraductions";

const About = ({ references }) => {
  const theme = useSelector(state => state.theme.value);
  const dispatch = useDispatch();
  const aboutRef = references[2].aboutRef;
  const closeMenuAndSidebar = () => {
    dispatch(closeMenu());
    dispatch(switchBurger(false));
  };

  return (
    <>
      <div
        className={theme ? "about-main-light" : "about-main"}
        id="about"
        ref={aboutRef}
        onClick={closeMenuAndSidebar}>
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 0.3,
          }}
          className={theme ? "parallax-container-dark" : "parallax-container"}>
          <Parallax
            bgImage={theme ? parallaxbg : parallaxbgdark}
            strength={400}>
            <div className="about-intro">
              <div className="about-title">
                Oswaldo J. <span className="about-title-name">Sotto</span>
              </div>
              <div className={theme ? "about-subtitle-dark" : "about-subtitle"}>
                Frontend Developer
              </div>
              <AboutTextAnimation
                text={aboutText()}
                classN={theme ? "about-text-dark" : "about-text"}
              />
            </div>
          </Parallax>
        </motion.div>
      </div>
    </>
  );
};

export default About;
