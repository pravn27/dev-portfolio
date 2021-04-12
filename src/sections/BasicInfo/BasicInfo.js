import React from "react";
import { MainContainer, LinkContainer, DevInfoContainer } from "./Styled";

const BasicInfo = () => {
  return (
    <MainContainer>
      <LinkContainer className="mb-3">
        <div>
          <button className="btn btn-light mr-2">
            <i class="fab fa-github fa-lg"></i>
          </button>
          <button className="btn btn-light mr-2">
            <i class="fab fa-linkedin fa-lg"></i>
          </button>
        </div>
        <div>
          <button className="btn btn-light mr-2">
            <i class="fas fa-paper-plane"></i> Hire Me
          </button>
          <button className="btn btn-light">
            <i class="fas fa-download"></i> Download My Resume
          </button>
        </div>
      </LinkContainer>
      <DevInfoContainer>
        <img
          className="img-thumbnail mx-auto d-block"
          src="https://avatars.githubusercontent.com/u/17290429?v=4"
          alt="dev-pic"
          width="150"
          height="150"
        />
        <h1 className="text-center text-white">Praveen S</h1>
        <p class="lead text-center text-white">
          Senior Software Engineer | ReactJS Developer | UI/UX Web/Mobile app
          developer
        </p>
      </DevInfoContainer>
    </MainContainer>
  );
};

export default BasicInfo;
