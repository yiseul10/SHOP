import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../responsive';

import { categories } from '../../data';

const LeftMenu = styled.div`
  padding: 0px;
  font-size: 11px;
  border: none;
  cursor: pointer;
  ${media({ display: 'none' })}
`;
const DropDown = styled.div`
  position: absoulte;
  display: inline-block;
`;
const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  left: 0rem;
  top: 4.7rem;
  min-width: 100%;
  height: 110px;
  box-shadow: 0px 1rem 0.3rem -1rem rgba(0, 0, 0, 0.1);
  transition: all 10s ease-in-out;
  ${media({ display: 'inline', marginTop: '-30px', boxShadow: 'none' })}
`;
const GridContainer = styled.div`
  width: 60%;
  margin-left: 60px;
  text-align: start;
  ${media({ width: '100%', margin: '30px' })}
`;

const DownContentLink = styled(Link)`
  color: black;
  font-weight: 400;
  text-transform: uppercase;
  grid-template-columns: 65px 140px 1fr;
  padding: 0.15rem 0rem;
  text-align: start;
  text-decoration: none;
  display: inline-grid;
  ${media({
    display: 'flex',
    flexDirection: 'column',
    padding: '0.5rem'
  })}
`;
const LineDiv = styled.div`
  transform: translate(0px, 15px);
  width: 60px;
  border-bottom: 3px solid black;
  ${media({ display: 'none' })}
`;

const DropMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen(p => !p);
  };

  return (
    <div>
      {categories.map(item => (
        <DropDown item={item} key={item.id}>
          <DropDownContent>
            <GridContainer>
              <LineDiv></LineDiv>
              <ul>
                <li onClick={menuToggleHandler}>
                  <DownContentLink
                    style={{ marginTop: '30px' }}
                    to={`/products/아우터`}
                  >
                    Outer
                  </DownContentLink>
                  <DownContentLink to={`/products/맨투맨-후드-집업`}>
                    TOP
                  </DownContentLink>
                  <DownContentLink to={`/products/티셔츠-셔츠`}>
                    T-SHIRT
                  </DownContentLink>
                  <DownContentLink to={`/products/바지`}>PANTS</DownContentLink>
                </li>
              </ul>
            </GridContainer>
          </DropDownContent>
        </DropDown>
      ))}
    </div>
  );
};

export default DropMenu;
