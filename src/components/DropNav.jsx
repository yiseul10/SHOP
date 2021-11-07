import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavMenu } from "../data";

const DropMenu = styled.ul`
  width: 100%;
  left: 0;
  top: 90px;
  height: 90px;
  position: absolute;
  list-style: none;
  text-align: start;
  padding: 09px 60px;
  display: grid;
  grid-template-columns: 150px 150px 1fr;
  background-color: white;
  opacity: 100%;
  transition: all 3s ease;
  z-index: 1;
  box-shadow: 0px 1rem 0.3rem -1rem rgba(0, 0, 0, 0.1);

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
