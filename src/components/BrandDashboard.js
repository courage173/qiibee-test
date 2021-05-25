import React from "react";
import styled from "@emotion/styled";
import DashboardLayout from "../HOC/DashboardLayout";

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;
const Header = styled.h4`
  font-size: 30px;
  font-weight: 500;
`;
const UserSection = styled.div`
  width: 100%;
  box-shadow: 0px 6px 12px rgba(8, 35, 48, 0.1);
  border-radius: 6px;
  height: 3rem;
`;
const BrandDashboard = () => {
  return (
    <DashboardLayout>
      <Container>
        <Header>Users</Header>
        <UserSection></UserSection>
      </Container>
    </DashboardLayout>
  );
};

export default BrandDashboard;
