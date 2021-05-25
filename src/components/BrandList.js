import React from "react";
import styled from "@emotion/styled";
import BrandCard from "../utils/BrandCard";
import { brands } from "../utils/data";

const Container = styled.div`
  background: #f5f5f5;
  box-shadow: 0px 6px 12px rgba(8, 35, 48, 0.14);
  border-radius: 8px;
  width: 85%;
  min-height: 85%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

const BrandList = () => {
  return (
    <Container>
      <div></div>
      {brands.map((brand) => (
        <BrandCard
          name={brand.name}
          loyalty={brand.loyalty}
          image={brand.image}
        />
      ))}
    </Container>
  );
};

export default BrandList;
