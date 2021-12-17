import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../responsive';
import Products from '../components/Products/Products';

const Container = styled.div`
  padding: 8rem 0rem;
  ${media({ padding: '7.5rem 0rem' })}
`;
const Wrapper = styled.div`
  display: block;
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
    borderBottom: '0.5px solid grey',
    borderTop: '0.5px solid grey'
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
  font-weight: 300;
  font-family: 'Redacted Script', cursive;
  text-align: center;
  font-size: 18px;
  margin-top: 2rem;
  ${media({
    display: 'none'
  })};
`;
const MobileCat = styled.div`
  display: none;
  ${media({
    display: 'block',
    fontWeight: '300',
    fontFamily: 'Redacted Script, cursive',
    textAlign: 'center',
    fontSize: '15px',
    marginTop: '40px'
  })}
`;

export const ProductList = () => {
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
      <Wrapper>
        <Category>{cat}</Category>
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
            <p>사이즈</p>
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
        <MobileCat>{cat}</MobileCat>
        <Products cat={cat} filters={filters} sort={sort} />
      </Wrapper>
    </Container>
  );
};
