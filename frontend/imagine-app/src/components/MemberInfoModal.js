import React from "react";
import {
  ProjectModalWrapper,
  ProjectModalContent,
  ModalCloseButton,
} from "./ProjectStyledComponents";

const MemberInfoModal = ({ member, onClose }) => {
  return (
    <ProjectModalWrapper onClick={onClose}>
      <ProjectModalContent onClick={(e) => e.stopPropagation()}>
        <h2>{member.name}</h2>
        <p>
          <strong>Major:</strong> {member.major}
        </p>
        <p>
          <strong>Role:</strong> {member.role}
        </p>
        <p>
          <strong>Graduation Date:</strong> {member.gradDate}
        </p>
        <p>
          <strong>Bio:</strong> {member.bio}
        </p>
        <ModalCloseButton onClick={onClose}>Close</ModalCloseButton>
      </ProjectModalContent>
    </ProjectModalWrapper>
  );
};

export default MemberInfoModal;
