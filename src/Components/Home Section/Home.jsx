import React from "react";
import image from "./Profile Image/myImage.jpeg";
import style from "./Home.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HeroBgAnimation from "../HeroBgAnimation";

function Home() {
  const [text] = useTypewriter({
    words: ["Welcome to my portfolio"],
    loop: {},
  });

  return (
    <div id="home" className={style.avtarcontainer}>
      <div className={style.contentContainer}>
        <div className={style.HeroBg}>
          <HeroBgAnimation />
        </div>
        <div className={style.mainContainer}>
          <div className={style.avtarContainer}>
            <div className={style.content}>
              <img
                className="home-img"
                src={image}
                id={style.avtar}
                alt="error"
              />
              <h2>
                Devesh Suryawanshi
                <br />
                <span>Full Stack Developer</span>
              </h2>
            </div>
          </div>
          <h1 id="user-detail-name" className={style.myname}>
            Hi, I’m Devesh 👋
          </h1>
          <p className={style.title}>
            Full Stack Web <br /> Developer
          </p>
        </div>
      </div>
      <div className={style.boxcontainer}>
        <div className={style.box}>
          <div className={style.description}>{text}</div>
        </div>
      </div>
      <div className={style.descriptionContainer}></div>
    </div>
  );
}

export default Home;
