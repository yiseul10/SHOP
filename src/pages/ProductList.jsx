import React, { useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

import Products from "../components/Products";
import { media } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 250px 1fr 50px;
  ${media({
    display: "block",
    flexDirection: "space-between"
  })}
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: -0.5px;

  ${media({
    flexDirection: "row",
    borderBottom: "0.5px solid grey"
  })}
`;
const Filter = styled.div`
  padding-left: 50px;
  padding-right: 20px;
  width: 100%;
  font-size: 11px;
  font-weight: 600;
  margin-top: 40px;
  ${media({
    padding: "20px",
    flexDirection: "space-between",
    marginTop: "0"
  })}
`;
const VerticalLine = styled.div`
  ${media({
    borderRight: "0.1px solid grey",
    width: "0.1px",
    height: "110px"
  })}
`;

const FilterText = styled.span``;
const Select = styled.select`
  display: block;
  width: 100%;
  margin: 10px 0;
  border: none;
  font-size: 11px;
  ${media({ display: "flex" })}
`;
const Option = styled.option``;
const Category = styled.div`
  font-size: 25px;
  font-family: "Unna", serif;
  padding: 100px 30px 50px 50px;

  ${media({
    borderBottom: "0.5px solid grey",
    textAlign: "center",
    height: "100%",
    padding: "10px",
    fontSize: "18px"
  })}
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("featured");

  const handleFilters = e => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value
    });
  };
  console.log(filters);

  return (
    <Container>
      <Category>{cat}</Category>
      <Wrapper>
        <FilterContainer>
          <Filter>
            <FilterText>정렬</FilterText>
            <Select
              onChange={e => setSort(e.target.value)}
              style={{ marginBottom: 20 }}
            >
              <Option value="featured">Featured</Option>
              <Option value="popular">인기 상품</Option>
              <Option value="popular">높은 가격순</Option>
              <Option value="popular">낮은 가격순</Option>
            </Select>
          </Filter>
          <VerticalLine></VerticalLine>
          <Filter>
            <FilterText>전체 카테고리</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL~</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products filters={filters} sort={sort} />
      </Wrapper>
    </Container>
  );
};

export default ProductList;
