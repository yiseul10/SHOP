import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import styled, { keyframes } from 'styled-components';

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
  /* position: absolute; */
  position: fixed;
  z-index: 999;
  top: 98px;
  left: 50%;
  text-align: center;
  line-height: normal;
  background-color: #00896f;
  color: white;
  width: 100%;
  align-items: center;
  padding: 0.2rem;
  transform: translateX(-50%);
  animation: ${Ani} ease-in 10s forwards;
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
