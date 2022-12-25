import React from "react";
import { useSelector } from "react-redux";
import AboutTextAnimation from "../Helpers/AboutTextAnimation";
import TechMarquee from "./TechMarquee";
import photo from "/work_2.png";
import { motion } from "framer-motion";
import { switchBurger } from "../redux/burgerSlice";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/menuControlSlice";
import {
  titleText,
  bio,
  bioTextOne,
  bioTextTwo,
  bioTextThree,
  bioTextFour,
} from "../hooks/GeneralTraductions";

const AboutMe = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);

  const closeMenuAndSidebar = () => {
    dispatch(closeMenu());
    dispatch(switchBurger(false));
  };

  return (
    <>
      <div
        className={theme ? "aboutme-main-dark" : "aboutme-main"}
        onClick={closeMenuAndSidebar}>
        <div className="aboutme-title-container">
          <AboutTextAnimation classN={"aboutme-title"} text={titleText()} />
        </div>
        <div className="aboutme-containers">
          <div className="aboutme-text-container">
            <AboutTextAnimation classN={"bio"} text={bio()} />
            <br />
            <AboutTextAnimation classN={"bio-text-one"} text={bioTextOne()} />
            <br />
            <AboutTextAnimation classN={"bio-text-two"} text={bioTextTwo()} />
            <br />
            <AboutTextAnimation
              classN={"bio-text-three"}
              text={bioTextThree()}
            />
            <br />
            <AboutTextAnimation classN={"bio-text-four"} text={bioTextFour()} />
          </div>
          <div className="aboutme-photo-container">
            <img className="aboutme-photo" src={photo}></img>
          </div>
        </div>
        <TechMarquee />

        <motion.div
          id="contact-end-footer"
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
          }}></motion.div>
      </div>
    </>
  );
};

export default AboutMe;
