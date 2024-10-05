import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MemberItem,
  MemberLabel,
  MemberName,
  MemberRole,
  MemberDetail,
  DetailLabel,
  RoleSection,
  DeleteButton,
  SearchInput,
} from "./StyledComponents";

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State to track the search query

  useEffect(() => {
    axios
      .get("/members")
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
      });
  }, []);

  const deleteMember = (memberId) => {
    axios
      .delete(`/members/${memberId}`)
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

  // Filter members based on the search query (case-insensitive)
  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <h1>Members</h1>

      {/* Search Input */}
      <SearchInput
        type="text"
        placeholder="Search members by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
      />

      {/* Filtered member list */}
      {filteredMembers.length > 0 ? (
        filteredMembers.map((member) => (
          <RoleSection key={member.id}>
            <MemberItem>
              <MemberName>
                <DetailLabel>Name:</DetailLabel> {member.name}
              </MemberName>
              <MemberDetail>
                <DetailLabel>Major:</DetailLabel> {member.major}
              </MemberDetail>
              <MemberDetail>
                <DetailLabel>Bio:</DetailLabel> {member.bio}
              </MemberDetail>
              <MemberDetail>
                <DetailLabel>Graduation Year:</DetailLabel> {member.grad}
              </MemberDetail>
              <MemberRole>
                <DetailLabel>Role:</DetailLabel> {member.role}
              </MemberRole>
              <DeleteButton onClick={() => deleteMember(member.id)}>
                Delete
              </DeleteButton>
            </MemberItem>
          </RoleSection>
        ))
      ) : (
        <p>No members found.</p> // Display a message if no members match the search
      )}
    </div>
  );
};

export default MemberList;
