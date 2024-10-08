import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MemberList from "./components/MemberList";
import ProjectList from "./components/ProjectList";
import AddMemberModal from "./components/AddMemberModal";
import AddProjectModal from "./components/AddProjectModal";
import {
  PageWrapper,
  Title,
  Section,
  Button,
} from "./components/StyledComponents";

function App() {
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);

  return (
    <Router>
      <PageWrapper>
        <Title>Member and Project Dashboard</Title>
        <Navbar />
        <Routes>
          <Route
            path="/members"
            element={
              <Section>
                <Button onClick={() => setShowAddMemberModal(true)}>
                  Add Member
                </Button>
                <MemberList />
              </Section>
            }
          />
          <Route
            path="/projects"
            element={
              <Section>
                <Button onClick={() => setShowAddProjectModal(true)}>
                  Add Project
                </Button>
                <ProjectList />
              </Section>
            }
          />
        </Routes>
        {showAddMemberModal && (
          <AddMemberModal onClose={() => setShowAddMemberModal(false)} />
        )}
        {showAddProjectModal && (
          <AddProjectModal onClose={() => setShowAddProjectModal(false)} />
        )}
      </PageWrapper>
    </Router>
  );
}

export default App;
