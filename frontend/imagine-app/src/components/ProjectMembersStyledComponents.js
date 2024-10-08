import styled from "styled-components";

// Wrapper for Project Members Section
export const ProjectMembers = styled.div`
  grid-area: members;
  font-size: 1rem;
  color: #e0e0e0;
  line-height: 1.4;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
`;

// Individual Member Button Styling
export const MemberLabel = styled.span`
  font-weight: bold;
  color: white;
  margin-right: 8px;
`;

export const MemberButton = styled.button`
  background-color: transparent;
  color: white;
  padding: 5px 10px;
  border: 2px solid rgba(128, 212, 255, 0.2); /* Similar border style with turquoise tint */
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: rgba(
      45,
      45,
      52,
      0.3
    ); /* Slight background change on hover */
    border-color: rgba(
      128,
      212,
      255,
      0.5
    ); /* Slightly brighter turquoise border */
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    border-color: #80d4ff;
  }
`;
