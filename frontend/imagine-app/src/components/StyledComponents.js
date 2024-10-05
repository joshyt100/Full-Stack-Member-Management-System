import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: black;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #d3d3d3;
  margin-bottom: 2rem;
`;

export const Section = styled.div`
  width: 80%;
  margin: 20px 0;
  padding: 20px;
  background-color: #a9a9a9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin: 10px 0;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05); /* Slightly increases size */
  }

  &:active {
    transform: scale(0.95); /* Shrinks back when clicked */
  }
`;

export const DeleteButton = styled.button`
  background-color: grey;
  color: white;
  margin-right: 20px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: #333;
    transform: scale(1.05); /* Slightly increases size */
  }

  &:active {
    transform: scale(0.95); /* Shrinks back when clicked */
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
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MemberItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 10px;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MemberDetail = styled.div`
  padding: 5px;
  font-size: 0.9rem;
  color: #333;
  line-height: 1.4;
`;

export const DetailLabel = styled.span`
  font-weight: bold;
  color: #555;
  margin-right: 10px;
`;

export const MemberName = styled.div`
  font-size: 1.2rem;
  color: #333;
  flex: 1;
`;

export const MemberRole = styled.div`
  font-size: 1rem;
  color: #666;
  flex: 1;
`;

export const RoleSection = styled.div`
  margin-bottom: 20px;
`;

export const RoleTitle = styled.h2`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 10px;
`;

export const NameTitle = styled.h2`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 10px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;
