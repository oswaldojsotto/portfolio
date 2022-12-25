import { useSelector } from "react-redux";
import { bioData } from "../data/bioData";

export const introTitle = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "spanish":
      return "Yo desarrollo y diseño Sitios Web y Aplicaciones ;";

    case "italian":
      return "Io sviluppo e progetto Siti Web e Applicazioni ;";

    case "english":
      return "I develop and design Websites and Applications ;";

    default:
      return "I develop and design Websites and Applications ;";
  }
};

export const introSubtitle = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "spanish":
      return "Soy desarrollador frontend con pasión por el buen diseño y experiencias de usuarios.";

    case "italian":
      return "Sono sviluppatore frontend con passione dei buoni progetti ed esperienze degli utenti. ";

    case "english":
      return "I'm a frontend developer with passion for great design and user experiences.";

    default:
      return "I'm a frontend developer with passion for great design and user experiences.";
  }
};

export const projectsIntroText = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "spanish":
      return "Visualiza algunos de los proyectos en los que he trabajado, o algunos trabajos alternos. ";

    case "italian":
      return "Dai un'occhiata ad alcuni dei progetti su cui ho lavorato, o ad alcuni dei miei progetti collaterali.";

    case "english":
      return "Check out some of the projects I have worked on, or some of my side-projects.";

    default:
      return " ";
  }
};
export const projectDivider = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "spanish":
      return "Proyectos";

    case "italian":
      return "Progetti";

    case "english":
      return "Projects";

    default:
      return "Projects";
  }
};

export const aboutText = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return "Get a brief look at who I am and what I do.";
    case "spanish":
      return "Conoce brevemente quién soy y qué hago.";
    case "italian":
      return "Dai una occhiata a chi sono e cosa faccio.";
  }
};

export const aboutSeparator = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return "About Me";
    case "spanish":
      return "Sobre Mi";
    case "italian":
      return "Chi Sono";
  }
};

export const languageIntroduction = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "spanish":
      return "Introducción";
    case "italian":
      return "Introduzione";
    case "english":
      return "Introduction";
    case "default":
      return "Introduction";
  }
};

export const languageProjects = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "spanish":
      return "Proyectos";
    case "italian":
      return "Progetti";
    case "english":
      return "Projects";
    case "default":
      return "Projects";
  }
};

export const languageAbout = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "spanish":
      return "Sobre Mi";
    case "italian":
      return "Chi Sono";
    case "english":
      return "About Me";
    case "default":
      return "About Me";
  }
};

export const languageContact = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "spanish":
      return "Contacto";
    case "italian":
      return "Contatto";
    case "english":
      return "Contact";
    case "default":
      return "Contact";
  }
};

export const titleText = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return "Who am I ?";
    case "spanish":
      return "Quién soy ?";
    case "italian":
      return "Chi sono ?";
  }
};

export const bio = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return bioData[0].bio;
    case "spanish":
      return bioData[1].bio;
    case "italian":
      return bioData[2].bio;
  }
};
export const bioTextOne = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return bioData[0].text1;
    case "spanish":
      return bioData[1].text1;
    case "italian":
      return bioData[2].text1;
  }
};
export const bioTextTwo = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return bioData[0].text2;
    case "spanish":
      return bioData[1].text2;
    case "italian":
      return bioData[2].text2;
  }
};
export const bioTextThree = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return bioData[0].text3;
    case "spanish":
      return bioData[1].text3;
    case "italian":
      return bioData[2].text3;
  }
};
export const bioTextFour = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return bioData[0].text4;
    case "spanish":
      return bioData[1].text4;
    case "italian":
      return bioData[2].text4;
  }
};

export const projectDetailTranslation = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "spanish":
      return "Desarrollo & Diseño";

    case "italian":
      return "Sviluppo & Progetto";

    case "english":
      return "Develop & Design";

    default:
      return "Develop & Design";
  }
};

export const visitProject = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "spanish":
      return "Visitar este proyecto";

    case "italian":
      return "Visitare questo progetto";

    case "english":
      return "Visit this project";

    default:
      return "Visit this project";
  }
};
