import React from "react";
import UserDashboard from "../components/users/UserDashboard";
import BrandDashboard from "../components/brands/BrandDashboard";
import { connect } from "react-redux";

const Dashboard = (props) => {
  return props.user.role === "user" ? <UserDashboard /> : <BrandDashboard />;
};

function mapStateToProps(state) {
  return {
    user: state.user.user,
  };
}
export default connect(mapStateToProps)(Dashboard);
