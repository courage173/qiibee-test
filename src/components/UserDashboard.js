import React from "react";
import DashboardLayout from "../HOC/DashboardLayout";
import styled from "@emotion/styled";
import BrandList from "./BrandList";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserDashboard = () => {
  return (
    <DashboardLayout>
      <Container>
        <BrandList />
      </Container>
    </DashboardLayout>
  );
};

export default UserDashboard;
