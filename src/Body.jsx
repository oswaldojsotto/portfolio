import React from "react";
import Introduction from "./Components/Introduction";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";

export const Body = ({ references }) => {
  return (
    <>
      <Introduction references={references} />
      <Projects references={references} />
      <About references={references} />
      <Contact references={references} />
    </>
  );
};
