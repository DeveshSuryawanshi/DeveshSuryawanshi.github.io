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

function Navigation() {
  const [midScreenSize] = useMediaQuery("(min-width: 935px)");

  return (
    <div>
      {midScreenSize ? <Navlarge /> : <Navsmall />}

      <main>
        <div>
          <div id="home">
            <Home />
          </div>
        </div>
        <div>
          <div id="about">
            <About />
          </div>
        </div>
        <div>
          <div id="skills">
            <Skills />
          </div>
        </div>
        <div>
          <div id="projects">
            <Projects/>
          </div>
        </div>
        <div>
          <div id="github">
            <Github />
          </div>
        </div>
        <div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Navigation;
