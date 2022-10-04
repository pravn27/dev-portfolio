import React from "react";
import { MainContainer, LinkContainer, DevInfoContainer } from "./Styled";

const jsonResponse = {
  fullName: "Praveen Shekarappa",
  email: "praveen.sri27@gmail.com",
  role: "Senior Software Engineer | ReactJS Developer | UI/UX Web/Mobile app developer",
  description:
    "A result-orientated professional over 6+ Year's experience in UI Software Development in web and mobile application development with frontend cutting edge technologies & extensive experience on ReactJS & JavaScript in building web application interface.",
  avatarImgUrl: "https://avatars.githubusercontent.com/u/17290429?v=4",
  githubUrl: "https://github.com/pravn27",
  linkedinUrl: "https://www.linkedin.com/in/praveen-s-157b365a/",
  downloadCvUrl:
    "https://drive.google.com/file/d/1JaT7xaI82I0vJ7jzpycR9nlN0TSTPDvK/view?usp=sharing",
};

const BasicInfo = () => {
  const {
    fullName,
    email,
    role,
    description,
    avatarImgUrl,
    githubUrl,
    linkedinUrl,
    downloadCvUrl,
  } = jsonResponse;

  const openInNewTab = (url) => window.open(url);
  const openMailTo = () => (window.location = `mailto:${email}`);

  return (
    <MainContainer>
      <LinkContainer className="mb-3">
        <div className="BtnContainer">
          <button className="btn btn-light mr-2" onClick={() => openMailTo()}>
            <i className="fas fa-envelope fa-lg"></i>
          </button>
          <button
            className="btn btn-light mr-2"
            onClick={() => openInNewTab(githubUrl)}
          >
            <i className="fab fa-github fa-lg"></i>
          </button>
          <button
            className="btn btn-light mr-2"
            onClick={() => openInNewTab(linkedinUrl)}
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </button>
        </div>
        <div className="BtnContainer">
          <button className="btn btn-light mr-2" onClick={() => openMailTo()}>
            <i className="fas fa-paper-plane"></i> HIRE ME
          </button>
          <button
            className="btn btn-light"
            onClick={() => openInNewTab(downloadCvUrl)}
          >
            <i className="fas fa-download"></i> DOWNLOAD CV
          </button>
        </div>
      </LinkContainer>
      <DevInfoContainer>
        <img
          className="img-thumbnail mx-auto d-block"
          src={avatarImgUrl}
          alt="dev-pic"
          width="150"
          height="150"
        />
        <h1 className="text-center text-white">{fullName}</h1>
        <p className="lead text-center text-white">
          <strong>{role}</strong>
        </p>
        <p className="lead text-center text-white">{description}</p>
      </DevInfoContainer>
    </MainContainer>
  );
};

export default BasicInfo;
