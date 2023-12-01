import style from "./skills.module.css";
import { Stack } from "../../AppData/data";


function Skills() {
  return (
    <section id="skills" className={style.skills}>
      <h1 className={style.header}>Skills</h1>
      <div className={style.desc}>Here are some of my skills on which I have been working on for the past 1 year.</div>
      <div className={style.maincontainer}>
        {Stack.map((el, i) => {
          return (
            <div class="skills-card" key={i} id={style.miniContainer}>
              <div className={style.skillTitle}>{el.title}</div>
              <div className={style.skillsList}>
                {
                  el.skills.map((el,i)=>{
                    return(
                      <div key={i} className={style.skillItem}>
                        <img src={el.image} class="skills-card-img" id={style.icon} alt="error" />
                        <p class="skills-card-name" id={style.SkillName}>{el.name}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;

