import React from "react";
import { useParams } from "react-router-dom";
import { projectData } from "../data/projectData";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  projectDetailTranslation,
  visitProject,
} from "../hooks/GeneralTraductions";
import { closeMenu } from "../redux/menuControlSlice";
import { switchBurger } from "../redux/burgerSlice";

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);
  const { title } = useParams();

  const data = projectData.filter(item => item.title === title);

  const closeMenuAndSidebar = () => {
    dispatch(closeMenu());
    dispatch(switchBurger(false));
  };

  ["0", "O"];
  return (
    <div
      className={theme ? "project-main-dark" : "project-main"}
      onClick={closeMenuAndSidebar}>
      <motion.div
        className="pdetails-info-container"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.4 }}>
        <p className="pdetails-title">{data[0].title} </p>
        <p className="pdetails-subtitle">{projectDetailTranslation()}</p>
        <p className="pdetails-description"> {data[0].description}</p>

        <a href={data[0].link} target="_blank" className="pdetails-button">
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
            <div className="text">{visitProject()}</div>
          </button>
        </a>
      </motion.div>
      <motion.div
        className="pdetails-image-container"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.4 }}>
        <img src={data[0].image} className="pdetails-img"></img>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
