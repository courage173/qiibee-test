import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
    width: 15rem;
    height: 10rem;
    border-radius: 7px;
    background: #ffffff;
    cursor: pointer;
    box-shadow: 0px 6px 12px rgba(8, 35, 48, 0.1);
    border-radius: 8px;
    margin: 20px;
    background-color: #fff;
`;
const LogoSection = styled.div`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: 1px solid #f5f5f5;
    margin: 10px 5px 0 10px;
`;
const BottomCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;

    padding: 0 15px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
`;
const RoyaltyPoint = styled.div`
    transform: skewX(-10deg);
    background-color: red;
    color: #fff;
    padding: 10px;
    margin-left: 5px;
`;

const BrandName = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
`;
const RoyaltySpan = styled.span`
    display: flex;
    margin-top: 10px;
    align-items: center;
`;
const TopSection = styled.div`
    display: flex;
    align-items: center;
`;
const Follow = styled.div`
    justify-content: center;
    align-items: flex-end;
    display: flex;
    width: 100%;
    margin-top: 10px;
`;
const Para = styled.button`
    font-size: 15px;
    width: 5rem;
    color: ${props => (props.follow ? '#fff' : '#3a8dff')};
    padding: 5px;
    border: ${props => (props.follow ? 'none' : '1px solid #3a8dff')};
    background-color: ${props => (props.follow ? '#3a8dff' : '#fff')};
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: #0d5ece;
        color: ${props => !props.follow && '#fff'};
    }
`;

const BrandCard = props => {
    return (
        <Container onClick={props.runAction} key={props.id}>
            <TopSection>
                <LogoSection>
                    <img
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '50%',
                        }}
                        src={props.image}
                        alt="logo"
                    />
                </LogoSection>
                <BrandName>{props.name}</BrandName>
            </TopSection>
            <BottomCard>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <RoyaltySpan>
                        Loyalty points{' '}
                        <RoyaltyPoint>{props.loyalty}</RoyaltyPoint>
                    </RoyaltySpan>
                </div>
            </BottomCard>
            <Follow>
                <Para follow={props.isFollowing} onClick={props.handleFollow}>
                    {props.isFollowing ? 'following' : 'follow'}
                </Para>
            </Follow>
        </Container>
    );
};

BrandCard.displayName = 'BrandCard';
BrandCard.propTypes = {
    isFollowing: PropTypes.bool,
    handleFollow: PropTypes.func,
    loyalty: PropTypes.string,
    name: PropTypes.string,
    runAction: PropTypes.func,
    id: PropTypes.string,
    image: PropTypes.string,
};
export default BrandCard;
