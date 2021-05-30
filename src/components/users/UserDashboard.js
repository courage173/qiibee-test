import React from 'react';
import DashboardLayout from '../../HOC/DashboardLayout';
import styled from '@emotion/styled';
import BrandList from '../brands/BrandList';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 760px) {
        height: inherit;
        background: #f5f5f5;
    }
`;

const UserDashboard = () => {
    return (
        <DashboardLayout title={'Brands'}>
            <Container>
                <BrandList />
            </Container>
        </DashboardLayout>
    );
};

UserDashboard.displayName = 'UserDashboard';
export default UserDashboard;
