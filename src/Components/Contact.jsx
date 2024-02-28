import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "../redux/menuControlSlice";
import { switchBurger } from "../redux/burgerSlice";
import AboutMe from "./AboutMe";
import BounceAnimationBackground from "./BounceAnimationBackground";
import ContactForm from "../validation/ContactForm";
import { leftSideText, leftSideTextTwo } from "../hooks/FormTraductions";
import { TypeAnimation } from "react-type-animation";
import { useWidth } from "../hooks/useWidth";
const Contact = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);
  const width = useWidth();
  const text1 = leftSideText();
  const text2 = leftSideTextTwo();

  const closeMenuAndSidebar = () => {
    dispatch(closeMenu());
    dispatch(switchBurger(false));
  };

  return (
    <>
      <div
        className={theme ? "contact-main-dark" : "contact-main"}
        id="contact"
        onClick={closeMenuAndSidebar}>
        <div className="curtain">
          <div className="contact-aboutme-container">
            <AboutMe />
          </div>
          <div
            className={
              theme
                ? "contact-contact-container-dark"
                : "contact-contact-container"
            }>
            <div className="left-side-container">
              <div className="animation-container">
                <TypeAnimation
                  sequence={["Hello!", 6000, "Ciao!", 6000, "Hola!", 6000]}
                  speed={1}
                  style={{ fontSize: "6rem" }}
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>

              {width > 767 ? (
                <>
                  <p className="left-side-text">{text1}</p>

                  <a
                    className="left-side-email"
                    href="mailto:oswaldojsotto@gmail.com">
                    oswaldojsotto@gmail.com
                  </a>
                </>
              ) : (
                <>
                  <p className="left-side-text">
                    {text1}{" "}
                    <a
                      className="left-side-email"
                      href="mailto:oswaldojsotto@gmail.com">
                      oswaldojsotto@gmail.com
                    </a>
                    {text2}
                  </p>
                </>
              )}
            </div>
            <div className="right-side-container">
              <ContactForm />
            </div>
            <BounceAnimationBackground />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
