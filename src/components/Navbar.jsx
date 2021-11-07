import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../responsive";

import { MenuRounded, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import Searchbar from "./Searchbar";
import DropWomen from "./DropWomen";
import DropMen from "./DropMen";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  font-weight: 500;
  box-shadow: 0px 1rem 0.3rem -1rem rgba(0, 0, 0, 0.1);
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
  cursor: pointer;
  ${media({ display: "inline" })}
`;
const Search = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Container>
      <Wrapper>
        <Invisible>
          <MenuRounded />
        </Invisible>
        <Left>
          <LeftMenu to="/men">
            <DropMen />
          </LeftMenu>
          <LeftMenu to="/">
            <DropWomen />
          </LeftMenu>
          <LeftMenu to="/">CUSTOM</LeftMenu>
          <Search onClick={handleClick} style={{ cursor: "pointer" }}>
            검색
          </Search>
          {click ? <Searchbar /> : null}
        </Left>
        <Center>
          <Logo to="/">SHOP</Logo>
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
