import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserCard from "../../utils/UserCard";
import styled from "@emotion/styled";
import { toggleModal } from "../../redux/actions/ui";

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
  const [select, setSelect] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleModal = (id) => {
    props.toggleModal([id]);
  };

  const handleSetUser = (id) => {
    let tempIdx = selectedUsers;

    if (tempIdx.includes(id)) {
      tempIdx = tempIdx.filter((userId) => userId !== id);
    } else {
      tempIdx.push(id);
    }
    setSelectedUsers(tempIdx);
  };
  const brandList =
    users && users.filter((user) => brandUsers && brandUsers.includes(user.id));

  const handleUnSelectUser = () => {
    setSelectedUsers([]);
    setSelect(!select);
  };
  return (
    <UserSection>
      <div
        style={{
          cursor: "pointer",
          display: "flex",
        }}
      >
        <div onClick={handleUnSelectUser}>
          {select ? "Unsellect" : "Select Users"}
        </div>
        {select ? (
          <div
            style={{
              marginLeft: "10px",
              color: "#3a8dff",
            }}
            onClick={() => props.toggleModal(selectedUsers)}
          >
            Click to Reward
          </div>
        ) : null}
      </div>
      {brandList.map((user, i) => (
        <UserCard
          {...user}
          key={user.id + i}
          runAction={() => handleModal(user.id)}
          selectBox={select}
          handleSetUser={handleSetUser}
        />
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
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ toggleModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
