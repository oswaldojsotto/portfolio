import { motion, AnimatePresence } from "framer-motion";

const FadeLinkAnimation = ({ classN, text }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        className={classN}
        key={text}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}>
        {text}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeLinkAnimation;
