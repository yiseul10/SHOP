import React, { useState } from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import DropMenu from './DropMenu';
import SlideNav from './SlideNav';

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  left: 0;
  /* background-color: white; */
  color: black;
  position: fixed;
`;

const OverlayContent = styled.div`
  display: none;
  list-style: none;
  margin: 2rem;
  display: flex;
  font-size: 1.2rem;
  font-weight: 400;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  width: 100%;
`;

const SlideNavSlide = () => {
  const [close, setClose] = useState(false);

  return (
    <Overlay>
      <OverlayContent>
        <Content>
          {/* <BsArrowLeft onClick={() => setClose(!close)} /> */}
          <DropMenu />
        </Content>
      </OverlayContent>
    </Overlay>
  );
};

export default SlideNavSlide;
