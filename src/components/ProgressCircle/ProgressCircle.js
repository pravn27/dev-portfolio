import React from "react";
import { easeQuadInOut } from "d3-ease";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "../AnimatedProgressProvider/AnimatedProgressProvider";
import { ProgressContainer } from "./Styled";
import { customTheme } from "../../theme/theme";

const { primaryColor, secondaryColor } = customTheme;

const ProgressCircle = ({ percentage }) => {
  return (
    <AnimatedProgressProvider
      valueStart={0}
      valueEnd={percentage}
      duration={2}
      easingFunction={easeQuadInOut}
    >
      {(value) => {
        const roundedValue = Math.round(value);
        return (
          <ProgressContainer>
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              strokeWidth={6}
              styles={buildStyles({
                pathTransition: "none",
                pathColor: primaryColor,
                textColor: secondaryColor,
                textSize: "18px",
              })}
            />
          </ProgressContainer>
        );
      }}
    </AnimatedProgressProvider>
  );
};

export default ProgressCircle;
