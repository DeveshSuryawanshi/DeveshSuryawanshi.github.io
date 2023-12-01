import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { projects } from "../../AppData/data";
import { useState } from "react";

function Projects() {

  const [isActive, SetActive] = useState("all");

  return (
    <SECTION id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are some of my projects <br/> "Crafting Tomorrow's Success Stories: A Showcase of Passion, Precision, and Progress in Every Project."</Desc>
        <ToogleGroup>
          {
            isActive === "all" ? (
              <ToogleButton active value={"all"} onClick={()=> SetActive("all")} >All</ToogleButton>
              ) : (
              <ToogleButton value={"all"} onClick={()=> SetActive("all")}>All</ToogleButton>
            )
          }

          <Divider/>

          {
            isActive === "web-app" ? (
              <ToogleButton active onClick={()=> SetActive("web-app")}>WEB APP'S</ToogleButton>
            ):(
              <ToogleButton onClick={()=> SetActive("web-app")}>WEB APP'S</ToogleButton>
            )
          }

          <Divider/>

          {
            isActive === "android-app" ? (
              <ToogleButton active onClick={()=> SetActive("android-app")} >ANDROID APP'S</ToogleButton>
              ):(
              <ToogleButton onClick={()=> SetActive("android-app")} >ANDROID APP'S</ToogleButton>
            )
          }

          {/* <Divider/>

          {
            isActive === "machine-learning" ? (
              <ToogleButton active onClick={()=> SetActive("machine-learning")}>MACHINE LEARNING</ToogleButton>
              ):(
                <ToogleButton onClick={()=> SetActive("machine-learning")}>MACHINE LEARNING</ToogleButton>
            )
          } */}
        </ToogleGroup>
        <CardContainer>
          {isActive === "all" &&
            projects.map((el,i) =>{
              return <ProjectCard key={i} {...el}/>
            })
          }
          {
            projects.filter((el) => el.category == isActive).map((el,i) =>{
              return(
                <ProjectCard key={i} {...el} />
              )
            })
          }
        </CardContainer>
      </Wrapper>
    </SECTION>
  );
}

export default Projects;

const SECTION = styled.section`
    color: white;
    /* background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%); */
    background: linear-gradient(343.07deg, rgba(59, 186, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
background: linear-gradient(90deg, #cdc6c6 0%, #999393 63%, #959292 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    background: linear-gradient(90deg, #cdc6c6 0%, #999393 63%, #959292 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ToogleGroup = styled.div`
  display: flex;
  border: 1.5px solid #17e8eb;
  font-size: 16px;
  border-radius: 6px;
  font-weight: 500px;
  margin: 22px 0px;

  @media (max-width: 768px){
    font-size: 12px;
  }
  ;
  `
const ToogleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;
  color: #cac3c3;

  ${({ active }) => 
    active && 
    `background-color: #30303b;`
  }


  &:hover{
    background-color: #282836 + 8;
  }

  @media (max-width: 768px){
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const Divider = styled.div`
  width: 1px;
  background-color: #17e8eb;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;

`