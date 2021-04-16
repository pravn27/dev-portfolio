import React from "react";
import { Title, SubTitleText } from "./Styled";
import CustomCard from "../../components/CustomCard/CustomCard";

const Education = () => {
  return (
    <CustomCard title="Education/Academic projects/Achievements">
      <div className="row">
        <div className="col-md-6 mb-3">
          <Title>MTech CSE</Title>
          <p className="m-0 text-muted">
            Vellore Institute of Technology, VIT University, Vellore, TN
          </p>
          <SubTitleText className="text-muted">
            2014 - 2016 | 8.8 CGPA
          </SubTitleText>
          <Title>Projects</Title>
          <SubTitleText className="text-muted">
            As a part of PG program have undertaken the following projects
            during 2014 and 2015.
          </SubTitleText>
          <ul className="text-muted">
            <li>
              Rainfall prediction model using Artificial Neural Network
              Classification during 2st sem, March 2015. Duration: 3 months
            </li>
            <li>
              Analysis of Huffman and Arithmetic coding algorithm for data
              compression during 1st sem, August 2014. Duration: 2 months
            </li>
          </ul>
        </div>
        <div className="col-md-6 mb-3">
          <Title>BE CSE</Title>
          <p className="m-0 text-muted">
            Kalpataru Institute of Technology, Visvesvaraya Technological
            University VTU, KA
          </p>
          <SubTitleText className="text-muted fw-light">
            2008 - 2012 | 68%
          </SubTitleText>
        </div>
      </div>
    </CustomCard>
  );
};

export default Education;
