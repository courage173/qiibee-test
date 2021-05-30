import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BrandCard from "../../utils/BrandCard";
import { history } from "../../redux/store";
import { followBrand } from "../../redux/actions/brand";
import { ofActionSuccessful } from "../../redux/epics/allEpic";
import { getUser } from "../../redux/actions/user";

const Container = styled.div`
  background: #f5f5f5;
  box-shadow: 0px 6px 12px rgba(8, 35, 48, 0.14);
  border-radius: 8px;
  width: 85%;
  min-height: 85%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  padding: 50px 0;
  @media (max-width: 768px) {
    box-shadow: none;
    height: 100%;
  }
`;

const BrandList = (props) => {
  const navigate = (id) => {
    history.push(`/dashboard/brand/${id}`);
  };
  const handleFollow = (e, id) => {
    e.stopPropagation();
    props.followBrand({ id: id });
    ofActionSuccessful("FOLLOW_BRAND_SUCCESS").subscribe((action) => {
      props.getUser();
    });
  };
  return (
    <Container>
      <div></div>
      {props.brands.map((brand) => {
        const isFollowing = props.user.brands.includes(brand.id);
        return (
          <BrandCard
            name={brand.name}
            loyalty={brand.loyalty}
            image={brand.image}
            id={brand.id}
            runAction={() => navigate(brand.id)}
            isFollowing={isFollowing}
            handleFollow={(e) => handleFollow(e, brand.id)}
          />
        );
      })}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    brands: state.brand.brands,
    user: state.user.user,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ followBrand, getUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BrandList);
