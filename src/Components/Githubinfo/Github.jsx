import React from "react";
import styled from "styled-components";
import GitHubCalendar from "react-github-calendar";
import programmer from "./image/programmer.png";

function Github() {
  return (
    <Section id="github" className={styled.mainContainer}>
      <Heading>Statistics</Heading>
      <Container>
        <ProgrammerImage src={programmer} alt="error" />
        <Content>
          <Image
            src="https://github-readme-stats.vercel.app/api?username=DeveshSuryawanshi&theme=radical&hide_border=false&include_all_commits=false&count_private=false"
            id="github-stats-card"
            alt="error"
          />
          <Image
            // src="https://github-readme-streak-stats.herokuapp.com?user=DeveshSuryawanshi&theme=neon"
            src="https://github-readme-streak-stats.herokuapp.com/?user=DeveshSuryawanshi&theme=radical&hide_border=false"
            id="github-streak-stats"
            alt="error"
          />
          <Image
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=DeveshSuryawanshi&theme=radical&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
            id="github-top-langs"
            alt="error"
          />
        </Content>
      </Container>
      <CalendarContainer>
        <GitHubCalendar
          username="DeveshSuryawanshi"
          blockSize={12}
        />
      </CalendarContainer>
    </Section>
  );
}

export default Github;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 800;
  background: linear-gradient(90deg, #cdc6c6 0%, #999393 63%, #959292 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 50px;
  margin-bottom: 40px;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  padding: 30px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 15px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  @media (max-width: 800px) {
    width: 90%;
    flex-direction: column;
    padding: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 450px;
`;

const ProgrammerImage = styled.img`
  width: 50%;
  height: 50%;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    border-bottom: solid #17e8eb 2px;
  }
`;

const CalendarContainer = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  width: 80%;
  display: flex;
  justify-content: center;
  color: white;
  padding: 20px;
  border-radius: 15px;
  margin-top: 20px;

  @media (max-width: 800px) {
    width: 90%;
  }
`;
