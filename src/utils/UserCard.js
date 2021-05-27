import React from "react";
import styled from "@emotion/styled";
import MyButton from "./Button";

const Wrap = styled.div`
  height: 3.5rem;
  background-color: #fff;
  box-shadow: 0px 6px 12px rgba(8, 35, 48, 0.1);
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 15px 0;
`;
const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
const Name = styled.h4`
  font-weight: 500;
  margin-left: 10px;
`;
const Email = styled.h4`
  font-weight: 500;
  word-break: break-word;
  @media (max-width: 768px) {
    display: none;
  }
`;
const RoyaltyPoint = styled.div`
  transform: skewX(-10deg);
  background-color: red;
  padding: 10px;
  margin-left: 5px;
  color: #fff;
  margin-right: 20px;
`;

const BottonWrap = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const UserCard = (props) => {
  return (
    <Wrap>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image src={props.image} />
        <Name>{props.name}</Name>
      </div>
      <Email>{props.email}</Email>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <RoyaltyPoint>{props.loyalty}</RoyaltyPoint>
        <BottonWrap>
          <MyButton
            title="Reward"
            bgColor={"#3a8dff"}
            color="#fff"
            width="4.5rem"
            height="2.7rem"
            secBg
          />
        </BottonWrap>
      </div>
    </Wrap>
  );
};

export default UserCard;
