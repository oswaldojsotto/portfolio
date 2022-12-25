import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const FadeLinkAnimation = ({ text, to }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={text}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}>
        <Link
          className="header-link"
          activeClass="active"
          spyThrottle={1000}
          to={to}
          spy={true}
          smooth={true}
          offset={-0}
          duration={1500}>
          {text}
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeLinkAnimation;
