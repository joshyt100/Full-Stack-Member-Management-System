// MemberList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MemberItem,
  MemberLabel,
  MemberName,
  MemberRole,
  MemberMajor,
  MemberYear,
  MemberDetail,
  MemberBio,
  DetailLabel,
  RoleSection,
  DeleteButton,
  SearchInput,
} from "./StyledComponents";
import UpdateMemberModal from "./UpdateMemberModal";

const apiUrl = process.env.REACT_APP_API_URL; // Base URL for the API

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const fetchMembers = () => {
    axios
      .get(`${apiUrl}/members`)
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
      });
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const deleteMember = (memberId) => {
    axios
      .delete(`${apiUrl}/members/${memberId}`)
      .then(() => {
        setMembers(members.filter((member) => member.id !== memberId));
        alert("Member deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting member:", error);
        alert(
          `Failed to delete member: ${
            error.response ? error.response.data.detail : "No server response"
          }`,
        );
      });
  };

  // Function to open the modal and pass the selected member
  const openUpdateModal = (member) => {
    setSelectedMember(member);
    setShowUpdateModal(true);
  };

  // Function to handle closing the modal and refreshing the member list
  const handleModalClose = () => {
    setShowUpdateModal(false);
    fetchMembers(); // Refresh the members list after updating
  };

  // Filter members based on the search query
  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      {/* Search Input */}
      <SearchInput
        type="text"
        placeholder="Search members by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Filtered member list */}
      {filteredMembers.length > 0 ? (
        filteredMembers.map((member) => (
          <RoleSection key={member.id}>
            <MemberItem onClick={() => openUpdateModal(member)}>
              <MemberName>
                <DetailLabel>Name:</DetailLabel> {member.name}
              </MemberName>
              <MemberMajor>
                <DetailLabel>Major:</DetailLabel> {member.major}
              </MemberMajor>
              <MemberBio>
                <DetailLabel>Bio:</DetailLabel> {member.bio}
              </MemberBio>
              <MemberYear>
                <DetailLabel>Graduation Year:</DetailLabel> {member.gradDate}
              </MemberYear>
              <MemberRole>
                <DetailLabel>Role:</DetailLabel> {member.role}
              </MemberRole>
              {/* Prevent the delete button click from opening the update modal */}
              <DeleteButton
                onClick={(e) => {
                  e.stopPropagation(); // Stop the event from bubbling up
                  deleteMember(member.id);
                }}
              >
                Delete
              </DeleteButton>
            </MemberItem>
          </RoleSection>
        ))
      ) : (
        <p>No members found.</p>
      )}

      {/* Update Member Modal */}
      {showUpdateModal && selectedMember && (
        <UpdateMemberModal member={selectedMember} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default MemberList;
