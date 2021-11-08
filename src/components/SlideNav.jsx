import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../responsive";
import { BsArrowRight } from "react-icons/bs";
import SlideNavSlide from "./SlideNavSlide";

const Overlay = styled.div`
  ${media({
    opacity: "100%",
    width: "100%",
    height: "100vh",
    top: "5.5rem",
    left: "0",
    backgroundColor: "rgb(255, 255, 255, 0.9)",
    color: "black",
    zIndex: "1",
    position: "fixed"
  })}
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

const CloseSlide = styled.div`
  text-align: center;
  font-size: 17px;
  border-top: 0.1px solid black;
  bottom: 0;
  padding: 0.8rem;
  width: 100%;
  position: fixed;
`;

const LineDiv = styled.div`
  /* transform: translate(69px, 15px); */
  width: 40px;
  border-bottom: 0.1px solid black;
`;
const ArrowToggle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const SlideNav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Overlay>
      <OverlayContent>
        <Content>
          <ArrowToggle>
            <div className="nav_btn">MEN</div>
            <BsArrowRight onClick={handleClick} />
            {click ? <SlideNavSlide /> : null}
          </ArrowToggle>
          <ArrowToggle>
            <div className="nav_btn">WOMEN</div>
            <BsArrowRight />
          </ArrowToggle>
          {/* <DropWomen /> */}
          <LineDiv />
          <div className="nav_btn">Custom</div>
          <Link to="/">Login</Link>
          <Link to="/">Contact</Link>
        </Content>
      </OverlayContent>
      <CloseSlide>닫기</CloseSlide>
    </Overlay>
  );
};

export default SlideNav;
