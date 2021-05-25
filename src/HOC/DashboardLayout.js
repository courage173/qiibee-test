import React from "react";
import styled from "@emotion/styled";
import Sidebar from "../components/Sidebar";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  background: #f5f5f5;
`;

const DashboardLayout = (props) => {
  return (
    <Container>
      <Sidebar />
      <div
        style={{
          width: "100%",
        }}
      >
        {props.children}
      </div>
    </Container>
  );
};

export default DashboardLayout;
