import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CustomCard from "../../components/CustomCard/CustomCard";
import { ExpTimeLineContainer, Title, SubTitle } from "./Styled";

const Experience = () => {
  return (
    <CustomCard title="Experience">
      <ExpTimeLineContainer>
        <VerticalTimeline layout="1-column-left">
          <VerticalTimelineElement
            contentStyle={{ border: "1px solid lightgray", boxShadow: "none" }}
            contentArrowStyle={{ borderRight: "7px solid #00bcd4" }}
            iconStyle={{
              background: "#f5f5f5",
              boxShadow: "0 0 0 4px #00bcd4",
            }}
          >
            <Title>
              Valtech India Systems Ltd
              <span>(Software Engineer - UI ReactJS developer)</span>
            </Title>
            <span className="secondary-color subtitle-text">
              Aug 2017 - Aug 2019 <i className="far fa-clock"></i> 2 Years
            </span>
            <SubTitle>Project & Client</SubTitle>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ border: "1px solid lightgray", boxShadow: "none" }}
            contentArrowStyle={{ borderRight: "7px solid #00bcd4" }}
            iconStyle={{
              background: "#f5f5f5",
              boxShadow: "0 0 0 4px #00bcd4",
            }}
          >
            <h3 className="vertical-timeline-element-title">Xactly Tech</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ border: "1px solid lightgray", boxShadow: "none" }}
            contentArrowStyle={{ borderRight: "7px solid #00bcd4" }}
            iconStyle={{
              background: "#f5f5f5",
              boxShadow: "0 0 0 4px #00bcd4",
            }}
          >
            <h3 className="vertical-timeline-element-title">Xactly Tech</h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </ExpTimeLineContainer>
    </CustomCard>
  );
};

export default Experience;
