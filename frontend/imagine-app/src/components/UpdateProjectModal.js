import React, { useState } from "react";
import axios from "axios";
import {
  ProjectModalWrapper,
  ProjectModalContent,
  ProjectInput,
  ProjectButton,
  MemberListContainer,
  MemberListItem,
  RemoveMemberButton,
} from "./ProjectStyledComponents";

const UpdateProjectModal = ({ project, onClose }) => {
  const [updatedProject, setUpdatedProject] = useState({
    ...project,
    members: Array.isArray(project.members) ? project.members : [], // Ensure members is an array
  });

  const [newMemberName, setNewMemberName] = useState("");

  const handleChange = (e) => {
    setUpdatedProject({ ...updatedProject, [e.target.name]: e.target.value });
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    if (newMemberName.trim()) {
      setUpdatedProject({
        ...updatedProject,
        members: [...updatedProject.members, newMemberName.trim()],
      });
      setNewMemberName("");
    }
  };

  const handleRemoveMember = (index) => {
    setUpdatedProject({
      ...updatedProject,
      members: updatedProject.members.filter((_, i) => i !== index),
    });
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
    <ProjectModalWrapper onClick={onClose}>
      <ProjectModalContent onClick={(e) => e.stopPropagation()}>
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

        {/* Member Input Field */}
        <form onSubmit={handleAddMember}>
          <ProjectInput
            type="text"
            name="newMember"
            placeholder="Enter member name and press Enter"
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
          />
        </form>

        {/* Display List of Members */}
        {updatedProject.members.length > 0 && (
          <MemberListContainer>
            <strong>Members:</strong>
            <ul>
              {updatedProject.members.map((member, index) => (
                <MemberListItem key={index}>
                  {member}
                  <RemoveMemberButton
                    type="button"
                    onClick={() => handleRemoveMember(index)}
                  >
                    Remove
                  </RemoveMemberButton>
                </MemberListItem>
              ))}
            </ul>
          </MemberListContainer>
        )}

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
