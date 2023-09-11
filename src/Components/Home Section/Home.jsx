import React from "react";
import { Box, WrapItem } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import image from "./Profile Image/myImage.jpeg";
import style from "./Home.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: ["Welcome to my portfolio"],
    loop: {},
  });

  return (
    <div id="home" className={style.avtarcontainer}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <WrapItem mt={"40px"} mb={"10px"}>
          <img className="home-img" src={image} id={style.avtar} alt="error" />
        </WrapItem>
        <h1 className={style.myname}>Hi, I’m Devesh 👋</h1>
        <p className={style.title}>
          Full Stack Web <br /> Developer
        </p>
      </Box>
      {/* <hr className={style.hr}/> */}
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
