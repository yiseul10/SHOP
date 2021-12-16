import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../responsive';
import {
  LoginModal,
  LoginPage,
  SignUpPage,
  pwSearchModal
} from 'components/modal';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

import { getTotals } from '../../store/cart-slice';
import { useSelector, useDispatch } from 'react-redux';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import SlideNav from '../Nav/SlideNav';

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
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 1;
  ${media({ padding: '10px 30px' })};
`;

const Left = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  list-style: none;
`;
const Center = styled.div`
  text-align: center;
  margin-bottom: 0.6rem;
  ${media({ margin: '0' })}
`;
const Logo = styled(Link)`
  font-weight: bold;
  font-family: 'Unna', serif;
  font-size: 33px;
  z-index: 1;
  &:hover {
    text-decoration: none;
  }
`;
const Right = styled.ul`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media({ justifyContent: 'flex-end' })}
  cursor: pointer;
  .login {
    &:hover {
      text-decoration: underline;
    }
  }
`;
const LeftMenu = styled(Link)`
  cursor: pointer;
  padding: 28px 0px;
  ${media({ display: 'none' })}
`;

const MenuItem = styled(Link)`
  cursor: pointer;
  ${media({ zIndex: '0' })}
`;
const MenuHandle = styled(Link)`
  cursor: pointer;
  ${media({ display: 'none' })}
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
  // const { quantity } = useSelector(state => state.cart);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleClick = () => {
    setClick(!click);
    history.push('/search');
  };

  const handleScroll = () => {
    window.scroll(0, 0);
  };

  const quantity = useSelector(state => state.cart.quantity);

  const [isModalUp, setIsmodalUp] = useState(false);
  const [isSwitch, setIsSwitch] = useState(false);

  useEffect(() => {
    if (!isModalUp) {
      setIsSwitch(false);
    }
  }, [isModalUp]);

  function isModalOpen() {
    setIsmodalUp(true);
  }

  function isModalDown() {
    setIsmodalUp(false);
  }

  function onSwitchBtn() {
    setIsSwitch(true);
  }

  function onPwSearchClick() {
    setIsmodalUp(false);
    history.push('passwordsearch');
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          {isMobile && <SlideNav />}
          <LeftMenu to={`/products/product`}>COLLECTION</LeftMenu>
          <MenuHandle to='/wish'>위시리스트</MenuHandle>
          <Search onClick={handleClick}>검색</Search>
        </Left>
        <Center>
          <Logo to='/' onClick={handleScroll}>
            SHOP
          </Logo>
        </Center>
        <LoginModal
          isVisible={isModalUp}
          isModalClose={isModalDown}
          components={
            isSwitch ? (
              <SignUpPage />
            ) : (
              <LoginPage signup={onSwitchBtn} onPwSearchBtn={onPwSearchClick} />
            )
          }
        />

        <Right>
          <MenuHandle className='login' onClick={isModalOpen}>
            로그인
          </MenuHandle>
          <MenuHandle to='/customerService/service'>고객센터</MenuHandle>

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
