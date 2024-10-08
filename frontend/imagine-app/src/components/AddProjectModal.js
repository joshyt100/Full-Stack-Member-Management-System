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

const AddProjectModal = ({ onClose }) => {
  const [project, setProject] = useState({
    name: "",
    description: "",
    url: "",
    members: [], // Initialize as an empty array
  });

  const [newMemberName, setNewMemberName] = useState("");

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    if (newMemberName.trim()) {
      setProject({
        ...project,
        members: [...project.members, newMemberName.trim()],
      });
      setNewMemberName("");
    }
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
    <ProjectModalWrapper onClick={onClose}>
      <ProjectModalContent onClick={(e) => e.stopPropagation()}>
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
        {project.members.length > 0 && (
          <MemberListContainer>
            <strong>Members:</strong>
            <ul>
              {project.members.map((member, index) => (
                <MemberListItem key={index}>
                  {member}
                  <RemoveMemberButton
                    type="button"
                    onClick={() => {
                      // Remove the member from the list
                      setProject({
                        ...project,
                        members: project.members.filter((_, i) => i !== index),
                      });
                    }}
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
