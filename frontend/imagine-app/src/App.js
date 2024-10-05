import React, { useState } from "react";
import MemberList from "./components/MemberList";
import ProjectList from "./components/ProjectList";

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
      <Title>Member and Project Dashboard</Title>

      <Section>
        <h2>Members</h2>
        <Button onClick={() => setShowAddMemberModal(true)}>Add Member</Button>
        <MemberList />
      </Section>

      <Section>
        <h2>Projects</h2>
        <Button onClick={() => setShowAddProjectModal(true)}>
          Add Project
        </Button>
        <ProjectList />
      </Section>

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
