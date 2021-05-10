import React from "react";
import { ThemeProvider } from "styled-components";
import { customTheme } from "./theme/theme";
import BasicInfo from "./sections/BasicInfo/BasicInfo";
import Experience from "./sections/Experience/Experience";
import Skills from "./sections/Skills/Skills";
import Education from "./sections/Education/Education";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <BasicInfo />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
