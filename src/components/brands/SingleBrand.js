import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "@emotion/styled";
import DashboardLayout from "../../HOC/DashboardLayout";
import MyButton from "../../utils/Button";
import { getBrand } from "../../redux/actions/brand";
import Spinner from "../../utils/Spinner";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 12px rgba(8, 35, 48, 0.14);
  border-radius: 8px;
  width: 65%;
  height: 70%;
  display: flex;
  justify-content: center;
`;

const DetailWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: center;
`;

const BrandLogo = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid rgb(134 185 255 / 85%);
  box-shadow: 0px 6px 12px rgba(8, 35, 48, 0.1);
`;

const RedeemWrap = styled.div`
  width: 40%;
`;

const RedeemTop = styled.div`
  height: 50%;
  background-color: #3a8dff;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const RedeemBottom = styled.div`
  height: 50%;
  background-color: rgb(134 185 255 / 85%);
  padding: 0 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const H4 = styled.h4`
  font-size: 24px;
  line-height: 26px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 0;
  padding-top: 10px;
  text-align: center;
`;
const Input = styled.input`
  width: 6rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 2rem;
  outline: none;
  border: none;
  padding: 3px;
`;

const RoyaltyPoint = styled.div`
  transform: skewX(-10deg);
  background-color: red;
  padding: 10px;
  margin-left: 5px;
`;
const H5 = styled.h4`
  font-size: 24px;
  line-height: 26px;
  font-weight: 600;
  margin-top: 0;
  padding-top: 10px;
  text-align: center;
`;

const SingleBrand = (props) => {
  const [point, setPoint] = useState(0);
  const { getBrand, brand } = props;
  const id = props.match.params.id;
  useEffect(() => {
    getBrand(id);
  }, [id, getBrand]);
  return (
    <DashboardLayout>
      <Wrapper>
        {props.requesting ? (
          <Spinner marginTop="250px" />
        ) : (
          <Container>
            <DetailWrap>
              <H4
                style={{
                  color: "black",
                  fontSize: "35px",
                  opacity: 0.5,
                }}
              >
                Brand Details
              </H4>
              <BrandLogo src={brand.image} />
              <H5>Brand name - {brand.name}</H5>
              <H5>Total loyalty points</H5>
              <span
                style={{
                  fontSize: "24px",
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                <RoyaltyPoint>{brand.loyalty}</RoyaltyPoint>
              </span>
            </DetailWrap>
            <RedeemWrap>
              <RedeemTop>
                <H4>Loyalty points</H4>
                <div
                  style={{
                    color: "#fff",
                    fontSize: "30px",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  <RoyaltyPoint>54640</RoyaltyPoint>{" "}
                </div>
              </RedeemTop>
              <RedeemBottom>
                <H4
                  style={{
                    marginTop: "15px",
                    fontSize: "20px",
                  }}
                >
                  Redeem Loyalty Point
                </H4>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <Input
                    type="number"
                    value={point}
                    onChange={(e) => {
                      setPoint(e.target.val);
                    }}
                  />
                  <MyButton
                    title="Redeem"
                    width="6rem"
                    height="2.4rem"
                    style={{
                      borderTopLeftRadius: "0",
                      borderBottomLeftRadius: "0",
                    }}
                    bgColor={"#3a8dff"}
                    color="#fff"
                  />
                </div>
              </RedeemBottom>
            </RedeemWrap>
          </Container>
        )}
      </Wrapper>
    </DashboardLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    brand: state.brand.fetchBrand.brand,
    requesting: state.brand.fetchBrand.requesting,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getBrand }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SingleBrand));
