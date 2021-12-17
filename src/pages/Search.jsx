import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Axios from 'axios';
import Products from '../components/Products/Products';

import { media } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  left: 0;
  top: 89.5px;
  height: 70px;
  position: fixed;
  padding: 10px 60px;
  background-color: white;
  opacity: 100%;
  transition: all 2s ease;
  z-index: 0;
  box-shadow: 0px 1rem 0.3rem -1rem rgba(0, 0, 0, 0.1);
  &.clicked {
    display: none;
  },

`;
const InputForm = styled.form`
  border-top: 0.1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  position: fixed;
  padding-top: 1rem;
  left: 0;
  width: 100%;
  ${media({
    top: '97.5px'
  })}
`;
const SearchInput = styled.input`
  border: none;
  width: 25rem;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 170px 0px;
  justify-content: space-between;
  letter-spacing: -0.5px;
  ${media({
    flexDirection: 'row'
  })}
`;
const ExKeyword = styled.div`
  padding: 200px 0px;
  font-size: 11px;
  width: 100%;
  text-align: center;
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
      <Wrapper>
        <InputForm onSubmit={fetchSearch}>
          <SearchInput
            onChange={e => setKeyword(e.target.value)}
            value={keyword}
            type='search'
            placeholder='search store...'
          ></SearchInput>
        </InputForm>
      </Wrapper>

      {!keyword && (
        <ExKeyword>
          인기검색:&nbsp;&nbsp;
          <a style={{ backgroundColor: '#68EDCB', padding: '0px 4px' }}>
            #기모
          </a>
          <a style={{ backgroundColor: '#00A749', padding: '0px 4px' }}>
            #패딩
          </a>
          <a style={{ backgroundColor: '#D3FBD8', padding: '0px 4px' }}>
            #아메리칸어패럴
          </a>
          <a style={{ backgroundColor: '#F8FFF8', padding: '0px 4px' }}>
            #맨투맨
          </a>
          <a style={{ backgroundColor: '#D5F1B5', padding: '0px 4px' }}>
            #티셔츠
          </a>
        </ExKeyword>
      )}
      <ProductContainer>
        <Products keyword={keyword} setKeyword={setKeyword} />
      </ProductContainer>
    </Container>
  );
};
