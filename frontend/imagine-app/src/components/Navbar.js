import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: rgba(20, 20, 20, 0.8); // Dark and slightly transparent background
  backdrop-filter: blur(5px); // Blurring the background content
  border-radius: 10px; // Rounded corners for the navbar
  border: 1px solid rgba(255, 255, 255, 0.1); // Border for depth
  border-style: solid;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); // Shadow for depth
  height: 60px;
  margin: 20px; // Adds some space around the navbar
`;

const StyledLink = styled(NavLink)`
  color: #c0c0c0; // Subtle silver text color
  text-decoration: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: 500;
  transition:
    color 0.3s ease-in-out,
    transform 0.2s ease-out;

  &:hover {
    color: #ffffff; // Bright white on hover for visibility
    transform: translateY(-2px); // Slight lift to emphasize hover
  }

  &.active {
    color: #004d00; // Very dark green
    border-bottom: 3px solid #004d00; // Underline effect for active link using very dark green
    padding-bottom: 8px; // Adjust padding to accommodate border without shifting text
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <StyledLink to="/members">Members</StyledLink>
      <StyledLink to="/projects">Projects</StyledLink>
    </NavbarContainer>
  );
}
