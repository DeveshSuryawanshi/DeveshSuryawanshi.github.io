import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Box,
} from "@chakra-ui/react";
import { useRef } from "react";
import style from "./Navsmall.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { SiGamedeveloper } from "react-icons/si";

function Navsmall() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box className={style.container1}>
      <Box>
        <Link
          to={"home"}
          smooth={true}
          offset={50}
          duration={500}
          className="nav-link home"
        >
          <h2 className={style.name}>
            <p>DEVESH SURYAWANSHI</p>
            <SiGamedeveloper />
          </h2>
        </Link>
      </Box>
      <Box className={style.menu}>
        <GiHamburgerMenu
          className={style.burger}
          ref={btnRef}
          onClick={onOpen}
          // color={"#17e8eb"}
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          className={style.background}
        >
          <DrawerOverlay />
          <DrawerContent
            backdropFilter="auto"
            backdropBlur="8px"
            bg={"#0005"}
            mt={"65px"}
          >
            <DrawerCloseButton color={"#17e8eb"} />
            <DrawerHeader color={"#17e8eb"}>MENU</DrawerHeader>
            <Box className={style.contrainer2}>
              <Box className={style.mini1}>
                <div>
                  <header className={style.container}>
                    <ul className={style.ul}>
                      <li className={style.li}>
                        <Link
                          className={style.link}
                          to={"home"}
                          smooth={true}
                          offset={-90}
                          duration={500}
                          onClick={onClose}
                        >
                          Home
                        </Link>
                      </li>
                      <li className={style.li}>
                        <Link
                          className={style.link}
                          to={"about"}
                          smooth={true}
                          offset={-90}
                          duration={500}
                          onClick={onClose}
                        >
                          About
                        </Link>
                      </li>
                      <li className={style.li}>
                        <Link
                          className={style.link}
                          to={"skills"}
                          smooth={true}
                          offset={-90}
                          duration={500}
                          onClick={onClose}
                        >
                          Skills
                        </Link>
                      </li>
                      <li className={style.li}>
                        <Link
                          className={style.link}
                          to={"projects"}
                          smooth={true}
                          offset={-90}
                          duration={500}
                          onClick={onClose}
                        >
                          Projects
                        </Link>
                      </li>
                      <li className={style.li}>
                        <Link
                          className={style.link}
                          to={"education"}
                          smooth={true}
                          offset={-90}
                          duration={500}
                          onClick={onClose}
                        >
                          Education
                        </Link>
                      </li>
                      <li className={style.li}>
                        <Link
                          className={style.link}
                          to={"github"}
                          smooth={true}
                          offset={-90}
                          duration={500}
                          onClick={onClose}
                        >
                          Github
                        </Link>
                      </li>
                      <li className={style.li}>
                        <Link
                          className={style.link}
                          to={"contact"}
                          smooth={true}
                          offset={-90}
                          duration={500}
                          onClick={onClose}
                        >
                          Contact
                        </Link>
                      </li>
                      <li className={style.li}>
                        <a className={style.a} href={""}>
                          Resume
                        </a>
                      </li>
                    </ul>
                  </header>
                </div>
              </Box>
            </Box>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navsmall;
