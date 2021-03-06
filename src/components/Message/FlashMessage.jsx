import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import styled, { keyframes } from 'styled-components';
import { media } from '../../responsive';

const Container = styled.div`
  display: block;
`;

const Ani = keyframes`
 0% {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-50%) scale(1);
  }

  9% {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) scale(1);
  }

  91% {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) scale(1);
  }

  100% {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-50%) scale(1);
  }
}         
`;
const Message = styled.div`
  display: none;
  position: fixed;
  z-index: 999;
  top: 95px;
  left: 50%;
  text-align: center;
  line-height: normal;
  background-color: var(--sub-color-1);
  color: var(--back-color);
  width: 100%;
  align-items: center;
  padding: 0.2rem;
  transform: translateX(-50%);
  animation: ${Ani} ease-in-out 2s forwards;
  &:last-of-type {
    display: block;
  }
  ${media({
    top: '93px'
  })}
`;

// props는 메세지!
const FlashMessage = props => {
  return (
    <Container>
      {props.message.map((msg, index) => {
        return (
          <Message key={index}>
            <IoCheckmarkCircle
              style={{ marginRight: '0.3rem', verticalAlign: 'middle' }}
            />
            <span style={{ fontSize: '11px' }}>{msg}</span>
          </Message>
        );
      })}
    </Container>
  );
};

export default FlashMessage;
