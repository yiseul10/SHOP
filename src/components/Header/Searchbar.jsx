import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

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
const InputHandle = styled.form`
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
const Searchbar = ({ product }) => {
  const [keyword, setKeyword] = useState("");
  const onChange = e => setKeyword(e.target.value);
  useEffect(() => {
    if (keyword !== "") {
    }
  }, [keyword]);
  console.log(keyword);

  return (
    <Container>
      <InputHandle>
        <SearchInput
          onChange={onChange}
          value={keyword}
          type="search"
          placeholder="search store..."
        ></SearchInput>
        <SearchIcon>
          <BsArrowRight />
        </SearchIcon>
      </InputHandle>
    </Container>
  );
};

export default Searchbar;
