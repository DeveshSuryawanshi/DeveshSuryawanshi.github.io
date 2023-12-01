import React from "react";
import styled from "styled-components";
import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdClose } from "react-icons/md";


const ProjectCard = ({id,image,date,title,description,techstack,github,webapp,members,}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card onClick={onOpen}>
      <Image src={image} />
      <Tags>
        {techstack.map((tag, i) => {
          return <Tag key={i}>{tag}</Tag>;
        })}
      </Tags>
      <Details>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Description>{description}</Description>
      </Details>
      <Members>
        {members?.map((el, i) => {
          return <Avatar src={el.img} />;
        })}
      </Members>
      <Container>
        <Modal isOpen={isOpen} size={'full'} onClose={onClose}>
        <ModalOverlay / >
        <ModalContent bg={"#0005"} backdropFilter={"blur(4px)"}  borderRadius={"16px"}>
          <Wrapper>
            <MdClose
              style={{
                position: "absolute",
                top: "10px",
                right: "20px",
                cursor: "pointer",
              }}
              fontSize={"20px"}
              onClick={onClose}
            />
            <ModelImage src={image} />
            <ModelTitle>{title}</ModelTitle>
            <ModelDate>{date}</ModelDate>
            <ModelTags>
              {techstack.map((el, i) => {
                return <ModelTag key={i}>{el}</ModelTag>;
              })}
            </ModelTags>
            <ModelDesc>{description}</ModelDesc>

            {members && (
              <>
                <Label>Members</Label>
                <ModelMembers>
                  {members?.map((el, i) => {
                    return (
                      <ModelMember>
                        <MemberImage src={el.img} />
                        <MemberName>{el.name}</MemberName>
                        <a
                          href={el.github}
                          target="new"
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          <FaGithub />
                        </a>
                        <a
                          href={el.linkedin}
                          target="new"
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          <FaLinkedin />
                        </a>
                      </ModelMember>
                    );
                  })}
                </ModelMembers>
              </>
            )}
            <ModelButtonGroup>
              <ModelButton dull href={github} target="new">
                View Code
              </ModelButton>
              <ModelButton href={webapp} target="new">
                View Live App
              </ModelButton>
            </ModelButtonGroup>
          </Wrapper>
        </ModalContent>
        </Modal>
      </Container>
    </Card>
  );
};

export default ProjectCard;

const Card = styled.div`
  width: 330px;
  height: 500px;
  background-color: #0005;
  backdrop-filter: blur(6px);

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0, 4);
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0, 6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: white;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0, 0.3);
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  align-items: center;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #17e8eb;
  background-color: #3d3d4a;
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
  text-align: left;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  background: linear-gradient(90deg, #cdc6c6 0%, #999393 63%, #959292 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-left: 2px;
  color: #17e8eb;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: lightgray;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  margin-top: 8px;
  max-width: 100%;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid #30303b;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: #000000a7; */
  /* display: flex; */
  /* align-items: top; */
  /* justify-content: center; */
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  margin: auto;
  height: min-content;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  background-color: #171721;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;


const ModelImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const ModelTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

const ModelDate = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ModelTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`;

const ModelTag = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  color: #17e8eb;
  background-color: #3d3d4a;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ModelDesc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`;

const ModelMembers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`;

const ModelMember = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

const MemberName = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const ModelButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const ModelButton = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #17e8eb;
  ${({ dull, theme }) =>
    dull &&
    `
        background-color: #1c1e27;
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: #16b8ba;
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
