import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "12rem")};
  height: ${(props) => (props.height ? props.height : "4.2rem")};
  box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px 0px,
    rgb(0 0 0 / 7%) 0px 3px 6px 0px;
  font-weight: 600;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
  color: ${(props) => (props.color ? props.color : "#3a8dff")};
  border: none;
  font-size: ${(props) => (props.font ? props.font : "16px")};
  border-radius: 5px;
  transition: 0.17s ease-in;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.secBg ? "#1058bb" : "#0d5ece")};
    color: #fff;
  }
  @media (max-width: 760px) {
    width: ${(props) => (props.mobileWidth ? props.mobileWidth : "8rem")};
    height: 3.5rem;
    font: ${(props) => props.Mfont && props.Mfont};
  }
`;
const MyButton = (props) => {
  return (
    <Button
      onClick={props.runAction}
      bgColor={props.bgColor}
      color={props.color}
      boxShadow={props.boxShadow}
      width={props.width}
      height={props.height}
      style={props.style}
      font={props.font}
      mobileWidth={props.mobileWidth}
      Mfont={props.Mfont}
    >
      {props.title}
    </Button>
  );
};

export default MyButton;
