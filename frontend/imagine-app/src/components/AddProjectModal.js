import React, { useState } from "react";
import axios from "axios";
import {
  ProjectModalWrapper,
  ProjectModalContent,
  ProjectInput,
  ProjectButton,
} from "./ProjectStyledComponents";

const AddProjectModal = ({ onClose }) => {
  const [project, setProject] = useState({
    name: "",
    description: "",
    url: "",
    members: [], // Initialize as an empty array
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleMembersChange = (e) => {
    const membersArray = e.target.value
      .split(",")
      .map((member) => member.trim())
      .filter((member) => member);
    setProject({ ...project, members: membersArray });
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
    <ProjectModalWrapper>
      <ProjectModalContent>
        <h2>Add Project</h2>
        <ProjectInput
          type="text"
          name="name"
          placeholder="Project Name"
          value={project.name}
          onChange={handleChange}
        />
        <ProjectInput
          type="text"
          name="description"
          placeholder="Description"
          value={project.description}
          onChange={handleChange}
        />
        <ProjectInput
          type="url"
          name="url"
          placeholder="Project URL"
          value={project.url}
          onChange={handleChange}
        />
        <ProjectInput
          type="text"
          name="members"
          placeholder="Members (comma-separated)"
          value={project.members.join(", ")}
          onChange={handleMembersChange}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <ProjectButton onClick={handleSubmit}>Submit</ProjectButton>
          <ProjectButton
            onClick={onClose}
            style={{ backgroundColor: "#ff4c4c" }}
          >
            Cancel
          </ProjectButton>
        </div>
      </ProjectModalContent>
    </ProjectModalWrapper>
  );
};

export default AddProjectModal;
