import styled from "styled-components";
import DatePicker from "react-datepicker";

export const ProjectPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000000;
  min-height: 100vh;
  font-family: "Raleway", Arial, sans-serif;
`;

export const ProjectItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "name"
    "description"
    "url"
    "members";
  align-items: center;
  gap: 12px;
  padding: 20px;
  margin-bottom: 15px;
  background: linear-gradient(to bottom, #1f1f23, #2b2b30 70%, #4a4a52 90%);
  border: 1px solid rgba(45, 45, 55, 0.5);
  border-radius: 15px;
  box-shadow:
    0 4px 10px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-7px);
    background: linear-gradient(to bottom, #1a1a1e, #28282e 70%, #3c3c46 90%);
    box-shadow:
      0 12px 25px rgba(0, 0, 0, 0.3),
      0 0 12px rgba(90, 90, 100, 0.5);
    border-color: rgba(70, 70, 80, 0.5);
  }

  color: #d0e3d0;
  font-family: "Raleway", sans-serif;
`;

export const ProjectName = styled.div`
  grid-area: name;
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: bold;
`;

export const ProjectDescription = styled.div`
  grid-area: description;
  font-size: 1rem;
  color: #e0e0e0;
  line-height: 1.4;
  font-family: "Raleway", sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const ProjectURL = styled.a`
  grid-area: url;
  font-size: 0.9rem;
  color: #80d4ff;
  line-height: 1.4;
  text-decoration: underline;
`;

export const ProjectMembers = styled.div`
  grid-area: members;
  font-size: 1rem;
  color: #e0e0e0;
  line-height: 1.4;
`;

export const ProjectModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  z-index: 1000;
  overflow-y: auto;
`;

export const ProjectModalContent = styled.div`
  background-color: rgba(28, 28, 28, 0.5);
  padding: 40px;
  border-radius: 10px;
  width: 70%;
  max-width: 700px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 25px;
  color: #ffffff;
  font-family: "Raleway", sans-serif;
  animation: slide-in 0.3s ease-out forwards;
`;

export const ProjectInput = styled.input`
  width: 95%;
  padding: 12px 15px;
  border: 1px solid #444;
  border-radius: 6px;
  background-color: #1a1a1a;
  color: #ffffff;
  font-size: 1rem;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #888;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
  }
`;

export const ProjectButton = styled.button`
  background-color: #222222;
  color: #ffffff;
  padding: 10px 20px;
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
    background-color: #444444;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ProjectDeleteButton = styled.button`
  position: absolute;
  top: 15px;
  right: 10px;
  background-color: transparent;
  color: #ffffff;
  padding: 5px;
  width: 7rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: rgba(70, 130, 180, 0.3);
    border-color: rgba(70, 130, 180, 0.5);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ProjectSearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #444444;
  border-radius: 4px;
  width: 30%;
  background-color: #1a1a1a;
  color: #ffffff;
  font-size: 0.9rem;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  margin-left: auto;
  margin-top: -25px;
  margin-bottom: 50px;
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
