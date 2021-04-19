import React from "react";
import { MainContainer } from "./Styled";

const CustomCard = ({ children, title }) => {
  return (
    <MainContainer className="card">
      <div className="card-body">
        <h4 class="card-title text-center mb-4">{title}</h4>
        {children}
      </div>
    </MainContainer>
  );
};

export default CustomCard;
