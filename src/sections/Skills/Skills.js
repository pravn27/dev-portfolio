import React from "react";
import CustomCard from "../../components/CustomCard/CustomCard";
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle";
import { Title, TopSkillsContainer, SkillCardContainer } from "./Styled";

const professionalSkills = {
  topSkills: [
    {
      title: "HTML5 & CSS3",
      subTitle: "Expert - 5 Years",
      percentage: 85,
    },
    {
      title: "Responsive UI Design",
      subTitle: "Senior - 4 Years",
      percentage: 80,
    },
    {
      title: "Bootstrap 4/5",
      subTitle: "Senior - 3 Years",
      percentage: 70,
    },
    {
      title: "Javascript",
      subTitle: "Senior - 5 Years",
      percentage: 85,
    },
    {
      title: "ReactJS",
      subTitle: "Expert - 4 Years",
      percentage: 90,
    },
  ],
  otherSkills: [
    "Styled Components",
    "Redux",
    "Webpack",
    "Parcel",
    "AngularJS V1",
    "JQuery",
    "React Native",
  ],
  testing: ["Jest", "Enzyme", "React Testing Library"],
  versionControl: ["Github", "Bitbucket", "SVN"],
  projectPlan: ["Jira Agile board"],
  platforms: ["Linux/Ubuntu", "Mac OS", "Windows 10"],
};

const Skills = () => {
  const {
    topSkills,
    otherSkills,
    testing,
    projectPlan,
    versionControl,
    platforms,
  } = professionalSkills;
  return (
    <CustomCard title="Professional Skills" scrollId="Skills">
      <Title>Top - Web / Mobile Technology & Scripting</Title>
      <TopSkillsContainer>
        {topSkills.map(({ title, subTitle, percentage }) => (
          <SkillCardContainer key={title} className="card">
            <div className="card-body">
              <ProgressCircle percentage={percentage} />
              <h6 className="card-title mb-0">{title}</h6>
              <span className="secondary-color subtitle-text">{subTitle}</span>
            </div>
          </SkillCardContainer>
        ))}
      </TopSkillsContainer>
      <Title>Others - Web / Mobile Technology & Scripting</Title>
      <ul>
        <li>
          {otherSkills.map((skill, index) => (
            <span key={index}>
              {skill}
              {index < otherSkills.length - 1 && ","}{" "}
            </span>
          ))}
        </li>
      </ul>
      <Title>Javascript Testing</Title>
      <ul>
        <li>
          {testing.map((skill, index) => (
            <span key={index}>
              {skill}
              {index < testing.length - 1 && ","}{" "}
            </span>
          ))}
        </li>
      </ul>
      <Title>Project Plan</Title>
      <ul>
        <li>
          {projectPlan.map((skill, index) => (
            <span key={index}>
              {skill}
              {index < projectPlan.length - 1 && ","}{" "}
            </span>
          ))}
        </li>
      </ul>
      <Title>Version control</Title>
      <ul>
        <li>
          {versionControl.map((skill, index) => (
            <span key={index}>
              {skill}
              {index < versionControl.length - 1 && ","}{" "}
            </span>
          ))}
        </li>
      </ul>
      <Title>Platforms / VM / OS</Title>
      <ul>
        <li>
          {platforms.map((skill, index) => (
            <span key={index}>
              {skill}
              {index < platforms.length - 1 && ","}{" "}
            </span>
          ))}
        </li>
      </ul>
    </CustomCard>
  );
};

export default Skills;
