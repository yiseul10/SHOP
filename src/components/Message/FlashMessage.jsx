import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: block;
  position: fixed;
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
  position: absolute;
  z-index: 999;
  top: 97px;
  left: 50%;
  text-align: center;
  line-height: normal;
  background-color: #00896f;
  color: white;
  width: 100vw;
  align-items: center;
  padding: 0.2rem;
  transform: translateX(-50%);
  animation: ${Ani} ease-in 5s forwards;
  &:last-of-type {
    display: block;
  }
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
