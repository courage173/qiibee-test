import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    margin-top: ${props => props.marginTop && props.marginTop};
`;
const Svg = styled.svg`
    position: relative;
    display: flex;
    width: 16px;
    height: 16px;
    animation: SpinnerAnimationShow 0.25s normal ease,
        SpinnerAnimationRotation 0.7s linear infinite;
    transition-property: opacity, transform;
    transition-timing-function: ease;
    transform-origin: 50% 50%;
    @keyframes SpinnerAnimationShow {
        0% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes SpinnerAnimationRotation {
        0% {
            transform: scaleX(-1) rotate(0);
        }
        50% {
            transform: scaleX(-1) rotate(-180deg);
        }
        to {
            transform: scaleX(-1) rotate(-1turn);
        }
    }
`;
const Ellipse = styled.ellipse`
    fill: transparent;
    stroke: #8898aa;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-dasharray: 60;
    stroke-dashoffset: 20;
`;

const Spinner = props => {
    return (
        <Container marginTop={props.marginTop}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <div style={{ transform: 'scale(2)' }}>
                    <Svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <Ellipse cx="12" cy="12" rx="10" ry="10"></Ellipse>
                    </Svg>
                </div>
            </div>
        </Container>
    );
};

export default Spinner;
