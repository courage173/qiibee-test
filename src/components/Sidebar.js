import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import img from "../assets/images/profile.png";
import { withRouter } from "react-router-dom";

const Container = styled.div`
  width: 17rem;
  height: 100%;
  box-shadow: 1px 2px 3px 2px rgba(134, 185, 255, 0.85);
  z-index: 99;
  background-color: #ffffff;
`;

const ProfileSection = styled.div`
  height: 12rem;
  background-color: #3a8dff;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  flex-direction: column;
  padding: 10px;
`;
const Image = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
`;
const Para = styled.p`
  text-align: center;
  width: 100%;
  color: #ffffff;
`;
const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;
const LinkContainer = styled.div`
  padding: 20px;
  margin-top: 20px;
  cursor: pointer;
  padding: 25px 0;
  width: 100%;
  text-align: center;
`;
const LogoutButton = styled.div`
  margin-top: 150px;
  cursor: pointer;
`;
const Sidebar = (props) => {
  const Links = [
    { name: "Dashboard", to: "dashboard" },
    { name: "Profile", to: "profile" },
    { name: "Logout", to: "logout" },
  ];

  const [active, setActive] = useState("dashboard");
  const currentLink = props.location.pathname;
  useEffect(() => {
    setActive(currentLink.substring(1));
  }, [currentLink]);
  return (
    <Container>
      <ProfileSection>
        <Image src={img} />
        <Para>Courage Osemwengie</Para>
      </ProfileSection>
      <LinkWrap>
        {Links.map((link) => {
          if (link.name === "Logout") {
            return <LogoutButton>{link.name}</LogoutButton>;
          }
          return (
            <LinkContainer
              style={{
                backgroundColor: active === link.to && "#f5f5f5",
                // color: active === link.to && "#fff",
              }}
            >
              {link.name}
            </LinkContainer>
          );
        })}
      </LinkWrap>
    </Container>
  );
};

export default withRouter(Sidebar);
