import React from "react";
import styled from "styled-components";
import { timeLineElements } from "../../AppData/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from "react-icons/fa";

export const Education = () => {
  return (
    <Section id="education">
      <Heading>Education</Heading>
      <Desc>
        Reflecting on a year of self-discovery and growth through education.
        Here's a snapshot of my educational journey
      </Desc>
      <VerticalTimeline>
        {
            timeLineElements.map((el,i)=>{
                return(
                    <VerticalTimelineElement key={i} icon={<FaSchool />} iconStyle={{color : "#17e8eb", backgroundColor: "#3d3d4a"}}  contentStyle={{background: "linear-gradient(135deg,rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", backdropFilter: "bulr(10px)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)", border: "solid #17e8eb 0.5px"}} contentArrowStyle={{borderRight : "solid #17e8eb 10px"}}>
                        <Wrapper>
                          <Name>{el.name}</Name>
                          <Title>{el.title}</Title>
                          <Date>{el.date}</Date>
                          <Grade>{el.grade}</Grade>
                          <Description>{el.description}</Description>
                        </Wrapper>
                    </VerticalTimelineElement>
                )
            })
        }
      </VerticalTimeline>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  margin: auto;
`;

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: white;
  margin-top: 40px;
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  background: linear-gradient(90deg, #cdc6c6 0%, #999393 63%, #959292 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const Wrapper = styled.div`
    color: white;
    text-align: start;
`

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(90deg, #cdc6c6 0%, #999393 63%, #959292 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2px;
`

const Title = styled.div`
  font-size: 15px;
  color: #737479;
  margin-bottom: 5px;
`

const Date = styled.div`
  font-size: 12px;
  color: #17e8eb;
  margin-bottom: 3px;
`

const Grade = styled.div`
  font-size: 15px;
  font-weight: 600;
  background: linear-gradient(90deg, #cdc6c6 0%, #999393 63%, #959292 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Description = styled.div`
    background: linear-gradient(90deg, #cdc6c6 0%, #999393 63%, #959292 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`