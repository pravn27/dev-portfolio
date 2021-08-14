import React from "react";
import { MainContainer, LinkContainer, DevInfoContainer } from "./Styled";

const BasicInfo = () => {
  return (
    <MainContainer>
      <LinkContainer className="mb-3">
        <div className="BtnContainer">
          <button
            className="btn btn-light mr-2"
            onClick={() => (window.location = "mailto:praveen.sri27@gmail.com")}
          >
            <i className="fas fa-envelope fa-lg"></i>
          </button>
          <button
            className="btn btn-light mr-2"
            onClick={() => window.open("https://github.com/pravn27")}
          >
            <i className="fab fa-github fa-lg"></i>
          </button>
          <button
            className="btn btn-light mr-2"
            onClick={() =>
              window.open("https://www.linkedin.com/in/praveen-s-157b365a/")
            }
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </button>
        </div>
        <div className="BtnContainer">
          <button
            className="btn btn-light mr-2"
            onClick={() => (window.location = "mailto:praveen.sri27@gmail.com")}
          >
            <i className="fas fa-paper-plane"></i> HIRE ME
          </button>
          <button
            className="btn btn-light"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1o7H5oGPH4Q8YtWFbu7XjjDumifNfA_CW/view?usp=sharing"
              )
            }
          >
            <i className="fas fa-download"></i> DOWNLOAD CV
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
        <h1 className="text-center text-white">Praveen Shekarappa</h1>
        <p className="lead text-center text-white">
          <strong>
            Senior Software Engineer | ReactJS Developer | UI/UX Web/Mobile app
            developer
          </strong>
        </p>
        <p className="lead text-center text-white">
          A result-orientated professional over 5.7 Year’s experience in UI
          Software Development in web and mobile application development with
          frontend cutting edge technologies & extensive experience on ReactJS &
          JavaScript in building web application interface.
        </p>
      </DevInfoContainer>
    </MainContainer>
  );
};

export default BasicInfo;
