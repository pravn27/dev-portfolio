import styled from "styled-components";
import { Link } from "react-scroll";

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background: ${({ theme: { primaryColor } }) => primaryColor};
  border-top: 2px solid #008fa1;
  position: sticky;
  top: 0;
  z-index: 99;

  && {
    a.active {
      color: white;
      border-bottom: 2px solid;
    }
  }
`;

export const LinkContainer = styled(Link)`
  && {
    margin-right: 30px;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;

    :hover {
      color: white;
    }
  }
`;
