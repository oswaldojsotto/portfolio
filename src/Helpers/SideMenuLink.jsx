import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const SideMenuLink = ({ text, to }) => {
  return (
    <div className="sidelink-item">
      <motion.li variants={variants} className="li-item">
        <button className="cta cta-sidemenu">
          <span className="hover-underline-animation">
            <Link
              className="header-link"
              activeClass="active"
              spyThrottle={1000}
              to={to}
              spy={true}
              smooth={true}
              offset={-110}
              duration={1500}>
              {text}
            </Link>
          </span>
        </button>
      </motion.li>
    </div>
  );
};

export default SideMenuLink;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
