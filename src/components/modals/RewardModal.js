import React, { useState } from "react";
import styled from "@emotion/styled";
import MyButton from "../../utils/Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleModal } from "../../redux/actions/ui";
import { rewardLoyalty } from "../../redux/actions/user";

const Container = styled.div`
  margin: 0 auto;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  top: 20%;
  z-index: 999;
  transition: 2s ease-in-out;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
`;
const ModalContainer = styled.div`
  width: 20rem;
  height: 7rem;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 6px 12px rgba(8, 35, 48, 0.14);
  display: flex;
  justify-content: space-around;
  opacity: ${(props) => (props.open ? "1" : "0")};
  align-items: center;
  flex-direction: column;
  transition: 0.5s ease-in-out;
  transform: ${(props) => (props.open ? "translateY(0)" : "translateY(20px)")};
`;

const Input = styled.input`
  width: 6rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 2rem;
  outline: none;
  padding: 3px;
  border: none;
`;
const H5 = styled.h4`
  font-size: 24px;
  line-height: 5px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const CloseBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: -15px;
  color: #b0b0b0;
`;
const Button = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: red;
  color: white;
  cursor: pointer;
`;
function RewardModal(props) {
  const [point, setPoint] = useState(0);
  const handleRewardLoyalty = () => {
    props.rewardLoyalty({ point, userIds: props.users });
  };
  const { modalOpen } = props;

  return (
    <Container open={modalOpen} onClick={() => props.toggleModal([])}>
      <ModalContainer open={modalOpen} onClick={(e) => e.stopPropagation()}>
        <CloseBtn>
          <Button onClick={() => props.toggleModal([])}>x</Button>
        </CloseBtn>
        <div
          style={{
            width: "100%",
            marginTop: "-25px",
          }}
        >
          <H5>Reward Users</H5>
        </div>

        <div
          style={{
            display: "flex",
          }}
        >
          <Input
            type="number"
            value={point}
            onChange={(e) => {
              setPoint(e.target.value);
            }}
          />
          <MyButton
            title="Reward"
            width="6rem"
            height="2.4rem"
            style={{
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
            }}
            mobileHeight={"2.4rem"}
            bgColor={"#3a8dff"}
            color="#fff"
            runAction={handleRewardLoyalty}
          />
        </div>
      </ModalContainer>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    modalOpen: state.ui.modalOpen,
    brand: state.user.user,
    users: state.ui.users,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ toggleModal, rewardLoyalty }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RewardModal);
