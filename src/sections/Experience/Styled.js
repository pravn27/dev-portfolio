import styled from "styled-components";

export const ExpTimeLineContainer = styled.div`
  && {
    .vertical-timeline::before {
      background: ${({ theme: { primaryColor } }) => primaryColor};
    }
  }
  .secondary-color {
    color: ${({ theme: { secondaryColor } }) => secondaryColor};
  }
  .subtitle-text {
    font-size: ${({ theme: { fontSizeMd } }) => fontSizeMd};
  }
`;

export const Title = styled.h5`
  color: ${({ theme: { primaryColor } }) => primaryColor};
  margin: 0;
  span {
    color: ${({ theme: { secondaryColor } }) => secondaryColor};
    margin-left: 6px;
    font-weight: 400;
    font-size: 16px;
  }
`;

export const SubTitle = styled.h6``;
