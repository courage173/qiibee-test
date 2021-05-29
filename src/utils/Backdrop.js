import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(74, 164, 103, 0.2);
  z-index: 995;
`;
const Backdrop = (props) => {
  return <Container onClick={props.runAction}></Container>;
};

export default Backdrop;
