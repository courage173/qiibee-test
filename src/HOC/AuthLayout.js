import React, { useState, useEffect } from 'react';
import { history } from '../redux/store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import bgImage from '../assets/images/bg-img.png';
import MyButton from '../utils/Button';
import { toggleForm } from '../redux/actions/ui';
import PropTypes from 'prop-types';
import brandIm from '../assets/images/brand-image.gif';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
        height: unset;
    }
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
    @media (max-width: 768px) {
        width: 100%;
        height: 21rem;
    }
`;

const IntroText = styled.h2`
    color: #ffffff;
    font-size: 26px;
    line-height: 25px;
    font-weight: 400;
    font-family: Open Sans;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 23px;
    }
`;

const RightSection = styled.div`
    width: 60%;
    padding: 30px;
    @media (max-width: 768px) {
        width: 100% !important;
        padding: 0;
    }
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
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
    @media (max-width: 768px) {
        margin-top: 0;
    }
`;

const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 26px;
`;

const ToggleSpan = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    &:after {
        position: absolute;
        content: '';
        height: 19px;
        width: 19px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
        transform: ${props => props.toggle && 'translateX(24px)'};
    }
`;
const ButtonWrap = styled.div`
    @media (max-width: 768px) {
        display: none !important;
    }
`;
const ToggleWrap = styled.div`
    @media (max-width: 768px) {
        margin-left: 10px;
    }
`;

const ImageWrap = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    display: none;
`;

const AuthLayout = props => {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        if (props.switchForm === 'brand') {
            setToggle(true);
        } else {
            setToggle(false);
        }
    });
    const handleRoute = () => {
        history.push(props.login ? '/' : '/login');
    };

    const handleToggle = () => {
        setToggle(!toggle);
        props.toggleForm(toggle ? 'user' : 'brand');
    };
    return (
        <Container>
            <LeftSection>
                <ImageWrap src={brandIm} alt="gif" />
                <IntroText>Earn & redeem loyalty points</IntroText>
                <IntroText>By following your favourite brands</IntroText>
            </LeftSection>
            <RightSection>
                <Header>
                    <ToggleWrap
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Label
                            className="Toggler-wrap"
                            style={{
                                marginRight: '10px',
                            }}
                        >
                            <input
                                className="btn-toggler"
                                type="checkbox"
                                onChange={() => handleToggle(!toggle)}
                                name="hideIncident"
                                id="hideIncident"
                                checked={toggle}
                                style={{
                                    opacity: 0,
                                    width: 0,
                                    height: 0,
                                }}
                            />
                            <ToggleSpan
                                className="TogglerBtn-slider round"
                                toggle={toggle}
                            ></ToggleSpan>
                        </Label>
                        <HeaderText>
                            {toggle
                                ? 'Switch to create a customer account'
                                : 'Switch to create a brand account'}
                        </HeaderText>
                    </ToggleWrap>
                    <ButtonWrap
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <HeaderText>
                            {props.login
                                ? "Don't have an account?"
                                : 'Already have an account'}
                        </HeaderText>
                        <MyButton
                            title={props.login ? 'Create account' : 'Sign in'}
                            runAction={handleRoute}
                            font={'15px'}
                        />
                    </ButtonWrap>
                </Header>
                <ChildrenWrap switch={toggle}>{props.children}</ChildrenWrap>
            </RightSection>
        </Container>
    );
};

AuthLayout.displayName = 'AuthLayout';

AuthLayout.propTypes = {
    toggleForm: PropTypes.func,
    login: PropTypes.string,
    children: PropTypes.node,
    switchForm: PropTypes.string,
};

const mapStateToProps = state => {
    return {
        switchForm: state.ui.toggleForm,
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators({ toggleForm }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout);
