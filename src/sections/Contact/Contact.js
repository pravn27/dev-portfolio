import React from "react";
import CustomCard from "../../components/CustomCard/CustomCard";
import { LeftSideContainer, Location, RightSideContainer } from "./Styled";

const contactInfo = {
  title: "Get in touch",
  name: "Praveen Shekarappa",
  imgUrl: "https://avatars.githubusercontent.com/u/17290429?v=4",
  location: "Bangalore, India",
  description:
    "Available for freelance and open to any ideas of cooperation. Talk to me about a project collaboration, related stuffs or just say hi. If interested and have some cool projects to work on, feel free to contact me.",
  subHeading:
    "I can help and support mainly on Frontend/UI tech with following",
  keyPoints: [
    "Based on business requirement, come up with best design principles in UI/UX designs.",
    "Best UI layout design implementation.",
    "Frontend tech stacks with HTML5, CSS3, Javascript & ReactJS, Redux.",
  ],
  socialConnect: [
    {
      name: "gmail",
      iconClassName: "fas fa-envelope fa-lg",
      targetUrl: "praveen.sri27@gmail.com",
    },
    {
      name: "github",
      iconClassName: "fab fa-github fa-lg",
      targetUrl: "https://github.com/pravn27",
    },
    {
      name: "linkedIn",
      iconClassName: "fab fa-linkedin fa-lg",
      targetUrl: "https://www.linkedin.com/in/praveen-s-157b365a/",
    },
  ],
};

const Contact = () => {
  const {
    title,
    name,
    imgUrl,
    location,
    description,
    subHeading,
    keyPoints,
    socialConnect,
  } = contactInfo;
  return (
    <CustomCard title={title} scrollId="Contact">
      <div className="row">
        <LeftSideContainer className="col-md-4">
          <img
            className="mx-auto d-block"
            src={imgUrl}
            alt="dev-pic"
            width="150"
            height="150"
          />
          <h3>{name}</h3>
          <Location>
            <i className="fas fa-map-marker-alt fa-lg"></i>
            <span className="ml-2">{location}</span>
          </Location>
        </LeftSideContainer>
        <RightSideContainer className="col-md-8">
          <hr className="d-block d-sm-none d-none d-sm-block d-md-none d-lg-none" />
          <p>{description}</p>
          <h6>{subHeading}</h6>
          <ul className="secondary-color subtitle-text">
            {keyPoints.map((item, index) => (
              <li key={index}> {item} </li>
            ))}
          </ul>
          <hr />
          <h6>Let's get social</h6>
          <div className="btnContainer">
            {socialConnect.map(({ name, iconClassName, targetUrl }) => {
              return (
                <div className="mb-2" key={name}>
                  <button
                    className="btn btn-light mr-2"
                    onClick={() => {
                      if (name === "gmail") {
                        window.location = "mailto:praveen.sri27@gmail.com";
                      } else {
                        window.open(targetUrl);
                      }
                    }}
                  >
                    <i className={iconClassName}></i>
                  </button>
                  <a
                    href={name !== "gmail" ? targetUrl : `mailto:${targetUrl}`}
                    target={name !== "gmail" ? "_blank" : ""}
                    rel="noreferrer"
                  >
                    {targetUrl}
                  </a>
                </div>
              );
            })}
          </div>
        </RightSideContainer>
      </div>
    </CustomCard>
  );
};

export default Contact;
