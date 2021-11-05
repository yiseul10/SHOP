import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../responsive";

import { MenuRounded, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import DropNav from "./DropNav";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  font-weight: 500;
  border-bottom: 0.5px solid gray;
`;

const Wrapper = styled.div`
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media({ padding: "10px 30px" })}
`;
const SearchContainer = styled.div`
  /*border-bottom: 0.5px solid gray;
  padding: 4px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  ${media({ display: "none" })}*/
`;
const Input = styled.input`
  border: none;
  color: black;
  font-size: 0.5rem;
  width: 4rem;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Center = styled.div`
  flex: 2;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-family: "Unna", serif;
  font-size: 34px;
  ${media({ flex: 1 })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${media({ justifyContent: "flex-end" })}
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
  ${media({ display: "inline" })}
`;

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Left onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Invisible>
            <MenuRounded />
          </Invisible>
          <LeftMenu to="/men">MEN</LeftMenu>
          {dropdown && <DropNav />}

          <LeftMenu to="/men">WOMEN</LeftMenu>
          <LeftMenu to="/men">CUSTOM</LeftMenu>
          <div onClick={handleClick}>검색</div>
          {/* <SearchContainer>
            <Input />
            <Search/>
          </SearchContainer> */}
        </Left>
        <Center>
          <Logo>SHOP</Logo>
        </Center>
        <Right>
          <MenuHandle to="/register">JOIN</MenuHandle>
          <MenuHandle to="/login">LOGIN</MenuHandle>
          <MenuHandle to="/">위시리스트</MenuHandle>
          <MenuItem to="/cart">
            <Badge badgeContent={3} color="error">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
