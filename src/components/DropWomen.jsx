import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LeftMenu = styled.div`
  padding: 0px;
  font-size: 11px;
  border: none;
  cursor: pointer;
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
`;
const GridContainer = styled.div`
  width: 60%;
  margin-left: 60px;
  text-align: start;
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
`;
const LineDiv = styled.div`
  transform: translate(69px, 15px);
  width: 36px;
  border-bottom: 1px solid black;
`;

const DropWomen = () => {
  return (
    <DropDown>
      <LeftMenu>WOMEN</LeftMenu>
      <DropDownContent className="dropdown-content">
        <GridContainer>
          <LineDiv></LineDiv>
          <DownContentLink style={{ marginTop: "30px" }} to="/coat">
            Outer
          </DownContentLink>
          <DownContentLink to="/">Top</DownContentLink>
          <DownContentLink to="/">Bottom</DownContentLink>
          <DownContentLink to="/">Acc</DownContentLink>
          <DownContentLink to="/">Jewel</DownContentLink>
          <DownContentLink to="/">Life</DownContentLink>
          <DownContentLink to="/">Sale</DownContentLink>
        </GridContainer>
      </DropDownContent>
    </DropDown>
  );
};

export default DropWomen;
