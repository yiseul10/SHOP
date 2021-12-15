import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '../../responsive';
import { sliderItems } from '../../data';
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded
} from '@material-ui/icons';

const Container = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${media({ display: 'none' })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  z-index: 2;
  opacity: 80;
`;

const Wrapper = styled.div`
  height: 30%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img``;
const Title = styled.div`
  font-size: 5rem;
  font-weight: 300;
  display: flex;
  align-items: center;
`;
const InfoContainer = styled.div`
  /* flex: 1;*/
  margin: auto;
  background-image: linear-gradient(
    90deg,
    #000000,
    #e5e5e5,
    #1f1f1f,
    /* #e2e2e2, */ #6a6a6a
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-size: 300%;
  background-position: -100%;
  animation: gradientText 10s infinite alternate-reverse;

  @keyframes gradientText {
    to {
      background-position: 100%;
    }
  }
`;

const MainSlide = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <KeyboardArrowLeftRounded />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <Slide key={item.id}>
            {/* <ImgContainer>
              <Image src={item.img} />
            </ImgContainer> */}
            <InfoContainer>
              <Title>{item.desc}</Title>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <KeyboardArrowRightRounded />
      </Arrow>
    </Container>
  );
};
export default MainSlide;
