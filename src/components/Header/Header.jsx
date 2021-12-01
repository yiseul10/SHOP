import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../responsive';

import { ShoppingCartOutlined } from '@material-ui/icons';
import { IoSearchOutline, IoMenuOutline } from 'react-icons/io5';
import { Badge } from '@material-ui/core';

import Searchbar from './Searchbar';
import SlideNav from './SlideNav';
import { useSelector } from 'react-redux';

import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  font-weight: 500;
  box-shadow: 0px 1rem 0.3rem -1rem rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100vw;
  z-index: 1;
  padding-top: 1.7rem;
  background-color: white;
`;

const Wrapper = styled.div`
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media({ padding: '10px 30px' })}
`;

const Left = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  ${media({ justifyContent: 'flex-start' })}
`;
const Center = styled.div`
  flex: 2;
  text-align: center;
  margin-bottom: 0.6rem;
`;
const Logo = styled(Link)`
  font-weight: bold;
  font-family: 'Unna', serif;
  font-size: 33px;
  z-index: 1;
  &:hover {
    text-decoration: none;
  }
  ${media({ flex: 1 })}
`;
const Right = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${media({ justifyContent: 'flex-end' })}
`;
const LeftMenu = styled(Link)`
  cursor: pointer;
  padding: 28px 0px;
  ${media({ display: 'none' })}
`;

const MenuItem = styled(Link)`
  cursor: pointer;
`;
const MenuHandle = styled(Link)`
  cursor: pointer;
  ${media({ display: 'none' })}
`;
const Invisible = styled.div`
  display: none;
  cursor: pointer;
  font-size: 27px;
  ${media({ display: 'inline' })}
`;
const Search = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${media({ display: 'none' })}
`;

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [showSlide, setShowSlide] = useState(false);
  const handleSlide = () => setShowSlide(!showSlide);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://pvpvpvpvp.gonetis.com:8080/sample/products`
        );
        setProduct(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, []);

  const quantity = useSelector(state => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Invisible>
            <IoMenuOutline onClick={handleSlide} />
            {showSlide ? <SlideNav /> : null}
          </Invisible>

          <LeftMenu to='/products'>
            <p>COLLECTION</p>
          </LeftMenu>

          <LeftMenu to='/'>CUSTOM</LeftMenu>
          <LeftMenu to='/review'>REVIEW</LeftMenu>
          <Search onClick={handleClick}>검색</Search>
          {click ? <Searchbar product={product} /> : null}
          <Invisible>
            <IoSearchOutline
              onClick={handleClick}
              style={{ fontSize: ' 21px', marginLeft: '22px' }}
            />
            {click ? <Searchbar /> : null}
          </Invisible>
        </Left>
        <Center>
          <Logo to='/'>SHOP</Logo>
        </Center>
        <Right>
          <MenuHandle to='/login'>LOGIN</MenuHandle>
          <MenuHandle to='/customerService'>고객센터</MenuHandle>
          <MenuHandle to='/wish' product={product}>
            위시리스트
          </MenuHandle>
          <MenuItem to='/cart'>
            <Badge badgeContent={quantity} color='error'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Header;
