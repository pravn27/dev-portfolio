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
    <CustomCard title="Experience" scrollId="Experience">
      <ExpTimeLineContainer>
        <VerticalTimeline layout="1-column-left">
          <VerticalTimelineElement {...timeLineElementProps}>
            <div className="mainTitleContainer">
              <Title>
                Xactly Technologies
                <span>(Senior Software Engineer - UI ReactJS developer)</span>
              </Title>
              <span className="location">
                <i className="fas fa-map-marker-alt"></i> Bangalore, India
              </span>
            </div>
            <span className="secondary-color subtitle-text">
              Aug 2019 - Till Present (Current Employer){" "}
              <i className="far fa-clock"></i> 4+ Years
            </span>
            <SubTitle className="mt-2">
              Overview:
              <span>
                Xactly is leading the way in Sales Performance Management, with
                everything businesses need to unleash their true Sales Power.
                Designed for complex, ambitious enterprises, Xactly clears
                immediate sales roadblocks with adaptable products and services
                delivering planning, strategy, and optimization.
              </span>
            </SubTitle>
            <SubTitle>
              Project 1:
              <span>Xactly Insights & Incent Web application</span>
            </SubTitle>
            <SubTitle>
              Overview:
              <span>
                Xactly Insights is the only SPM (Sales Performance Management)
                solution to offer real-time dynamic performance indicators based
                on real pay and performance data from a number of industries.
              </span>
            </SubTitle>
            <SubTitle>
              Project 2:
              <span>Xactly Extend Framework</span>
            </SubTitle>
            <SubTitle>
              Overview:
              <span>
                Extend Framework is Custom application builder, consist mainly
                on application designer & viewer where can build part of
                features according to customer requirements in short period of
                time.
              </span>
            </SubTitle>
            <SubTitle>Roles & Responsibilities </SubTitle>
            <ul className="secondary-color subtitle-text">
              <li>
                Requirement analysis, understanding the business logic and
                implement in project and come up with best solutions in
                effective with feedbacks & suggestions in UI/UX design
                principles.
              </li>
              <li>
                Worked in Agile Methodologies & agile board sprint planning.
              </li>
              <li>Integration of UI and API service layer.</li>
              <li>
                Build & contribute to new components for Xactly Design System
                which adopt in all products of Xactly.
              </li>
              <li>
                Follow best industry practices in UI layout design, maintain
                design document for every features in confluence & unit test
                code coverage of minimum 75%.
              </li>
              <li>
                Troubleshooting various issues with the testing team for fixing
                bugs and supporting automation.
              </li>
            </ul>
            <SubTitle>Tools & Technologies</SubTitle>
            <ul className="secondary-color subtitle-text">
              <li>
                JavaScript, ReactJS, Redux, Styled Components, Webpack, NodeJS,
                Highcharts React
              </li>
              <li>Xactly design system library with Prism design</li>
              <li>Jest, Enzyme & React testing library</li>
              <li>SplitIO for feature enable / disable control</li>
              <li>Analytics with Pendo & Mixpanel</li>
              <li>Jenkins CICD, Docker</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement {...timeLineElementProps}>
            <div className="mainTitleContainer">
              <Title>
                Valtech India Systems Ltd
                <span>(Software Engineer - UI ReactJS developer)</span>
              </Title>
              <span className="location">
                <i className="fas fa-map-marker-alt"></i> Bangalore, India
              </span>
            </div>
            <span className="secondary-color subtitle-text">
              Aug 2017 - Aug 2019 <i className="far fa-clock"></i> 2 Years
            </span>
            <SubTitle className="mt-2">
              Project:
              <a href="https://voot.com/" target="_blank" rel="noreferrer">
                Voot Web Application & PWA for Mobile
              </a>
            </SubTitle>
            <SubTitle className="mt-2">
              Client:
              <a
                href="https://www.viacom18.com/"
                target="_blank"
                rel="noreferrer"
              >
                Viacom18 Media
              </a>
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
                Requirement analysis, understand the business logic & implement
                in project.
              </li>
              <li>
                Based on requirement, come up with best solutions in effective
                way with feedbacks & suggestions in UI/UX designs.
              </li>
              <li>
                Worked in Agile Methodologies & agile board sprint planning.
              </li>
              <li>
                Following best industry practices in UI layout design, unit test
                code coverage of minimum 60%.
              </li>
              <li>
                Troubleshooting various issues with the testing team for fixing
                bugs and for supporting automation.
              </li>
            </ul>
            <SubTitle>
              Tools & Technologies:
              <span>
                JavaScript, ReactJS, Redux for data management, Jest, Mixpanel
                for Analytics, AppBoy for Push Notification, LoginRadius for
                Social login.
              </span>
            </SubTitle>
            <SubTitle>
              Media Player: <span>Kaltura player</span>
            </SubTitle>
          </VerticalTimelineElement>
          <VerticalTimelineElement {...timeLineElementProps}>
            <div className="mainTitleContainer">
              <Title>
                Infobell IT Solutions, TEKSystem
                <span>(Software Developer - UI ReactJS developer)</span>
              </Title>
              <span className="location">
                <i className="fas fa-map-marker-alt"></i> Bangalore, India
              </span>
            </div>
            <span className="secondary-color subtitle-text">
              Dec 2016 - Aug 2017 <i className="far fa-clock"></i> 9 Months
            </span>
            <SubTitle className="mt-2">
              Project:
              <span>CPX Order Status for HPE Partners</span>
            </SubTitle>
            <SubTitle className="mt-2">
              Client:
              <a
                href="https://www.dxc.technology/"
                target="_blank"
                rel="noreferrer"
              >
                DXC Technology (HPE)
              </a>
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
                Collect and understand the Client requirement, implement in
                project.
              </li>
              <li>
                Coordinate with the testing team for fixing bugs and for
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
            <div className="mainTitleContainer">
              <Title>
                CodingMart Technologies
                <span>(Product Engineer - UI developer)</span>
              </Title>
              <span className="location">
                <i className="fas fa-map-marker-alt"></i> Bangalore, India
              </span>
            </div>
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
                Collect and understand the Client requirement, implement in
                project.
              </li>
              <li>
                Coordinate with the testing team for fixing bugs and for
                supporting automation for build & deployment.
              </li>
            </ul>
            <SubTitle>
              Tools & Technologies:
              <span>HTML5, CSS3, Javascript, JQuery, ReactJS</span>
            </SubTitle>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </ExpTimeLineContainer>
    </CustomCard>
  );
};

export default Experience;
