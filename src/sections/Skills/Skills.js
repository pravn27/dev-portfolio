import React from "react";
import CustomCard from "../../components/CustomCard/CustomCard";
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle";
import {
  Title,
  TopSkillsContainer,
  OtherSkillsContainer,
  SkillCardContainer,
} from "./Styled";

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
    "Webpack",
    "Parcel",
    "AngularJS V1",
    "JQuery",
    "React Native",
  ],
  testing: ["Jest", "React Testing Library"],
  versionControl: ["Github", "Bitbucket", "SVN"],
  platforms: ["Linux/Ubuntu", "Mac OS", "Windows 10"],
};

const Skills = () => {
  const {
    topSkills,
    otherSkills,
    testing,
    versionControl,
    platforms,
  } = professionalSkills;
  return (
    <CustomCard title="Professional Skills">
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
      <OtherSkillsContainer>
        {otherSkills.map((skill) => (
          <SkillCardContainer key={skill} className="card">
            <div className="card-body">
              <h6 className="card-title mb-0">{skill}</h6>
            </div>
          </SkillCardContainer>
        ))}
      </OtherSkillsContainer>
      <Title>Javascript Testing</Title>
      <OtherSkillsContainer>
        {testing.map((skill) => (
          <SkillCardContainer key={skill} className="card">
            <div className="card-body">
              <h6 className="card-title mb-0">{skill}</h6>
            </div>
          </SkillCardContainer>
        ))}
      </OtherSkillsContainer>
      <Title>Version control</Title>
      <OtherSkillsContainer>
        {versionControl.map((skill) => (
          <SkillCardContainer key={skill} className="card">
            <div className="card-body">
              <h6 className="card-title mb-0">{skill}</h6>
            </div>
          </SkillCardContainer>
        ))}
      </OtherSkillsContainer>
      <Title>Platforms / VM / OS</Title>
      <OtherSkillsContainer>
        {platforms.map((skill) => (
          <SkillCardContainer key={skill} className="card">
            <div className="card-body">
              <h6 className="card-title mb-0">{skill}</h6>
            </div>
          </SkillCardContainer>
        ))}
      </OtherSkillsContainer>
    </CustomCard>
  );
};

export default Skills;
