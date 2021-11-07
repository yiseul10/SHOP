import React, { useState } from "react";
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
  /* width: 100%; */
  min-width: 250px;
  height: 120px;
  box-shadow: 0px 1rem 0.3rem -1rem rgba(0, 0, 0, 0.1);
  transition: all 10s ease-in-out;
  z-index: 1;
`;

const DownContentLink = styled(Link)`
  color: black;
  margin: 0.5rem 3rem;
  text-decoration: none;
  display: block;

  &:hover {
  }
`;

const DropWomen = () => {
  return (
    <DropDown>
      <LeftMenu>WOMEN</LeftMenu>
      <DropDownContent className="dropdown-content">
        <DownContentLink style={{ marginTop: "30px" }} to="/">
          Link 5
        </DownContentLink>
        <DownContentLink to="/">Link 2</DownContentLink>
        <DownContentLink to="/">Link 3</DownContentLink>
      </DropDownContent>
    </DropDown>
  );
};

export default DropWomen;
