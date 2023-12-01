      <div class="project-card">
        <img src={image} alt="error" />
        <div class="container-1">
          <p class="project-title">{title}</p>
          <p class="project-description">{description}</p>
          <div class="project-tech-stack">{techstack}</div>
          <div class="visit-btnContainer">
            <a href={github} class="project-github-link" target="_blank">
              Visit Github
            </a>
            <a href={deploy} class="project-deployed-link" target="_blank">
              Visit Live
            </a>
          </div>
        </div>
      </div>







                 <div id="contact-phone" className={style.contactContainer}>
              <img src={phone} alt="error" className={style.imagecontact} />
              <p className={style.p}>+91-9403378422</p>
            </div>
            <div id="contact-email" className={style.contactContainer}>
              <img src={mail} alt="error" className={style.imagecontact} />
              <p className={style.p}>deveshsuryawashi940@gmail.com</p>
            </div>
            <div onClick={handleLocation} className={style.contactContainer}>
              <img src={location} alt="error" className={style.imagecontact} />
              <p className={style.p}>Shirpur Maharastra</p>
            </div>
            <div id="contact-github" onClick={handlegithub} className={style.contactContainer}>
              <img src={github} alt="error" className={style.imagecontact} />
              <p className={style.p}>Devesh Suryawanshi</p>
            </div>
            <div id="contact-linkedin" onClick={handlelinkdin} className={style.contactContainer}>
              <img src={linkdin} alt="error" className={style.imagecontact} />
              <p className={style.p}>Devesh Suryawanshi</p>
            </div>
            <div onClick={handleinsta} className={style.contactContainer}>
              <img src={instagram} alt="error" className={style.imagecontact} />
              <p className={style.p}>Devesh Suryawanshi</p>
            </div>




            <form className={style.form} action="https://formspree.io/f/mbjevywg" method="POST">
              <div>
                <input className={style.input} type="text" name="Name" autoComplete="off" placeholder="Username" required />
              </div>
              <div>
                <input className={style.input} type="email" name="Email" autoComplete="off" placeholder="Email" required />
              </div>
              <div>
                <input className={style.input} type="text" name="Subject" autoComplete="off" placeholder="Subject" required />
              </div>
              <div>
                <textarea className={style.textArea} name="Massage" cols="30" rows="10" autoComplete="off" placeholder="Write Massage....." required></textarea>
              </div>
              <div> 
                <input className={style.btn} type="submit"/>
              </div>
            </form>



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
          className={style.lang2}
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=DeveshSuryawanshi&theme=radical&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
          alt="error"
        />
      </div>
      <div className={style.reactActivityCalendar}>
        <div className={style.calendar}>
          <GitHubCalendar username="DeveshSuryawanshi" blockSize={10} />
        </div>
      </div>