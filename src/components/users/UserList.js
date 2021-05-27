import React from "react";
import UserCard from "../../utils/UserCard";
import styled from "@emotion/styled";
import { users } from "../../utils/data";

const UserSection = styled.div`
  width: 70%;
  box-shadow: 0px 6px 12px rgba(8, 35, 48, 0.1);
  border-radius: 6px;
  min-height: 90%;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    box-shadow: none;
  }
`;

const UserList = () => {
  return (
    <UserSection>
      {users.map((user, i) => (
        <UserCard {...user} key={user.loyalty + i} />
      ))}
    </UserSection>
  );
};

export default UserList;
