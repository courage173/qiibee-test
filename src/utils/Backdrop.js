import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(74, 164, 103, 0.2);
    z-index: 995;
`;
const Backdrop = props => {
    return <Container onClick={props.runAction}></Container>;
};

Backdrop.displayName = 'Backdrop';
Backdrop.propTypes = {
    runAction: PropTypes.func,
};
export default Backdrop;
