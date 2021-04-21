import styled from "styled-components";

export const Title = styled.h6`
  color: ${({ theme: { primaryColor } }) => primaryColor};
`;

export const TopSkillsContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding-bottom: 30px;

  // Small devices (mobiles)
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  // Medium devices (tablets)
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  // Large devices (Desktop)
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  // Extra large devices (Large desktop)
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const SkillCardContainer = styled.div`
  text-align: center;
  border: 1px solid lightgray;
  border-radius: 4px;

  :hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
