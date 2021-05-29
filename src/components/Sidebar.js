import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import img from "../assets/images/profile.png";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 13rem;
  height: 100%;
  box-shadow: 1px 2px 3px 2px rgba(134, 185, 255, 0.85);
  z-index: 999;
  position: fixed;
  background-color: #ffffff;
  transition: 0.5s ease-in-out;
  @media (max-width: 760px) {
    /* display: ${(props) => (props.toggle ? "block" : "none")}; */
    transform: ${(props) =>
      props.toggle ? "translateX(0) " : "translateX(-110%)"};
  }
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
    { name: "Profile", to: "dashboard/profile" },
    { name: "Logout", to: "logout" },
  ];

  const [active, setActive] = useState("dashboard");
  const currentLink = props.location.pathname;
  useEffect(() => {
    setActive(currentLink.substring(1));
  }, [currentLink]);

  const { user } = props;
  const handleLogout = () => {
    if (user.role === "user") {
      const data = JSON.parse(localStorage.getItem("user"));
      data.auth = false;
      localStorage.setItem("user", JSON.stringify(data));
      props.history.push("/login");
    } else {
      const data = JSON.parse(localStorage.getItem("brand"));
      data.auth = false;
      localStorage.setItem("brand", JSON.stringify(data));
      props.history.push("/login");
    }
  };
  return (
    <Container toggle={props.toggle}>
      <ProfileSection>
        <Image src={user.role === "brand" ? user.image : img} />
        <Para>
          {user.role === "user"
            ? user.firstName + " " + user.lastName
            : user.name}
        </Para>
      </ProfileSection>
      <LinkWrap>
        {Links.map((link, i) => {
          if (link.name === "Logout") {
            return (
              <LogoutButton key={i} onClick={handleLogout}>
                {link.name}
              </LogoutButton>
            );
          }
          return (
            <LinkContainer
              style={{
                backgroundColor: active === link.to && "#f5f5f5",
                // color: active === link.to && "#fff",
              }}
              key={i}
            >
              <Link
                to={`/${link.to}`}
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                {link.name}
              </Link>
            </LinkContainer>
          );
        })}
      </LinkWrap>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    switchForm: state.ui.toggleForm,
    login: state.user.login,
    user: state.user.user,
  };
};
export default connect(mapStateToProps)(withRouter(Sidebar));
