import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for the date picker
import { ModalWrapper, ModalContent, Button } from "./StyledComponents";

const AddMemberModal = ({ onClose }) => {
  const [member, setMember] = useState({
    name: "",
    major: "",
    bio: "",
    gradDate: new Date(), // Use a Date object for the graduation date
    role: "",
  });

  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  const handleDateChange = (date) => {
    setMember({ ...member, gradDate: date.toISOString().split("T")[0] }); // Format as 'YYYY-MM-DD'
  };

  const handleSubmit = () => {
    axios
      .post("/members", member)
      .then(() => {
        alert("Member added successfully!");
        onClose();
      })
      .catch((error) => {
        console.error("Error adding member:", error);
      });
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <h2>Add Member</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={member.name}
          onChange={handleChange}
        />
        <select name="major" value={member.major} onChange={handleChange}>
          <option value="">Select Major</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Biology">Biology</option>
          <option value="Gender Studies">Gender Studies</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
        </select>
        <input
          type="text"
          name="bio"
          placeholder="Bio"
          value={member.bio}
          onChange={handleChange}
        />
        <DatePicker
          selected={member.gradDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          className="datepicker" // This is to apply custom styles if necessary
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={member.role}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default AddMemberModal;
