import style from "./contact.module.css";
import linkdin from "./Contact Images/linkdin.png";
import mail from "./Contact Images/mail.png";
import phone from "./Contact Images/phone.png";
import location from "./Contact Images/location.png";
import github from "./Contact Images/github.png";
import Contactlogo from "./Contact Images/ContactLogo.png";
import instagram from "./Contact Images/insta.png";

function Contact() {
  const handlegithub = () => {
    window.open("https://github.com/DeveshSuryawanshi");
  };

  const handlelinkdin = () => {
    window.open("https://www.linkedin.com/in/devesh-suryawanshi-690393243/");
  };

  const handleLocation = () => {
    window.open(
      "https://www.google.com/maps/place/Shirpur-Warwade,+Maharashtra+425405/@21.3689349,74.8350601,13z/data=!4m15!1m8!3m7!1s0x3bdf321da57a4579:0x40f7ce9283aa423a!2sShirpur-Warwade,+Maharashtra+425405!3b1!8m2!3d21.370536!4d74.8682569!16zL20vMGY2OHIw!3m5!1s0x3bdf321da57a4579:0x40f7ce9283aa423a!8m2!3d21.370536!4d74.8682569!16zL20vMGY2OHIw?authuser=0&entry=ttu"
    );
  };

  const handleinsta = () =>{
    window.open("https://www.instagram.com/_devesh_suryawanshi_/")
  }

  return (
    <section id="contact" style={{ height: "900px", color: "white" }}>
      <h1 className={style.header}>Contact Me</h1>
      <div className={style.container}>
        <div className={style.miniContainer}>
          <div className={style.formdiv}>
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
          </div>
          <div className={style.itemsContainer}>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
