import styled from "styled-components";

export const LeftSideContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  img {
    border-radius: 50%;
    padding: 2px;
    border: 2px solid #00bcd4;
    margin-bottom: 10px;
  }
`;

export const Location = styled.span`
  color: ${({ theme: { secondaryColor } }) => secondaryColor};
`;

export const RightSideContainer = styled.div`
  .secondary-color {
    color: ${({ theme: { secondaryColor } }) => secondaryColor};
  }
  .subtitle-text {
    font-size: ${({ theme: { fontSizeMd } }) => fontSizeMd};
  }
  button {
    border: 1px solid lightgray;
  }
  .btnContainer {
    a {
      color: ${({ theme: { primaryColor } }) => primaryColor};
      font-weight: 500;
    }
  }
`;
