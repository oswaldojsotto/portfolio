import { motion, AnimatePresence } from "framer-motion";

const FadeLinkAnimation = ({ classN, text }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        className={classN}
        key={text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        {text}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeLinkAnimation;
