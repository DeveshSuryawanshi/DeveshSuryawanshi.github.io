import React from "react";
import { Link } from "react-scroll";
import styles from "./Nav1.module.css";
import resume from "../../Resume/Devesh-Suryawanshi-Resume.pdf";
import { SiGamedeveloper } from "react-icons/si";

function Navlarge() {

  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1Xky2XiA3FXerRDI0vuZ-VRo9oFWpR9nJ/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div id="nav-menu" className={styles.containermain}>
      <header className={styles.container}>
        <div>
        <Link to={"home"}
              smooth={true}
              offset={50}
              duration={500}
              className="nav-link home"
              >
          <h2 id="user-detail-name" className={styles.name}>
            <p>DEVESH SURYAWANSHI</p>
            <SiGamedeveloper/>
          </h2>
        </Link>
        </div>
        <ul className={styles.ul}>
          {/* <ThemMode/> */}
          <li className={styles.li}>
            <Link
              id={styles.link}
              to={"home"}
              smooth={true}
              offset={50}
              duration={500}
              className="nav-link home"
            >
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              id={styles.link}
              to={"about"}
              smooth={true}
              offset={-90}
              duration={500}
              className="nav-link about"
            >
              About
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              id={styles.link}
              to={"skills"}
              smooth={true}
              offset={-90}
              duration={500}
              className="nav-link skills"
            >
              Skills
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              id={styles.link}
              to={"projects"}
              smooth={true}
              offset={-90}
              duration={500}
              className="nav-link projects"
            >
              Projects
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              id={styles.link}
              to={"education"}
              smooth={true}
              offset={-90}
              duration={500}
              className="nav-link contact"
            >
              Education
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              id={styles.link}
              to={"github"}
              smooth={true}
              offset={-90}
              duration={500}
              className="nav-link contact"
            >
              Github
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              id={styles.link}
              to={"contact"}
              smooth={true}
              offset={-90}
              duration={500}
              className="nav-link contact"
            >
              Contact
            </Link>
          </li>
          <li class="nav-link resume">
            <a
              id="resume-link-1"
              onClick={handleResume}
              href={resume}
              target="_blank"
              download="Devesh-Suryawanshi-Resume"
            >
              <button className={styles.a} id="resume-button-1">Resume</button>
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navlarge;
