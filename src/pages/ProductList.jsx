import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

import Products from '../components/Products/Products';
import { media } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  /* padding: 0px 20px; */
  /* display: grid; */
  /* width: 100%; */
  /* grid-template-columns: 250px 1fr 50px; */
  /* flex-direction: space-between */
  display: block;
  ${media({
    display: 'block',
    flexDirection: 'space-between'
  })};
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 50px;
  letter-spacing: -0.5px;
  ${media({
    flexDirection: 'row',
    padding: '0',
    borderBottom: '0.5px solid grey'
  })}
`;
const Filter = styled.div`
  width: 8rem;
  font-size: 11px;
  font-weight: 600;
  margin-top: 40px;
  ${media({
    margin: '17px 35px',
    width: '10rem',
    flexDirection: 'space-between',
    alignContent: 'center'
  })}
`;
const VerticalLine = styled.div`
  ${media({
    borderRight: '0.1px solid grey',
    width: '0.1px',
    height: '80px'
  })}
`;

const Select = styled.select`
  display: block;
  width: 100%;
  margin: 10px 0;
  border: none;
  font-size: 11px;
  ${media({ display: 'flex', margin: '10px 0px 0px 0px' })}
`;
const Option = styled.option``;
const Category = styled.div`
  font-size: 45px;
  font-weight: 300;
  margin: 0px 0px 40px 160px;
  ${media({
    borderBottom: '0.5px solid grey',
    padding: '2rem',
    margin: '0px'
  })};
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  console.log(cat);

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('featured');

  const handleFilters = e => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value
    });
  };

  return (
    <Container>
      <Category>SHOP ALL</Category>
      <Wrapper>
        <FilterContainer>
          <Filter>
            <p>정렬</p>
            <Select onChange={e => setSort(e.target.value)}>
              <Option value='featured'>Featured</Option>
              <Option value='asc'>낮은가격순</Option>
              <Option value='desc'>높은가격순</Option>
            </Select>
          </Filter>
          <VerticalLine></VerticalLine>
          <Filter>
            <p>전체 카테고리</p>
            <Select name='size' onChange={handleFilters}>
              <Option>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>FREE</Option>
            </Select>
            {/* <Select name='color' onChange={handleFilters} disabled>
              <Option>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select> */}
          </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort} />
      </Wrapper>
    </Container>
  );
};

export default ProductList;
