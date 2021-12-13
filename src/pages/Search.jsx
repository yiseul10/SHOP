import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
import Axios from 'axios';
import Products from '../components/Products/Products';
import ProductList from '../pages/ProductList';

import { media } from '../responsive';

const Container = styled.div`
  width: 100%;
  left: 0;
  top: 95px;
  height: 70px;
  position: absolute;
  padding: 9px 60px;
  background-color: white;
  opacity: 100%;
  transition: all 2s ease;
  z-index: 1;
  box-shadow: 0px 1rem 0.3rem -1rem rgba(0, 0, 0, 0.1);

  &.clicked {
    display: none;
  }
`;
const InputForm = styled.form`
  border-top: 0.1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
  padding-top: 1rem;
`;
const SearchInput = styled.input`
  border: none;
  width: 25rem;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
const SearchIcon = styled.button`
  background-color: transparent;
  border: none;
`;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 50px;
  justify-content: space-between;
  letter-spacing: -0.5px;

  ${media({
    flexDirection: 'row',
    borderBottom: '0.5px solid grey'
  })}
`;
export const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [products, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState();

  const fetchSearch = async e => {
    try {
      const response = await Axios.get(`?page=${page}&product=${keyword}`);
      console.log('데이터', response.data);
      setProduct(response.data.products);
      setNumberOfPages(response.data.endPage);
    } catch (err) {}
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [keyword, page]);

  return (
    <Container>
      <InputForm onSubmit={fetchSearch}>
        <SearchInput
          onChange={e => setKeyword(e.target.value)}
          value={keyword}
          type='search'
          placeholder='search store...'
        ></SearchInput>
        <SearchIcon>
          <BsArrowRight />
        </SearchIcon>
      </InputForm>
      <ProductContainer>
        <Products keyword={keyword} setKeyword={setKeyword} />
      </ProductContainer>
      {!keyword && <h2>No Search result</h2>}
    </Container>
  );
};


