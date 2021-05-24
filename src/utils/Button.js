import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  width: 12rem;
  height: 4.2rem;
  box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px 0px,
    rgb(0 0 0 / 7%) 0px 3px 6px 0px;
  font-weight: 600;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
  color: ${(props) => (props.color ? props.color : "#3a8dff")};
  border: none;
  font-size: 15px;
  border-radius: 5px;
  &:hover {
    background-color: #3a8dff;
    color: #fff;
  }
`;
const MyButton = (props) => {
  return (
    <Button
      onClick={props.runAction}
      bgColor={props.bgColor}
      color={props.color}
      boxShadow={props.boxShadow}
    >
      {props.title}
    </Button>
  );
};

export default MyButton;
