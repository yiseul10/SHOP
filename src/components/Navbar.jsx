import React from "react";
import styled from "styled-components";
import { media } from "../responsive";

import { MenuRounded, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  font-weight: 500;
  border-bottom: 0.5px solid gray;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SearchContainer = styled.div`
  border-bottom: 0.5px solid gray;
  padding: 4px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  ${media({ display: "none" })}
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
  justify-content: space-between;
`;
const Center = styled.div`
  flex: 2;
  text-align: center;
  /* position: static; */
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
  justify-content: space-between;
  ${media({ justifyContent: "flex-end" })}
`;
const LeftMenu = styled.span`
  cursor: pointer;
  ${media({ display: "none" })}
`;
const MenuItem = styled.div`
  cursor: pointer;
`;
const MenuHandle = styled.div`
  cursor: pointer;
  ${media({ display: "none" })}
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuRounded />

          <LeftMenu>MEN</LeftMenu>
          <LeftMenu>WOMEN</LeftMenu>
          <LeftMenu>CUSTOM</LeftMenu>
        </Left>
        <Center>
          <Logo>SHOP</Logo>
        </Center>
        <Right>
          <SearchContainer>
            <Input placeholder="검색" />
            <Search style={{ color: "gray", fontSize: 15, width: 15 }} />
          </SearchContainer>
          <MenuHandle>JOIN</MenuHandle>
          <MenuHandle>LOGIN</MenuHandle>
          <MenuItem>
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
