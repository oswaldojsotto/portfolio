import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchBurger } from "../redux/burgerSlice";
import { closeMenu } from "../redux/menuControlSlice";
import ProjectCard from "./ProjectCard";
import { projectData } from "../data/projectData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Section_separator from "./Section_separator";
import { projectsIntroText, projectDivider } from "../hooks/GeneralTraductions";

const Projects = ({ references }) => {
  const { ref, inView } = useInView({ threshold: 0.9 });
  const animation = useAnimation();
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);
  const projectsReference = references[0].projectsRef;

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 0.9,
          bounce: 0,
        },
        opacity: 1,
      });
    }

    if (!inView) {
      animation.start({ x: "-3rem", opacity: 0 });
    }
  }, [inView]);

  const closeMenuAndSidebar = () => {
    dispatch(closeMenu());
    dispatch(switchBurger(false));
  };

  return (
    <div
      className={
        theme ? "projects-main-container-light" : "projects-main-container"
      }
      ref={projectsReference}
      id="projects"
      onClick={closeMenuAndSidebar}>
      <Section_separator text={projectDivider()} />
      <div className="projects-intro">
        <motion.div
          ref={ref}
          animate={animation}
          viewport={{ once: true }}
          className="projects-intro-text">
          {projectsIntroText()}
        </motion.div>
        <div className="sideprojects-button-container">
          <button type="button" className="btn cube cube-hover">
            <div className="bg-top">
              <div className="bg-inner"></div>
            </div>
            <div className="bg-right">
              <div className="bg-inner"></div>
            </div>
            <div className="bg">
              <div className="bg-inner"></div>
            </div>
            <div className="text">Side - Projects</div>
          </button>
        </div>
      </div>
      <section className="projects-container">
        {projectData.map(item => (
          <ProjectCard {...item} key={item.title} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
