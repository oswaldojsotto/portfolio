import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { switchLanguage } from "../redux/languageSlice";
import { openMenu, closeMenu } from "../redux/menuControlSlice";

const boxAnimation = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.1,
      delayChildren: 0.1,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const insideItemAnim = {
  open: {
    opacity: 1,
    y: 0,
    duration: 0.1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 10, transition: { duration: 0.1 } },
};

const LanguageMenu = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);
  const language = useSelector(state => state.language.value);
  const isOpen = useSelector(state => state.menuControl.value);

  const switchSpanish = () => {
    dispatch(switchLanguage("spanish"));
    dispatch(closeMenu());
  };
  const switchEnglish = () => {
    dispatch(switchLanguage("english"));
    dispatch(closeMenu());
  };
  const switchItalian = () => {
    dispatch(switchLanguage("italian"));
    dispatch(closeMenu());
  };

  const currentLanguage = () => {
    switch (language) {
      case "spanish":
        return "Español";
      case "english":
        return "English";
      case "italian":
        return "Italiano";
      case "default":
        return "English";
    }
  };

  const switchMenu = () => {
    if (isOpen) {
      dispatch(closeMenu());
    } else dispatch(openMenu());
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="motion-language-items">
      <motion.button
        className={theme ? "language-button-dark" : "language-button"}
        whileTap={{ scale: 0.97 }}
        onClick={() => switchMenu()}>
        {currentLanguage()}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}>
          <svg width="15" height="15" viewBox="0 0 20 20" fill="#171717">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={boxAnimation}
        className={theme ? "language-box-dark" : "language-box"}>
        <motion.li
          variants={insideItemAnim}
          className={theme ? "lang-box-item-dark" : "lang-box-item"}
          onClick={() => switchEnglish()}>
          English{" "}
        </motion.li>
        <motion.li
          variants={insideItemAnim}
          className={theme ? "lang-box-item-dark" : "lang-box-item"}
          onClick={() => switchSpanish()}>
          Spanish
        </motion.li>
        <motion.li
          variants={insideItemAnim}
          className={theme ? "lang-box-item-dark" : "lang-box-item"}
          onClick={() => switchItalian()}>
          Italian{" "}
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default LanguageMenu;
