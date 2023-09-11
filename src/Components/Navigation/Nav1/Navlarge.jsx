import React from "react";
import { Link } from "react-scroll";
import styles from "./Nav1.module.css";

function Navlarge() {
  return (
    <div id="nav-menu" className={styles.containermain}>
      <header className={styles.container}>
        <div>
          <h2 id="user-detail-name" className={styles.name}>DEVESH SURYAWANSHI</h2>
        </div>
        <ul className={styles.ul}>
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
              to={"contact"}
              smooth={true}
              offset={-90}
              duration={500}
              className="nav-link contact"
            >
              Contact
            </Link>
          </li>
          <li className={styles.li}>
            <a class="nav-link resume" id={styles.a} href="file:///D:/Devesh-Suryawanshi-Resume.pdf">
              Resume
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navlarge;
