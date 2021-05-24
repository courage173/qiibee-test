import React from "react";
import styled from "@emotion/styled";
import bgImage from "../assets/images/bg-img.png";
import MyButton from "../utils/Button";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const LeftSection = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(58, 141, 255, 0.85),
      rgba(134, 185, 255, 0.85)
    ),
    url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const IntroText = styled.h2`
  color: #ffffff;
  font-size: 26px;
  line-height: 25px;
  font-weight: 400;
  font-family: Open Sans;
  text-align: center;
`;

const RightSection = styled.div`
  width: 60%;
  padding: 30px;
`;
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const HeaderText = styled.h4`
  font-weight: 600;
  padding-right: 20px;
  color: #b0b0b0;
`;
const ChildrenWrap = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const AuthLayout = (props) => {
  return (
    <Container>
      <LeftSection>
        <IntroText>Earn & redeem loyalty points</IntroText>
        <IntroText>By following your favourite brands</IntroText>
      </LeftSection>
      <RightSection>
        <Header>
          <HeaderText>
            {props.user
              ? "Switch to create a brand account"
              : "Switch to create a user account"}
          </HeaderText>
          <MyButton
            title={props.login ? "Create Brand account" : "Create User account"}
          />
        </Header>
        <ChildrenWrap>{props.children}</ChildrenWrap>
      </RightSection>
    </Container>
  );
};

export default AuthLayout;
