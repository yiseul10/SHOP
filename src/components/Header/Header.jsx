import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../../responsive";
import {
  LoginModal,
  LoginPage,
  SignUpPage,
  pwSearchModal,
} from "components/modal";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

import { ShoppingCartOutlined } from "@material-ui/icons";
import { IoSearchOutline, IoMenuOutline } from "react-icons/io5";
import { Badge } from "@material-ui/core";


import SlideNav from "./SlideNav";
import Searchbar from './Searchbar';
import { getTotals } from '../../store/cart-slice';

import { useSelector, useDispatch } from 'react-redux';
import { useContext } from 'react';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  font-weight: 500;
  box-shadow: 0px 1rem 0.3rem -1rem rgba(0, 0, 0, 0.1);
  /* position: fixed; // fixed는 부유 객체라 다른 컴포넌트들이 밑으로 깔림. app.js에 pages 컴포넌트 보다 위에 선언되어 화면 가장 위에 보여짐. */
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
  ${media({ padding: "10px 30px" })}
`;

const Left = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  ${media({ justifyContent: "flex-start" })}
`;
const Center = styled.div`
  flex: 2;
  text-align: center;
  margin-bottom: 0.6rem;
`;
const Logo = styled(Link)`
  font-weight: bold;
  font-family: "Unna", serif;
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
  ${media({ justifyContent: "flex-end" })}
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
  ${media({ display: "none" })}
`;

const MenuItem = styled(Link)`
  cursor: pointer;
`;
const MenuHandle = styled(Link)`
  cursor: pointer;
  ${media({ display: "none" })}
`;
const Invisible = styled.div`
  display: none;
  cursor: pointer;
  font-size: 27px;
  ${media({ display: "inline" })}
`;
const Search = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${media({ display: "none" })}
`;
function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector(state => state.cart);
  // const { quantity } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    history.push('/search');
  };
  const [showSlide, setShowSlide] = useState(false);
  const handleSlide = () => setShowSlide(!showSlide);

  const quantity = useSelector((state) => state.cart.quantity);

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
    history.push("passwordsearch");
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Invisible>
            <IoMenuOutline onClick={handleSlide} />
            {showSlide ? <SlideNav /> : null}
          </Invisible>

          <LeftMenu to={`/product`}>
            <p>COLLECTION</p>
          </LeftMenu>

          <LeftMenu to="/">CUSTOM</LeftMenu>
          <LeftMenu to="/review">REVIEW</LeftMenu>
          <Search onClick={handleClick}>검색</Search>
          {/* {click ? <Searchbar /> : null} */}
          <Invisible>
            <IoSearchOutline
              onClick={handleClick}
              style={{ fontSize: " 21px", marginLeft: "22px" }}
            />
            {click ? <Searchbar /> : null}
          </Invisible>
        </Left>
        <Center>
          <Logo to="/">SHOP</Logo>
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
          <div className="login" onClick={isModalOpen}>
            로그인
          </div>
          <MenuHandle to="/customerService">고객센터</MenuHandle>
          <MenuHandle to="/">위시리스트</MenuHandle>
          <MenuItem to="/cart">
            <Badge badgeContent={quantity} color="error">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Header;
