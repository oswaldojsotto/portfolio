import React, { useRef } from "react";
import Header from "./Components/Header";
import { Body } from "./Body";
import ProjectDetails from "./Components/ProjectDetails";
import Footer from "./Components/Footer";
import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Helpers/ScrollToTop";
import NotFound from "./Components/NotFound";
import "./styles/main.css";
import "./styles/header.css";
import "./styles/introduction.css";
import "./styles/toggleTheme.css";
import "./styles/projects.css";
import "./styles/projectCard.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/languageMenu.css";
import "./styles/sectionSeparator.css";
import "./styles/aboutme.css";
import "./styles/marquee.css";
import "./styles/inputText.css";
import "./styles/footer.css";
import "./styles/submitButton.css";
import "./styles/responsive.css";
import "./styles/hamburguer.css";
import "./styles/projectDetails.css";
import "./styles/notfound.css";

function App() {
  const references = [
    { projectsRef: useRef() },
    { introRef: useRef() },
    { aboutRef: useRef() },
    { contactRef: useRef() },
  ];

  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Header references={references} />
        <Routes>
          <Route path="/" element={<Body references={references} />}></Route>
          <Route path="/project/:title" element={<ProjectDetails />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer references={references} />
      </HashRouter>
    </>
  );
}

export default App;
