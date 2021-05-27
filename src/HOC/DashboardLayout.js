import React from "react";
import styled from "@emotion/styled";
import Sidebar from "../components/Sidebar";
import MyButton from "../utils/Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  background: #f5f5f5;
`;

const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 61px;
  top: 40px;
  display: flex;
  background: #ffffff;
  z-index: 99;
  padding-left: 21rem;
  box-shadow: 0px 4px 4px rgba(93, 130, 31, 0.3);
  @media (max-width: 768px) {
    top: 0;
    width: 100%;
    margin-left: 0;
    padding-left: 0;
  }
`;
const HeadTextWrap = styled.div`
  position: relative;
  margin-right: 40px;
  margin-left: 50px;
  display: flex;
  align-items: center;
  &:after {
    content: "";
    position: absolute;
    width: 150%;
    bottom: 0;
    left: -15px;
    border-bottom: 4px solid #3a8dff;
  }
`;
const H4 = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin: 0;
  display: flex;
  align-items: center;
  color: #252525;
  @media (max-width: 768px) {
    display: none;
  }
`;
const HeadText = styled.div`
  margin-left: 90px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 95%;
`;
const ChildrenWrap = styled.div`
  margin-top: 120px;
  margin-left: 13rem;
  @media (max-width: 768px) {
    margin-top: 50px;
    margin-left: 0;
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
const Button = styled.div`
  margin-right: 15px;
  color: #3a8dff;
  cursor: pointer;
`;
const MenuBars = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 30px;
  padding-left: 20px;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
const MenuBar = styled.div`
  width: 20px;
  border-bottom: 1px solid;
  padding: 3px;
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
        <Header>
          <MenuBars>
            <MenuBar></MenuBar>
            <MenuBar></MenuBar>
            <MenuBar></MenuBar>
          </MenuBars>

          <HeadTextWrap>
            <H4> Users</H4>
          </HeadTextWrap>
          <HeadText>
            <div>
              <H4>
                Total Loyalty points - <RoyaltyPoint>578534543</RoyaltyPoint>
              </H4>
            </div>
            {/* <Button>Reward Multiple</Button> */}
          </HeadText>
        </Header>
        <ChildrenWrap>{props.children}</ChildrenWrap>
      </div>
    </Container>
  );
};

export default DashboardLayout;
