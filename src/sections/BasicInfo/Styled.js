import styled from "styled-components";

export const MainContainer = styled.div`
  background: ${({ theme: { primaryColor } }) => primaryColor};
  padding: 15px;
`;

export const LinkContainer = styled.div`
  display: flex;

  && .BtnContainer {
    button {
      background: #008fa1;
      color: white;
    }
    button: hover, button: active {
      background: #00a5bb;
      color: white;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    line-height: 3em;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const DevInfoContainer = styled.div`
  img {
    border-radius: 50%;
  }
`;
