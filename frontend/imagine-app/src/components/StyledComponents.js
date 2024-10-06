import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000000; /* Full black background */
  min-height: 100vh;
  font-family: "Raleway", Arial, sans-serif; /* Apply Raleway font */
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #ffffff; /* White for readability */
  margin-bottom: 2rem;
  font-family: "Raleway", sans-serif; /* Apply Raleway font */
  font-weight: 700; /* Use a bold weight for emphasis */
`;

export const Section = styled.div`
  width: 80%;
  margin: 20px 0;
  padding: 20px;
  background-color: #000000; /* Keep the section background black */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1); /* Light shadow for contrast */
  font-family: "Raleway", sans-serif; /* Apply Raleway font */
`;

export const Button = styled.button`
  background-color: #222222; /* Darker gray for buttons */
  color: #ffffff; /* White text */
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin: 10px 0;
  font-family: "Raleway", sans-serif; /* Apply Raleway font */
  font-weight: 500; /* Medium weight for buttons */
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: #444444; /* Slightly lighter gray */
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const DeleteButton = styled.button`
  background-color: #333333; /* Slightly lighter dark gray */
  color: #ffffff; /* White text */
  margin-right: 20px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Raleway", sans-serif; /* Apply Raleway font */
  font-weight: 500; /* Medium weight */
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: #555555; /* Lighter gray */
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9); /* Almost opaque black */
  font-family: "Raleway", sans-serif; /* Apply Raleway font */
`;

export const ModalContent = styled.div`
  background-color: #222222; /* Dark gray for the modal background */
  padding: 30px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.2); /* Light shadow for contrast */
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: "Raleway", sans-serif; /* Apply Raleway font */
`;
export const MemberItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 10px;
  padding: 15px;
  margin-bottom: 10px;
  background: linear-gradient(
    135deg,
    #1a1a1a,
    #3a3a3a
  ); /* Dark gray gradient */
  border: 1px solid #222222; /* Subtle border */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1); /* Subtle shadow for default state */
  font-family: "Raleway", sans-serif; /* Apply Raleway font */
  color: #ffffff; /* Ensure text remains white */
  transition: all 0.3s ease; /* Smooth transition for all properties */

  &:hover {
    transform: translateY(-5px); /* Moves the tile up slightly */
    box-shadow: 0 6px 12px rgba(255, 255, 255, 0.3); /* More prominent shadow on hover */
  }
`;
export const MemberDetail = styled.div`
  padding: 5px;
  font-size: 0.9rem;
  color: #ffffff; /* White text for readability */
  line-height: 1.4;
  font-family: "Raleway", sans-serif; /* Apply Raleway font */
`;

export const DetailLabel = styled.span`
  font-weight: bold;
  color: #cccccc; /* Light gray for labels */
  margin-right: 10px;
  font-family: "Raleway", sans-serif; /* Apply Raleway font */
`;

export const MemberName = styled.div`
  font-size: 1.2rem;
  color: #ffffff; /* White for strong readability */
  flex: 1;
  font-family: "Raleway", sans-serif; /* Apply Raleway font */
  font-weight: 600; /* Slightly bolder weight for names */
`;

export const MemberRole = styled.div`
  font-size: 1rem;
  color: #f2f2f2; /* Light gray for roles */
  flex: 1;
  font-family: "Raleway", sans-serif; /* Apply Raleway font */
  font-weight: 400; /* Regular weight for roles */
`;

export const RoleSection = styled.div`
  margin-bottom: 20px;
`;

export const RoleTitle = styled.h2`
  font-size: 1.5rem;
  color: #ffffff; /* White for readability */
  margin-bottom: 10px;
  font-family: "Raleway", sans-serif; /* Apply Raleway font */
  font-weight: 700; /* Bold weight for titles */
`;

export const NameTitle = styled.h2`
  font-size: 1.5rem;
  color: #ffffff; /* White for readability */
  margin-bottom: 10px;
  font-family: "Raleway", sans-serif; /* Apply Raleway font */
  font-weight: 700; /* Bold weight */
`;

export const SearchInput = styled.input`
  padding: 8px 12px; /* Sleek padding */
  border: 1px solid #444444; /* Dark gray border */
  border-radius: 4px;
  width: 50%; /* Adjust width to make it more compact */
  background-color: #1a1a1a; /* Dark background */
  color: #ffffff; /* White text for readability */
  font-family: "Raleway", sans-serif; /* Use Raleway font */
  font-size: 0.9rem; /* Slightly smaller font size */
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  margin-left: auto; /* Pushes the search bar to the right */
  margin-bottom: 1rem;
  display: block; /* Ensure it's a block element for margin adjustments */

  &:hover {
    border-color: #666666; /* Lighten border on hover */
  }

  &:focus {
    outline: none; /* Remove default outline */
    border-color: #ffffff; /* White border on focus */
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2); /* Soft glow on focus */
  }
`;
