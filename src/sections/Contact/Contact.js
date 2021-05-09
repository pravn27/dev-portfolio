import React from "react";
import CustomCard from "../../components/CustomCard/CustomCard";
import { LeftSideContainer } from "./Styled";

const Contact = () => {
  return (
    <CustomCard title="Get in touch">
      <div className="row">
        <LeftSideContainer className="col-md-4">
          <img
            className="mx-auto d-block"
            src="https://avatars.githubusercontent.com/u/17290429?v=4"
            alt="dev-pic"
            width="150"
            height="150"
          />
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
        </LeftSideContainer>
        <div className="col-md-8">Lets connect & want to discuss together</div>
      </div>
    </CustomCard>
  );
};

export default Contact;
