// import style from "./contact.module.css";
import linkdin from "./Contact Images/linkdin.png";
import mail from "./Contact Images/mail.png";
import phone from "./Contact Images/phone.png";
import location from "./Contact Images/location.png";
import github from "./Contact Images/github.png";
import Contactlogo from "./Contact Images/ContactLogo.png";
import instagram from "./Contact Images/insta.png";
import styled from "styled-components";

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
    <Container id="contact">
      <Heading>Contact Me</Heading>
      <FormContainer>
        <Form method="POST" action="https://formspree.io/f/mbjevywg">
          <FormHeading>Email Me</FormHeading>
          <Input type="text" name="name" placeholder="Enter Your Name" required/>
          <Input type="email" name="email" placeholder="Enter Your Email" required/>
          <Input type="text" name="subject" placeholder="Subject" required/>
          <TextArea name="message" placeholder="Message..." required rows={5}></TextArea>
          <Submit type="submit" value={"Send"}/>
        </Form>
      </FormContainer>
      <Footer>
        <MyName>Devesh Suryawanshi</MyName>
        <SocialHandles>
          <img src={linkdin} alt="error" width={"20px"} onClick={handlelinkdin}/>
          <img src={github} alt="error" width={"20px"} onClick={handlegithub}/>
          <img src={instagram} alt="error" width={"20px"} onClick={handleinsta}/>
          <img src={location} alt="error" width={"20px"} onClick={handleLocation}/>
        </SocialHandles>
        <Wrapper>
          <Box>
            <img src={phone} width={"15px"} alt="error"/>
            <Title>+91-9403378422</Title>
          </Box>
          <Box>
            <img src={mail} width={"20px"} alt="error"/>
            <Title>deveshsuryawashi940@gmail.com</Title>
          </Box>
        </Wrapper>
        <Text>© 2023 Devesh Suryawanshi. All rights reserved.</Text>
      </Footer>
    </Container>
  );
}

export default Contact;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 40px;
`

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 800;
  background: linear-gradient(90deg, #cdc6c6 0%, #999393 63%, #959292 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 40px;
  margin-bottom: 40px;
`

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Form = styled.form`
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`

const FormHeading = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: start;
  width: 90%;
  margin-top: 10px;
  color: #17e8eb;
`

const Input = styled.input`
  width: 90%;
  height: 50px;
  border-radius: 10px;
  padding-left: 10px;
  font-size: large;
  margin: 15px 0px;
  display: block;
  background-color: #1c1e27;
  border: solid lightgray 1px;
  `

const TextArea = styled.textarea`
  width: 90%;
  border-radius: 5px;
  padding-left: 10px;
  font-size: large;
  margin: 20px 0px;
  color: white;
  padding: 10px;
  background-color: #1c1e27;
  border: solid lightgray 1px;
  `

  const Submit = styled.input`
    width: 90%;
    border-radius: 5px;
    background-color: #17e8eb;
    height: 40px;
    color: black;
    font-size: 25px;
    font-weight: 800;
    margin-bottom: 20px;

    @media (max-width : 720px){
      font-size: 20px;
    }
  `

  const Footer = styled.footer`
    height: 300px;
    width: 100%;
    padding: 40px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    clip-path: polygon(35% 0, 100% 21%, 100% 100%, 0 100%, 0 21%);
    background-color: #0005;
    backdrop-filter: blur(6px);
  `

  const MyName = styled.div`
    font-size: 20px;
    margin: 10px;
    color: #17e8eb;
    font-weight: 500;
  `

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    flex-wrap: wrap;  
    gap: 20px;
    border-radius: 10px;
    border: solid 1px #17e8eb;
    margin-bottom: 10px;
  `

  const Box = styled.div`
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `

  const Title = styled.p`
    font-size: 12px;

    @media (max-width: 480px){
      font-size: 9px;
    }
  `

  const SocialHandles = styled.div`
    display: flex;
    padding: 20px;
    gap: 40px;
    cursor: pointer;
  `

  const Text = styled.div`
    
  `