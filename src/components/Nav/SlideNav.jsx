import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuToggle } from './menuToggle';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Overlay = styled.div`
  width: 100%;
  height: 100%
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
  gap: 1.5rem;
  width: 100%;
  transition: all 0.3s ease;
  height: 100%;
  top: 0px;
  left: 0px;
  padding: 100px 25px 0px 25px;
  font-size: 21px;
  font-weight: 300;
  margin: 0;
  z-index: 1;
`;

const Toggle = styled.div`
  position: absolute;
  top: 51px;
  left: 23px;
  z-index: 999;
`;

const LineDiv = styled.div`
  width: 40px;
  border-bottom: 0.1px solid black;
`;
const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
              <Link to={`/products/product`}>COLLECTION</Link>
            </li>
            <BsArrowLeft />
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
          <li>
            <Link to='/'>Login</Link>
          </li>
        </Content>
      )}
    </Overlay>
  );
};

export default SlideNav;
