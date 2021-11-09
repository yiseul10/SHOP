import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../responsive";

const LeftMenu = styled.div`
  padding: 0px;
  font-size: 11px;
  border: none;
  cursor: pointer;
  ${media({ display: "none" })}
`;
const DropDown = styled.div`
  position: absoulte;
  display: inline-block;

  &:hover .dropdown-content {
    display: block;
  }
`;
const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  left: 0rem;
  min-width: 100%;
  height: 120px;
  box-shadow: 0px 1rem 0.3rem -1rem rgba(0, 0, 0, 0.1);
  transition: all 10s ease-in-out;
  z-index: 1;
  ${media({ display: "inline", marginTop: "-30px", boxShadow: "none" })}
`;
const GridContainer = styled.div`
  width: 60%;
  margin-left: 60px;
  text-align: start;
  ${media({ width: "100%", margin: "30px" })}
`;

const DownContentLink = styled(Link)`
  color: black;
  font-weight: 400;
  text-transform: uppercase;
  grid-template-columns: 65px 140px 1fr;
  padding: 0.15rem;
  text-align: start;
  text-decoration: none;
  display: inline-grid;
  ${media({
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem"
  })}
`;
const LineDiv = styled.div`
  transform: translate(1px, 15px);
  width: 23px;
  border-bottom: 1px solid black;
  ${media({ display: "none" })}
`;
const DropMen = () => {
  return (
    <DropDown>
      <LeftMenu>MEN</LeftMenu>
      <DropDownContent className="dropdown-content">
        <GridContainer>
          <LineDiv></LineDiv>
          <DownContentLink style={{ marginTop: "30px" }} to="/product/:index">
            Outer
          </DownContentLink>
          <DownContentLink to="/">Top</DownContentLink>
          <DownContentLink to="/">Pants</DownContentLink>
          <DownContentLink to="/">Acc</DownContentLink>
          <DownContentLink to="/">Shirts</DownContentLink>
          <DownContentLink to="/">Life</DownContentLink>
          <DownContentLink to="/">Sale</DownContentLink>
        </GridContainer>
      </DropDownContent>
    </DropDown>
  );
};

export default DropMen;
