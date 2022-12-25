import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../Helpers/use-follow-pointer";
import { useSelector } from "react-redux";

const BounceAnimationBackground = () => {
  const theme = useSelector(state => state.theme.value);
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className={theme ? "box-dark" : "box"}
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 5,
        stiffness: 89,
        restDelta: 0.1,
      }}
    />
  );
};

export default BounceAnimationBackground;
