import React, { useState } from "react";
import axios from "axios";
import { ModalWrapper, ModalContent, Button } from "./StyledComponents";

const AddProjectModal = ({ onClose }) => {
  const [project, setProject] = useState({
    name: "",
    description: "",
    url: "",
    members: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("/projects", project)
      .then(() => {
        alert("Project added successfully!");
        onClose();
      })
      .catch((error) => {
        console.error("Error adding project:", error);
      });
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <h2>Add Project</h2>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={project.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={project.description}
          onChange={handleChange}
        />
        <input
          type="url"
          name="url"
          placeholder="URL"
          value={project.url}
          onChange={handleChange}
        />
        <input
          type="text"
          name="members"
          placeholder="Members (comma separated)"
          value={project.members}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default AddProjectModal;
