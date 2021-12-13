import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Link, useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { media } from '../../responsive';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { IoSearchOutline } from 'react-icons/io5';
import { Badge } from '@material-ui/core';

import SlideNav from '../Nav/SlideNav';
import { getTotals } from '../../store/cart-slice';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  font-weight: 500;
  box-shadow: 0px 1rem 0.3rem -1rem rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
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

  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector(state => state.cart);
  const { quantity } = useSelector(state => state.cart);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleClick = () => {
    setClick(!click);
    history.push('/search');
  };
  const [showSlide, setShowSlide] = useState(false);
  const handleSlide = () => setShowSlide(!showSlide);

  const handleScroll = () => {
    window.scroll(0, 0);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          {isMobile && <SlideNav />}
          <LeftMenu to={`/product`}>
            <p>COLLECTION</p>
          </LeftMenu>

          <LeftMenu to='/'>CUSTOM</LeftMenu>
          <LeftMenu to='/review'>REVIEW</LeftMenu>
          <Search onClick={handleClick}>검색</Search>

          <Invisible>
            <IoSearchOutline
              onClick={handleClick}
              style={{ fontSize: ' 21px', marginLeft: '22px' }}
            />
          </Invisible>
        </Left>
        <Center>
          <Logo to='/' onClick={handleScroll}>
            SHOP
          </Logo>
        </Center>
        <Right>
          <MenuHandle to='/login'>LOGIN</MenuHandle>
          <MenuHandle to='/customerService'>고객센터</MenuHandle>
          <MenuHandle to='/wish'>위시리스트</MenuHandle>
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
