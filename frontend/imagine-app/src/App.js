// App.js
import React, { useState } from "react";
import MemberList from "./components/MemberList";
import ProjectList from "./components/ProjectList";
import "./index.css"; // Adjust the path according to your project structure

import {
  PageWrapper,
  Title,
  Section,
  Button,
} from "./components/StyledComponents";
import AddMemberModal from "./components/AddMemberModal";
import AddProjectModal from "./components/AddProjectModal";

function App() {
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);

  return (
    <PageWrapper>
      <Title style={{ color: "#808080", marginBottom: "-10px" }}>
        Member and Project Dashboard
      </Title>

      {/* Section for Members */}
      <Section>
        <Button
          style={{ marginBottom: "-10000px" }}
          onClick={() => setShowAddMemberModal(true)}
        >
          Add Member
        </Button>
        <MemberList /> {/* No need to pass onMemberClick */}
      </Section>

      {/* Section for Projects */}
      <Section>
        <h2>Projects</h2>
        <Button onClick={() => setShowAddProjectModal(true)}>
          Add Project
        </Button>
        <ProjectList />
      </Section>
      <div className="App">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        {/* Your App Content Here */}
      </div>
      {/* Modals for adding members and projects */}
      {showAddMemberModal && (
        <AddMemberModal onClose={() => setShowAddMemberModal(false)} />
      )}
      {showAddProjectModal && (
        <AddProjectModal onClose={() => setShowAddProjectModal(false)} />
      )}
    </PageWrapper>
  );
}

export default App;
