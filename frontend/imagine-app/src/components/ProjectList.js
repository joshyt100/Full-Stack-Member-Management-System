import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ProjectItem,
  ProjectName,
  ProjectDescription,
  ProjectURL,
  ProjectMembers,
  ProjectDeleteButton,
  ProjectSearchInput,
} from "./ProjectStyledComponents";
import UpdateProjectModal from "./UpdateProjectModal";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
            <ProjectName> {project.name}</ProjectName>
            <ProjectDescription>
              Description: {project.description}
            </ProjectDescription>
            <ProjectURL
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.url}
            </ProjectURL>
            <ProjectMembers>
              Members:{" "}
              {Array.isArray(project.members)
                ? project.members.join(", ")
                : project.members
                  ? project.members
                  : "No members"}
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
    </div>
  );
};

export default ProjectList;
