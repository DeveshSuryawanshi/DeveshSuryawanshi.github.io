import style from "./about.module.css";
import image from "./boyimage/3DModel.png";

function About() {
  return (
    <section id="about" class="about section" style={{ height: "700px", color: "white" }}>
      <h1 className={style.header}>About Me</h1>
      <div className={style.main}>
        <div className={style.contentContainer}>
          <div className={style.self}>
            <img src={image} alt="error" className={style.image} />
          </div>
          <p id="user-detail-intro" className={style.pera}>
            Welcome to my portfolio! My name is Devesh Suryawanshi, and I am a
            passionate and driven Full Stack Web Developer. Although I may not
            have professional experience in the field, I have dedicated
            countless hours to honing my skills and knowledge as a developer.
            Through personal projects and continuous learning, I have developed
            a strong foundation in full stack web development and I am eager to
            take on new challenges. In this portfolio, I am showcasing my
            technical skills, projects, and commitment to growth as a Full Stack
            Developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
