import React from "react";
import Navlarge from "./Nav1/Navlarge";
import Navsmall from "./Nav2/Navsmall";
import { useMediaQuery } from "@chakra-ui/react";
import Home from "../Home Section/Home";
import About from "../About Section/About";
import Contact from "../Contact Section/Contact";
import Skills from "../Skills Section/Skills";
import Projects from "../Projects Section/Projects";
import Github from "../Githubinfo/Github";
import { Education } from "../Education/Education";

function Navigation() {
  const [midScreenSize] = useMediaQuery("(min-width: 1000px)");

  return (
    <div>
      {midScreenSize ? <Navlarge /> : <Navsmall />}

      <main>
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Education/>  
        </div>
        <div>
          <Github />
        </div>
        <div>
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default Navigation;
