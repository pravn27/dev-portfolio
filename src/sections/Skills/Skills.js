import React from "react";
import CustomCard from "../../components/CustomCard/CustomCard";
import { Title, TopSkillsContainer, SkillCardContainer } from "./Styled";

const Skills = () => {
  return (
    <CustomCard title="Professional Skills">
      <Title>Top Skills</Title>
      <TopSkillsContainer>
        <SkillCardContainer className="card">
          <div className="card-body">
            <h5 className="card-title">ReactJS</h5>
          </div>
        </SkillCardContainer>
        <SkillCardContainer className="card">
          <div className="card-body">
            <h5 className="card-title">ReactJS</h5>
          </div>
        </SkillCardContainer>
        <SkillCardContainer className="card">
          <div className="card-body">
            <h5 className="card-title">ReactJS</h5>
          </div>
        </SkillCardContainer>
      </TopSkillsContainer>
      <Title>Other Skills</Title>
    </CustomCard>
  );
};

export default Skills;
