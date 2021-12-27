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
  z-index: 100;
`;

const Content = styled.ul`
  background-color: var(--back-color);
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
  opacity: 100%;
  & a:hover {
    text-decoration: none;
    opacity: 60%;
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
  border-bottom: 0.1px solid var(--main-line-color);
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
  font-size: 11px;
  font-weight: 500;
  & a:hover {
    text-decoration: underline;
    opacity: 100;
  }
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
            <Link to={`/products/아우터`}>OUTER</Link>
          </li>

          <li>
            <Link to={`/products/맨투맨-후드-집업`}>TOP</Link>
          </li>

          <li>
            <Link to={`/products/티셔츠-셔츠`}>T-SHIRT</Link>
          </li>
          <li>
            <Link to={`/products/바지`}>PANTS</Link>
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
            {/* <Link to={`/`}>로그인</Link> */}
            <Link to={`/wish`}>위시리스트</Link>
            <div>ABOUT US</div>
          </NavBottom>
        </Content>
      )}
    </Overlay>
  );
};

export default SlideNav;
