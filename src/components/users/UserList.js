import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserCard from "../../utils/UserCard";
import styled from "@emotion/styled";

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

const UserList = (props) => {
  const brandUsers = props.brand && props.brand.users;
  const users = props.users;

  const brandList =
    users && users.filter((user) => brandUsers && brandUsers.includes(user.id));
  return (
    <UserSection>
      {brandList.map((user, i) => (
        <UserCard {...user} key={user.loyalty + i} />
      ))}
    </UserSection>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    brand: state.user.user,
  };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
