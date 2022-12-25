import { useSelector } from "react-redux";
import { closeMenu } from "../redux/menuControlSlice";
import { switchBurger } from "../redux/burgerSlice";
import { useDispatch } from "react-redux";
import illustration from "/introduction_1.svg";
import { motion } from "framer-motion";
import LanguageTransition from "../Helpers/LanguageTransition";
import { introTitle, introSubtitle } from "../hooks/GeneralTraductions";

const Introduction = ({ references }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);
  const introReference = references[1].introRef;
  const closeMenuAndSidebar = () => {
    dispatch(closeMenu());
    dispatch(switchBurger(false));
  };

  return (
    <>
      <div
        className={theme ? "introduction-main-light" : "introduction-main"}
        onClick={closeMenuAndSidebar}
        ref={introReference}
        id="introduction">
        <div
          className={
            theme ? "intro-text-container-light" : "intro-text-container"
          }>
          <LanguageTransition classN="intro-title" text={introTitle()} />
          <LanguageTransition classN="intro-subtitle" text={introSubtitle()} />
        </div>
        <motion.div
          className="intro-illustration-container"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}>
          <img src={illustration} className="illustration"></img>
        </motion.div>
      </div>
    </>
  );
};

export default Introduction;
