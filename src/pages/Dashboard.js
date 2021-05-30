import React from 'react';
import UserDashboard from '../components/users/UserDashboard';
import BrandDashboard from '../components/brands/BrandDashboard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = props => {
    return props.user.role === 'user' ? <UserDashboard /> : <BrandDashboard />;
};

function mapStateToProps(state) {
    return {
        user: state.user.user,
    };
}

Dashboard.displayName = 'Dashboard';
Dashboard.propTypes = {
    user: PropTypes.object,
};
export default connect(mapStateToProps)(Dashboard);
