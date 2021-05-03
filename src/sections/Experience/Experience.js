import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CustomCard from "../../components/CustomCard/CustomCard";
import { ExpTimeLineContainer, Title, SubTitle } from "./Styled";

const Experience = () => {
  const timeLineElementProps = {
    contentStyle: {
      border: "1px solid lightgray",
      boxShadow: "none",
      marginLeft: "40px",
      top: "-12px",
    },
    contentArrowStyle: {
      borderRight: "7px solid #00bcd4",
    },
    iconStyle: {
      background: "#f5f5f5",
      boxShadow: "0 0 0 4px #00bcd4",
      width: "20px",
      height: "20px",
    },
  };
  return (
    <CustomCard title="Experience">
      <ExpTimeLineContainer>
        <VerticalTimeline layout="1-column-left">
          <VerticalTimelineElement {...timeLineElementProps}>
            <Title>
              Valtech India Systems Ltd
              <span>(Software Engineer - UI ReactJS developer)</span>
            </Title>
            <span className="secondary-color subtitle-text">
              Aug 2017 - Aug 2019 <i className="far fa-clock"></i> 2 Years
            </span>
            <SubTitle className="mt-2">
              Project:
              <span>Voot Web Application & PWA for Mobile</span>
            </SubTitle>
            <SubTitle className="mt-2">
              Client:
              <span>Viacom18 Media</span>
            </SubTitle>
            <SubTitle>
              Overview:
              <span>
                Voot is best in market for media solutions, for audiences with
                varying choices and preferences.
              </span>
            </SubTitle>
            <SubTitle>Roles & Responsibilities: </SubTitle>
            <ul className="secondary-color subtitle-text">
              <li>
                Collecting and understanding the Client requirement,
                implementing in project.
              </li>
              <li>
                Based on Client requirement, come up with best solutions in
                effective way with feedbacks & suggestions in UI/UX designs.
              </li>
              <li>
                Troubleshooting various issues with the testing team for fixing
                bugs and for supporting automation.
              </li>
            </ul>
            <SubTitle>
              Tools & Technologies:
              <span>
                JavaScript, ReactJS, Redux for data management, Mixpanel for
                Analytics, AppBoy for Push Notification, LoginRadius for Social
                login.
              </span>
            </SubTitle>
            <SubTitle>
              Media Player: <span>Kaltura player</span>
            </SubTitle>
          </VerticalTimelineElement>
          <VerticalTimelineElement {...timeLineElementProps}>
            <Title>
              Infobell IT Solutions, TEKSystem
              <span>(Software Developer - UI ReactJS developer)</span>
            </Title>
            <span className="secondary-color subtitle-text">
              Dec 2016 - Aug 2017 <i className="far fa-clock"></i> 9 Months
            </span>
            <SubTitle className="mt-2">
              Project:
              <span>CPX Order Status for HPE Partners</span>
            </SubTitle>
            <SubTitle className="mt-2">
              Client:
              <span>(HPE) DXC Technology</span>
            </SubTitle>
            <SubTitle>
              Overview:
              <span>
                CPX Order Status mobile application for Android and IOS using
                cross platform Cordova. Mainly focus on status of order such as
                Submitted, Accepted, Production, Shipped, Delivered and complete
                Shipping information.
              </span>
            </SubTitle>
            <SubTitle>Roles & Responsibilities: </SubTitle>
            <ul className="secondary-color subtitle-text">
              <li>
                Collecting and understanding the Client requirement,
                implementing in project.
              </li>
              <li>
                Coordinating with the testing team for fixing bugs and for
                supporting automation for build & deployment.
              </li>
            </ul>
            <SubTitle>
              Tools & Technologies:
              <span>
                ReactJS, Redux for data management, Grommet UI Framework,
                Cordova for Android and IOS platform, CICD Jenkins
              </span>
            </SubTitle>
          </VerticalTimelineElement>
          <VerticalTimelineElement {...timeLineElementProps}>
            <Title>
              CodingMart Technologies
              <span>(Product Engineer - UI developer)</span>
            </Title>
            <span className="secondary-color subtitle-text">
              Jan 2016 - Nov 2016 <i className="far fa-clock"></i> 11 Months
            </span>
            <SubTitle className="mt-2">
              Project:
              <span>Social Weaver</span>
            </SubTitle>
            <SubTitle>
              Overview:
              <span>
                Social weaver is platform for vendors to promote their services
                to customers. It’s mainly focused on to make bride between
                customers and service promoters with various categories. ReactJS
                is used to develop components such as login, signup, update
                profile, company information, packages and dashboard.
              </span>
            </SubTitle>
            <SubTitle>Roles & Responsibilities: </SubTitle>
            <ul className="secondary-color subtitle-text">
              <li>
                Collecting and understanding the Client requirement,
                implementing in project.
              </li>
              <li>
                Coordinating with the testing team for fixing bugs and for
                supporting automation for build & deployment.
              </li>
            </ul>
            <SubTitle>
              Tools & Technologies:
              <span>Javascript, JQuery, ReactJS</span>
            </SubTitle>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </ExpTimeLineContainer>
    </CustomCard>
  );
};

export default Experience;
