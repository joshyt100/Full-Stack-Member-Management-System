import React, { useState } from "react";
import axios from "axios";
import {
  ModalWrapper,
  ModalContent,
  ModalInput,
  Button,
  ModalSelect,
  StyledDatePicker,
} from "./StyledComponents";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateMemberModal = ({ member, onClose }) => {
  const parseDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date string: ${dateString}`);
      return null;
    }
    return date;
  };

  const [updatedMember, setUpdatedMember] = useState({
    ...member,
    gradDate: parseDate(member.gradDate),
  });

  const handleChange = (e) => {
    setUpdatedMember({ ...updatedMember, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setUpdatedMember({
      ...updatedMember,
      gradDate: date, // Keep as Date object
    });
  };

  const handleUpdate = () => {
    const adjustedGradDate = new Date(updatedMember.gradDate);
    adjustedGradDate.setDate(updatedMember.gradDate.getDate() - 1);

    const memberData = {
      ...updatedMember,
      gradDate: adjustedGradDate
        ? adjustedGradDate.toISOString().split("T")[0] // Format as 'YYYY-MM-DD'
        : null,
    };

    axios
      .put(`/members/${updatedMember.id}`, memberData)
      .then(() => {
        alert("Member updated successfully!");
        onClose();
      })
      .catch((error) => {
        console.error("Error updating member:", error);
        alert(
          `Failed to update member: ${
            error.response ? error.response.data.detail : "No server response"
          }`,
        );
      });
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <h2>Update Member</h2>
        <ModalInput
          type="text"
          name="name"
          placeholder="Name"
          value={updatedMember.name}
          onChange={handleChange}
        />
        <ModalSelect
          name="major"
          value={updatedMember.major}
          onChange={handleChange}
        >
          <option value="">Select Major</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Biology">Biology</option>
          <option value="Gender Studies">Gender Studies</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
        </ModalSelect>
        <ModalInput
          type="text"
          name="bio"
          placeholder="Bio"
          value={updatedMember.bio}
          onChange={handleChange}
        />
        <StyledDatePicker
          selected={updatedMember.gradDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          className="datepicker"
          isClearable={false} // Since gradDate is required
          placeholderText="Select Graduation Date"
        />
        <ModalInput
          type="text"
          name="role"
          placeholder="Role"
          value={updatedMember.role}
          onChange={handleChange}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Button onClick={handleUpdate} style={{ backgroundColor: "#023020" }}>
            Update
          </Button>
          <Button onClick={onClose} style={{ backgroundColor: "grey" }}>
            Cancel
          </Button>
        </div>
      </ModalContent>
    </ModalWrapper>
  );
};

export default UpdateMemberModal;
