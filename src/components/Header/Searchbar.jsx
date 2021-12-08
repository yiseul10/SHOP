import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
import { fetchProducts } from '../../store/api-call';

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
const Searchbar = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (keyword !== "") {
  //   }
  // }, [keyword]);

  const submitHandler = e => {
    e.preventDefault();
    console.log(keyword);
    dispatch(fetchProducts(keyword));
    setKeyword('');
  };

  return (
    <Container>
      <InputForm onSubmit={submitHandler}>
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
    </Container>
  );
};

export default Searchbar;
