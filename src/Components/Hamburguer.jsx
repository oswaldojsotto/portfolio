import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchBurger } from "../redux/burgerSlice";
import SideMenu from "./SideMenu";
import { motion, AnimatePresence } from "framer-motion";
import { useWidth } from "../hooks/useWidth";
import { closeMenu } from "../redux/menuControlSlice";

const Hamburguer = ({ references }) => {
  const dispatch = useDispatch();
  const burger = useSelector(state => state.burger.value);
  const theme = useSelector(state => state.theme.value);
  const width = useWidth();
  const handleHamburguer = () => {
    dispatch(switchBurger(!burger));
    dispatch(closeMenu());
  };

  useEffect(() => {
    if (width > 767) {
      dispatch(switchBurger(false));
    }
  }, [width]);

  return (
    <>
      <div className="hamburguer-main">
        <button
          className={
            burger
              ? "hamburger hamburger--collapse is-active"
              : "hamburger hamburger--collapse "
          }
          type="button"
          onClick={handleHamburguer}>
          <span className="hamburger-box">
            <span className="hamburger-inner"> </span>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {burger && (
          <motion.div
            className={theme ? "menu-container-light" : "menu-container"}
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}>
            <motion.div
              className="menu-items-container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}>
              <SideMenu references={references} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hamburguer;

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
