import React from "react";
import { motion } from "framer-motion";

const Section_separator = ({ text }) => {
  return (
    <>
      <motion.div
        className="section-separator"
        key={text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <p className="section-separator-text">{text}</p>
      </motion.div>

      <br />
    </>
  );
};

export default Section_separator;
