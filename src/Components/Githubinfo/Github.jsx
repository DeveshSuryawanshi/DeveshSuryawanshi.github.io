import React from "react";
import styled from "styled-components";
import style from "./github.module.css";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <section className={styled.mainContainer} >
      <h1 className={style.header}>Github</h1>
      <div className={style.container}>
        <img
          className={style.S1}
          id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=DeveshSuryawanshi&theme=radical&hide_border=false&include_all_commits=false&count_private=false"
          alt="error"
        />
        <img
          className={style.S2}
          id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com?user=DeveshSuryawanshi&theme=neon"
          alt="error"
        />
      </div>
      <div className={style.container}>
        <img
          className={style.lang1}

          src="https://github-contributor-stats.vercel.app/api?username=DeveshSuryawanshi&limit=5&theme=radical&combine_all_yearly_contributions=true"
          alt="error"
        />
        <img
          className={style.lang}
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=DeveshSuryawanshi&theme=radical&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
          alt="error"
        />
      </div>
      <div className="react-activity-calendar">
        <GitHubCalendar username="DeveshSuryawanshi"/>
      </div>
    </section>
  );
}

export default Github;
