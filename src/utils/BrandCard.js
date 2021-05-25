import React from "react";
import styled from "@emotion/styled";
import cokeLogo from "../assets/images/fb.png";

const Container = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 7px;
  background: #ffffff;
  cursor: pointer;
  box-shadow: 0px 6px 12px rgba(8, 35, 48, 0.1);
  border-radius: 8px;
  margin: 20px;
`;
const LogoSection = styled.div`
  height: 8rem;
`;
const BottomCard = styled.div`
  height: 7rem;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;

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
const BrandCard = (props) => {
  return (
    <Container>
      <LogoSection>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "7px",
          }}
          src={props.image}
          alt="logo"
        />
      </LogoSection>
      <BottomCard>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <BrandName>{props.name}</BrandName>
          <RoyaltySpan>
            Loyalty points <RoyaltyPoint>{props.loyalty}</RoyaltyPoint>
          </RoyaltySpan>
        </div>
      </BottomCard>
    </Container>
  );
};

export default BrandCard;
