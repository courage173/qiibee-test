import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MyButton from './Button';
import PropTypes from 'prop-types';

const Wrap = styled.div`
    height: 3.5rem;
    background-color: #fff;
    box-shadow: 0px 6px 12px rgba(8, 35, 48, 0.1);
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 15px 0;
`;
const Image = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
`;
const Name = styled.h4`
    font-weight: 500;
    margin-left: 10px;
`;
const Email = styled.h4`
    font-weight: 500;
    word-break: break-word;
    @media (max-width: 768px) {
        display: none;
    }
`;
const RoyaltyPoint = styled.div`
    transform: skewX(-10deg);
    background-color: red;
    padding: 10px;
    margin-left: 5px;
    color: #fff;
    margin-right: 20px;
`;

const BottonWrap = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;

const UserCard = props => {
    const [idx, setIdx] = useState(null);
    useEffect(() => {
        setIdx(null);
    }, [props.selectBox]);
    const handleCheck = id => {
        if (idx !== id) {
            setIdx(id);
        } else {
            setIdx(null);
        }
        props.handleSetUser(id);
    };
    return (
        <Wrap>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {props.selectBox ? (
                    <input
                        type="checkbox"
                        checked={idx === props.id}
                        onChange={() => handleCheck(props.id)}
                    />
                ) : null}
                <Image src={props.image} />
                <Name>{props.firstName + ' ' + props.lastName}</Name>
            </div>
            <Email>{props.email}</Email>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <RoyaltyPoint>{props.loyalty}</RoyaltyPoint>
                <BottonWrap>
                    <MyButton
                        title="Reward"
                        bgColor={'#3a8dff'}
                        color="#fff"
                        width="4.5rem"
                        height="2.7rem"
                        secBg
                        runAction={props.runAction}
                    />
                </BottonWrap>
            </div>
        </Wrap>
    );
};

UserCard.displayName = 'UserCard';
UserCard.propTypes = {
    runAction: PropTypes.func,
    selectBox: PropTypes.bool,
    handleSetUser: PropTypes.func,
    id: PropTypes.string,
    image: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    loyalty: PropTypes.string,
};
export default UserCard;
