import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../responsive';
import { LoginModal, LoginPage, SignUpPage } from 'components/modal';
import { useHistory } from 'react-router-dom';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

import { getTotals } from '../../store/cart-slice';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import SlideNav from '../Nav/SlideNav';
import { useAxios } from './useAxios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  font-weight: 500;
  box-shadow: var(--box-shadow);
  position: fixed;
  z-index: 10;
  padding-top: 1.7rem;
  background-color: var(--back-color);
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
  z-index: 10;
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

const UserInfo = styled.div`
  display: flex;
  gap: 15px;
  padding-top: 15px;
`;
const Login = styled.div`
  ${media({ paddingRight: '1rem' })}
`;

function Header() {
  const axiosCustom = useAxios();
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [userName, setUserName] = useState('');
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    dispatch(getTotals());

    if (localStorage.getItem('authorization')) {
      (async () => {
        const res = await axiosCustom.get('/user'); // todo: getUser 현재 로그인 중인 유저 정보 api
        setUserName(res.data.nickName);
        console.log(res);
      })();
    }
    // setUserName("박일규"); //todo: api통신되면 지울 것
  }, [cart, dispatch]);

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
    history.push('/passwordsearch');
  }

  function onLogoutBtn() {
    localStorage.removeItem('authorization');
    history.go(0);
  }

  function test() {
    setIsmodalUp(false);
  }

  const handleClick = () => {
    setClick(!click);
    history.push('/search');
  };

  const handleScroll = () => {
    window.scroll(0, 0);
  };

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
          onRequestClose={test}
          isModalClose={isModalDown}
          setIsModalVisible={setIsmodalUp}
          components={
            isSwitch ? (
              <SignUpPage />
            ) : (
              <LoginPage signup={onSwitchBtn} onPwSearchBtn={onPwSearchClick} />
            )
          }
        />

        <Right>
          {userName ? (
            <UserInfo>
              <p onClick={() => history.push('/mypage/my')}>{userName} 님</p>
              <p onClick={onLogoutBtn}>logout</p>
            </UserInfo>
          ) : (
            <Login className='login' onClick={isModalOpen}>
              로그인
            </Login>
          )}
          <MenuHandle to='/Customer/cs'>고객센터</MenuHandle>

          <MenuItem to='/cart'>
            <Badge badgeContent={cart.quantity} color='error'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Header;
