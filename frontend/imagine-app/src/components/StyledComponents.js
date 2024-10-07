import styled from "styled-components";

import DatePicker from "react-datepicker";

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
  margin: 0px 0;
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
  position: absolute;
  top: 15px;
  right: 10px;
  background-color: rgba(128, 128, 128, 0.2); /* Light grey with transparency */
  color: white;
  padding: 5px;
  width: 7rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: rgba(85, 85, 85, 0.3); /* Darker grey with transparency */
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
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  z-index: 1000;
  overflow-y: auto;
`;

export const ModalContent = styled.div`
  background-color: rgba(28, 28, 28, 0.5);
  padding: 40px;
  border-radius: 10px;
  width: 70%;
  max-width: 700px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #ffffff;
  font-family: "Raleway", sans-serif;
  animation: slide-in 0.3s ease-out forwards;

  @keyframes slide-in {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const MemberItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "name"
    "bio"
    "info"
    "year"
    "major";
  align-items: center;
  gap: 12px;
  padding: 20px;
  margin-bottom: 15px;
  background: linear-gradient(
    to bottom,
    #0f0f11,
    /* Predominantly black at the top */ #0f1f1a 70%,
    /* Very subtle transition to dark green */ #163a2e 90%
      /* Subtle green accent towards the bottom */
  ); /* Subtle gradient from black to dark green */
  border: 1px solid rgba(35, 55, 45, 0.4); /* Subtle greenish border for depth */
  border-radius: 15px;
  box-shadow:
    0 4px 10px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.08); /* Inner shadow for a polished look */
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-7px);
    background: linear-gradient(
      to bottom,
      #0c0d0d,
      /* Even darker blackish tone at the top on hover */ #0f2a1f 70%,
      /* Darker green closer to black */ #224b3c 90%
        /* Dark green near the bottom */
    ); /* Hover effect with a bit more green */
    box-shadow:
      0 12px 25px rgba(0, 0, 0, 0.3),
      0 0 12px rgba(50, 140, 110, 0.5); /* Soft green glow */
    border-color: rgba(50, 140, 110, 0.4); /* Subtle green border on hover */
  }

  /* Text and Content Styles */
  color: #d0e3d0; /* Light gray-green text for readability */
  font-family: "Raleway", sans-serif; /* Consistent font usage */
`;

export const MemberName = styled.div`
  grid-area: name;
  align-self: center;
  justify-self: center;
  font-size: 1.8rem; /* Increased for emphasis */
  color: #ffffff;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin: 0;
`;

export const MemberBio = styled.div`
  grid-area: bio;
  padding: 5px;
  font-size: 1rem;
  color: #ffffff;
  line-height: 1.6;
  font-family: "Raleway", sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  word-wrap: break-word;
  max-height: 100px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const MemberDetail = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  padding: 5px;
  font-size: 0.9rem;
  color: #ffffff;
  line-height: 1.4;
  font-family: "Raleway", sans-serif;
`;

export const MemberYear = styled.div`
  grid-area: year;
  display: flex;
  flex-direction: column;
  padding: 5px;
  font-size: 0.9rem;
  color: #ffffff;
  line-height: 1.4;
  font-family: "Raleway", sans-serif;
`;

export const MemberMajor = styled.div`
  grid-area: major;
  display: flex;
  flex-direction: column;
  padding: 5px;
  font-size: 0.9rem;
  color: #ffffff;
  line-height: 1.4;
  font-family: "Raleway", sans-serif;
`;

export const MemberRole = styled.div`
  font-size: 1rem;
  color: #f2f2f2;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  text-align: left;
`;

export const DetailLabel = styled.span`
  font-weight: bold;
  color: #cccccc;
  margin-right: 10px;
  font-family: "Raleway", sans-serif;
`;

export const RoleSection = styled.div`
  margin-bottom: 20px;
`;

export const RoleTitle = styled.h2`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 10px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
`;

export const NameTitle = styled.h2`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 10px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
`;

export const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #444444;
  border-radius: 4px;
  width: 30%;
  background-color: #1a1a1a;
  color: #ffffff;
  font-family: "Raleway", sans-serif;
  font-size: 0.9rem;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  margin-left: auto;
  margin-bottom: 10px;
  display: block;

  &:hover {
    border-color: #666666;
  }

  &:focus {
    outline: none;
    border-color: #ffffff;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  }
`;

export const ModalInput = styled.input`
  width: 95%; /* Full width for consistency */
  padding: 12px 15px; /* Comfortable padding for easy input */
  border: 1px solid #444; /* Subtle border for separation */
  border-radius: 6px; /* Slight rounding for smoothness */
  background-color: #1a1a1a; /* Dark background to match modal theme */
  color: #ffffff; /* White text for readability */
  font-size: 1rem; /* Consistent font size */
  font-family: "Raleway", sans-serif; /* Matching font family */
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease; /* Smooth transitions */

  &:focus {
    outline: none; /* Remove default focus outline */
    border-color: #888; /* Lighter border on focus */
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.2); /* Soft glow effect */
  }

  &::placeholder {
    color: #999; /* Light gray placeholder for subtle hint */
    opacity: 0.8;
  }
`;

// ModalSelect styling for dropdown
export const ModalSelect = styled.select`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #444;
  border-radius: 6px;
  background-color: #1a1a1a;
  color: #ffffff;
  font-size: 1rem;
  font-family: "Raleway", sans-serif;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #888;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
  }
`;

// StyledDatePicker styling for date picker
export const StyledDatePicker = styled(DatePicker)`
  padding: 12px 15px;
  border: 1px solid #444;
  border-radius: 6px;
  width: 95%;
  background-color: #1a1a1a;
  color: #ffffff;
  font-size: 1rem;
  font-family: "Raleway", sans-serif;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #888;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
  }
`;
