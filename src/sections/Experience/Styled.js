import styled from "styled-components";

export const ExpTimeLineContainer = styled.div`
  && {
    .vertical-timeline::before {
      background: ${({ theme: { primaryColor } }) => primaryColor};
      left: 9px;
      width: 2px;
      height: 95%;
      top: 30px;
    }

    .vertical-timeline-element-icon::before {
      content: "";
      position: absolute;
      border: 4px solid white;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${({ theme: { primaryColor } }) => primaryColor};
    }

    .vertical-timeline-element-date {
      display: none;
    }
  }
  .secondary-color {
    color: ${({ theme: { secondaryColor } }) => secondaryColor};
  }
  .subtitle-text {
    font-size: ${({ theme: { fontSizeMd } }) => fontSizeMd};
  }
  .mainTitleContainer {
    display: flex;
    justify-content: space-between;

    @media (max-width: 992px) {
      flex-direction: column;
    }

    .location {
      color: ${({ theme: { secondaryColor } }) => secondaryColor};
      font-size: ${({ theme: { fontSizeMd } }) => fontSizeMd};
    }
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

export const SubTitle = styled.h6`
  span {
    color: ${({ theme: { secondaryColor } }) => secondaryColor};
    margin-left: 5px;
    font-weight: 400;
    font-size: 14px;
  }
  a {
    color: #008fa1;
    margin-left: 5px;
    font-size: 14px;
  }
  a: hover {
    color: ${({ theme: { primaryColor } }) => primaryColor};
  }
`;
