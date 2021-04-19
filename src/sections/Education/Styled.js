import styled from "styled-components";

export const MainContainer = styled.div`
  .secondary-color {
    color: ${({ theme: { secondaryColor } }) => secondaryColor};
  }
  .subtitle-text {
    font-size: ${({ theme: { fontSizeMd } }) => fontSizeMd};
  }
`;

export const Title = styled.h6`
  color: ${({ theme: { primaryColor } }) => primaryColor};
  margin: 0;
`;
