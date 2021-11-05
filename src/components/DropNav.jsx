import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavMenu } from "../data";

const DropMenu = styled.ul`
  width: 100%;
  left: 0;
  top: 95px;
  height: 20%;
  position: absolute;
  list-style: none;
  text-align: start;
  padding: 10px 55px;
  display: grid;
  grid-template-columns: 150px 150px 1fr;
  background-color: white;
  opacity: 100%;
  border-bottom: 0.5px solid gray;
  transition: all 2s ease;
  &.clicked {
    display: none;
  }
`;

const Drop = styled(Link)`
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;

const DropNav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <DropMenu
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {NavMenu.map((item, index) => {
        return (
          <li key={index}>
            <Drop
              className={item.cName}
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Drop>
          </li>
        );
      })}
    </DropMenu>
  );
};

export default DropNav;
