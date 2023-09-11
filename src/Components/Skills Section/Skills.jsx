import style from "./skills.module.css";
import html from "./logos/html-5.png";
import css from "./logos/CSS Logo.png";
import javascript from "./logos/javascript logo.png";
import react from "./logos/logo512.png";
import redux from "./logos/redux.png";
import node from "./logos/nodejs.png";

function Skills() {
  return (
    <section id="skills" style={{ height: "1000px", color: "white" }}>
      <h1 className={style.header}>Skills</h1>
      <div className={style.maincontainer}>

        <div class="skills-card" id={style.miniContainer}>
          <img class="skills-card-img" src={html} id={style.images} alt="error" />
          <p class="skills-card-name" id={style.p}>HTML5</p>
        </div>

        <div class="skills-card" id={style.miniContainer}>
          <img class="skills-card-img" src={css} id={style.images} alt="error" />
          <p class="skills-card-name" id={style.p}>CSS3</p>
        </div>

        <div class="skills-card" id={style.miniContainer}>
          <img class="skills-card-img" src={javascript} id={style.images} alt="error" />
          <p class="skills-card-name" id={style.p}>JavaScript</p>
        </div>

        <div class="skills-card" id={style.miniContainer}>
          <img class="skills-card-img" src={react} id={style.images} alt="error" />
          <p class="skills-card-name" id={style.p}>React</p>
        </div>

        <div class="skills-card" id={style.miniContainer}>
          <img class="skills-card-img" src={redux} id={style.images} alt="error" />
          <p class="skills-card-name" id={style.p}>Redux</p>
        </div>

        <div class="skills-card" id={style.miniContainer}>
          <img class="skills-card-img" src={node} id={style.images} alt="error" />
          <p class="skills-card-name" id={style.p}>Node.Js</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
