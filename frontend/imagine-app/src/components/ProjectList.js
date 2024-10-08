import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ProjectItem,
  ProjectName,
  ProjectDescription,
  ProjectURL,
  ProjectDeleteButton,
  ProjectSearchInput,
} from "./ProjectStyledComponents";
import {
  ProjectMembers,
  MemberButton,
  MemberLabel,
} from "./ProjectMembersStyledComponents";
import UpdateProjectModal from "./UpdateProjectModal";
import MemberInfoModal from "./MemberInfoModal";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const fetchProjects = () => {
    axios
      .get("/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = (projectId) => {
    axios
      .delete(`/projects/${projectId}`)
      .then(() => {
        setProjects(projects.filter((project) => project.id !== projectId));
        alert("Project deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting project:", error);
        alert(
          `Failed to delete project: ${
            error.response ? error.response.data.detail : "No server response"
          }`,
        );
      });
  };

  const openUpdateModal = (project) => {
    setSelectedProject(project);
    setShowUpdateModal(true);
  };

  const handleModalClose = () => {
    setShowUpdateModal(false);
    fetchProjects();
  };

  const handleMemberClick = (memberName) => {
    axios
      .get(`/get_member_by_name?member_name=${memberName}`)
      .then((response) => {
        if (response.data.length > 0) {
          setSelectedMember(response.data[0]);
          setShowMemberModal(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching member details:", error);
      });
  };

  const closeMemberModal = () => {
    setShowMemberModal(false);
    setSelectedMember(null);
  };

  const filteredProjects = projects.filter((project) =>
    project.name?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <ProjectSearchInput
        type="text"
        placeholder="Search projects by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <ProjectItem
            key={project.id}
            onClick={() => openUpdateModal(project)}
          >
            <ProjectName>{project.name}</ProjectName>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectURL
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.url}
            </ProjectURL>
            <ProjectMembers>
              <MemberLabel>Members:</MemberLabel>
              {Array.isArray(project.members) && project.members.length > 0 ? (
                project.members.map((memberName, index) => (
                  <MemberButton
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMemberClick(memberName);
                    }}
                  >
                    {memberName}
                  </MemberButton>
                ))
              ) : (
                <span>No members</span>
              )}
            </ProjectMembers>
            <ProjectDeleteButton
              onClick={(e) => {
                e.stopPropagation();
                deleteProject(project.id);
              }}
            >
              Delete
            </ProjectDeleteButton>
          </ProjectItem>
        ))
      ) : (
        <p>No projects found.</p>
      )}

      {showUpdateModal && selectedProject && (
        <UpdateProjectModal
          project={selectedProject}
          onClose={handleModalClose}
        />
      )}

      {showMemberModal && selectedMember && (
        <MemberInfoModal member={selectedMember} onClose={closeMemberModal} />
      )}
    </div>
  );
};

export default ProjectList;
