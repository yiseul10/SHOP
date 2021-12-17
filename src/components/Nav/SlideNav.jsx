import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { MenuToggle } from './menuToggle';
import { GoSearch } from 'react-icons/go';

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  display: flex;
  z-index: 1;
`;

const Content = styled.ul`
  background-color: rgb(255, 255, 255, 0.9);
  list-style: none;
  display: flex;
  flex-direction: column;
  position: fixed;
  gap: 1.1rem;
  width: 100%;
  transition: all 0.3s ease;
  height: 100%;
  top: 0px;
  left: 0px;
  margin: 0;
  padding: 100px 25px 0px 25px;
  font-size: 21px;
  font-weight: 300;

  & a:hover {
    text-decoration: none;
    opacity: 50%;
    transition: all 0.5s ease;
  }
`;

const Toggle = styled.div`
  position: absolute;
  top: 51px;
  left: 23px;
  z-index: 999;
`;

const LineDiv = styled.div`
  width: 100%;
  border-bottom: 0.1px solid #303030;
`;
const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const NavBottom = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
`;

const SlideNav = props => {
  const [isOpen, setOpen] = useState(false);

  const [wide, setWide] = useState(false);

  return (
    <Overlay>
      <Toggle>
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      </Toggle>
      {isOpen && (
        <Content onClick={() => setOpen(!isOpen)} clicked={wide}>
          <Menu>
            <li>
              <Link to={`/products/product`}>전체상품</Link>
            </li>
            <li></li>
          </Menu>
          <LineDiv />
          <li>
            <Link to={`/products/아우터`}>Outer</Link>
          </li>

          <li>
            <Link to={`/products/맨투맨-후드-집업`}>Top</Link>
          </li>

          <li>
            <Link to={`/products/티셔츠-셔츠`}>T-shirt</Link>
          </li>
          <li>
            <Link to={`/products/바지`}>Pants</Link>
          </li>
          <LineDiv />
          <Link to={`/search`}>
            검색
            <GoSearch
              style={{
                fontSize: '18px',
                marginLeft: '10px'
              }}
            />
          </Link>
          <LineDiv />
          <NavBottom>
            <Link to={`/login`}>로그인</Link>
            <div>About us</div>
            <Link to={`/wish`}>위시리스트</Link>
          </NavBottom>
        </Content>
      )}
    </Overlay>
  );
};

export default SlideNav;
