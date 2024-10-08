import React, { useState } from "react";
import axios from "axios";
import {
  ProjectModalWrapper,
  ProjectModalContent,
  ProjectInput,
  ProjectButton,
} from "./ProjectStyledComponents";

const UpdateProjectModal = ({ project, onClose }) => {
  const [updatedProject, setUpdatedProject] = useState({
    ...project,
    members: Array.isArray(project.members) ? project.members : [], // Ensure members is an array
  });

  const handleChange = (e) => {
    setUpdatedProject({ ...updatedProject, [e.target.name]: e.target.value });
  };

  const handleMembersChange = (e) => {
    const membersArray = e.target.value
      .split(",")
      .map((member) => member.trim())
      .filter((member) => member);
    setUpdatedProject({ ...updatedProject, members: membersArray });
  };

  const handleUpdate = () => {
    axios
      .put(`/projects/${updatedProject.id}`, updatedProject)
      .then(() => {
        alert("Project updated successfully!");
        onClose();
      })
      .catch((error) => {
        console.error("Error updating project:", error);
        alert(
          `Failed to update project: ${
            error.response ? error.response.data.detail : "No server response"
          }`,
        );
      });
  };

  return (
    <ProjectModalWrapper>
      <ProjectModalContent>
        <h2>Update Project</h2>
        <ProjectInput
          type="text"
          name="name"
          placeholder="Project Name"
          value={updatedProject.name}
          onChange={handleChange}
        />
        <ProjectInput
          type="text"
          name="description"
          placeholder="Description"
          value={updatedProject.description}
          onChange={handleChange}
        />
        <ProjectInput
          type="url"
          name="url"
          placeholder="Project URL"
          value={updatedProject.url}
          onChange={handleChange}
        />
        <ProjectInput
          type="text"
          name="members"
          placeholder="Members (comma-separated)"
          value={
            Array.isArray(updatedProject.members)
              ? updatedProject.members.join(", ")
              : ""
          }
          onChange={handleMembersChange}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <ProjectButton onClick={handleUpdate}>Update</ProjectButton>
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

export default UpdateProjectModal;
