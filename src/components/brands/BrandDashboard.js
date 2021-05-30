import React from 'react';
import styled from '@emotion/styled';
import DashboardLayout from '../../HOC/DashboardLayout';
import UserList from '../users/UserList';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 760px) {
        height: inherit;
        background: #f5f5f5;
    }
`;

const BrandDashboard = () => {
    return (
        <DashboardLayout title={'Users'}>
            <Container>
                <UserList />
            </Container>
        </DashboardLayout>
    );
};

BrandDashboard.displayName = 'BrandDashboard';

export default BrandDashboard;
