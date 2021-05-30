import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUser } from "../redux/actions/user";
import { history } from "../redux/store";
import { ofActionSuccessful } from "../redux/epics/allEpic";

function AuthRoute(ComposedClass) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true,
      serverError: false,
    };

    componentDidMount() {
      this.props.getUser();
      ofActionSuccessful("GET_USER_SUCCESS").subscribe((action) => {
        const user = action && action.payload;
        if (!user.id || !user.auth) {
          history.push("/login");
        }
      });
      ofActionSuccessful("GET_USER_FAILURE").subscribe((action) => {
        const error = action && action.payload;
        if (error) {
          history.push("/login");
        }
      });
    }

    render() {
      return <ComposedClass {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user.user,
    };
  }

  const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ getUser }, dispatch);

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticationCheck);
}

export default AuthRoute;
