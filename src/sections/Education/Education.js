import React from "react";
import { MainContainer, Title } from "./Styled";
import CustomCard from "../../components/CustomCard/CustomCard";

const Education = () => {
  return (
    <CustomCard title="Education/Academic projects/Achievements">
      <MainContainer className="row">
        <div className="col-md-6 mb-3">
          <Title>MTech in Computer Science</Title>
          <p className="m-0 secondary-color">
            <i className="fas fa-user-graduate"></i> Vellore Institute of
            Technology, VIT University, Vellore, TN
          </p>
          <p className="secondary-color subtitle-text">
            2014 - 2016 | 8.8 CGPA
          </p>
          <Title>Projects</Title>
          <p className="secondary-color subtitle-text">
            As a part of PG program have undertaken the following projects
            during 2014 and 2015.
          </p>
          <ul className="secondary-color subtitle-text">
            <li>
              Rainfall prediction model using Artificial Neural Network
              Classification during 2st sem, March 2015.{" "}
              <i className="far fa-clock"></i> 3 months
            </li>
            <li>
              Analysis of Huffman and Arithmetic coding algorithm for data
              compression during 1st sem, August 2014.{" "}
              <i className="far fa-clock"></i> 2 months
            </li>
          </ul>
          <Title>Research Publications</Title>
          <ul className="secondary-color subtitle-text">
            <li>
              Presented paper on{" "}
              <strong>
                Rainfall prediction model using Artificial Neural Network
                Classification{" "}
              </strong>
              during 2015 May at VIT University.
            </li>
            <li>
              9th International SET conference conducted in VIT University
              during November 2014 on{" "}
              <strong>
                {" "}
                Data Compression technique using Huffman coding algorithm.
              </strong>
            </li>
          </ul>
          <hr className="d-block d-sm-none d-none d-sm-block d-md-none d-lg-none mb-0" />
        </div>
        <div className="col-md-6 mb-3">
          <Title>Academics Achievements</Title>
          <ul className="secondary-color subtitle-text">
            <li>
              Qualified All India <strong> GATE </strong> Exam in 2014 with
              score of 365 and percentile of 92.55%
            </li>
            <li>
              Secured All India Rank of 933 in <strong> VITMEE </strong>2014
            </li>
            <li>
              Secured All India Rank of 168 in <strong> MITMEE </strong> 2014
            </li>
          </ul>
          <hr />
          <Title>BE in Computer Science</Title>
          <p className="m-0 secondary-color">
            <i className="fas fa-user-graduate"></i> Kalpataru Institute of
            Technology, Visvesvaraya Technological University VTU, KA
          </p>
          <p className="secondary-color subtitle-text">2008 - 2012 | 68%</p>
        </div>
      </MainContainer>
    </CustomCard>
  );
};

export default Education;
