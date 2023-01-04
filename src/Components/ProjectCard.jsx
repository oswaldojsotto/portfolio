import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { projectDetailTranslation } from "../hooks/GeneralTraductions";

const ProjectCard = ({ title, image }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          damping: 20,
          stiffness: 50,
          restDelta: 0.001,
        },
        opacity: 1,
      });
    }

    if (!inView) {
      animation.start({ x: "-3rem", opacity: 1 });
    }
  }, [inView]);

  return (
    <motion.div className="card-container" ref={ref} animate={animation}>
      <Link to={`/project/${title}`}>
        <motion.div
          className="project-image-container"
          whileHover={{ scale: [null, 1.08, 1.05] }}
          transition={{ duration: 0.5 }}>
          <img className="project-image" src={image}></img>
        </motion.div>
      </Link>

      <p className="card-subtitle">{projectDetailTranslation()}</p>
      <p className="card-title">{title}</p>
    </motion.div>
  );
};

export default ProjectCard;
