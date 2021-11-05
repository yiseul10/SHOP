import React from "react";
import styled from "styled-components";
import { media } from "../responsive";

const Container = styled.div`
  height: 60vh;
  border-top: 0.5px solid gray;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* ${media({ display: "none" })} */
`;
const Title = styled.h1`
  font-weight: 300;
  font-family: "Unna", serif;
  font-size: 62px;
  text-align: center;
  column-width: 600px;
`;
const Desc = styled.div`
  margin: 10px;
`;
const InputContainer = styled.div`
  width: 30%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  line-height: normal;
`;
const Input = styled.input`
  flex: 8;
  border: none;
  background-color: transparent;
  border-bottom: 0.5px solid gray;
  margin: 10px;
  font-size: 1rem;
`;

const Button = styled.button`
  font-size: 0.9rem;
  width: 6.5rem;
  height: 2.3rem;
  text-align: center;
  background-color: black;
  color: white;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  margin-left: 0.8rem;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Title>10% Discount Off your first purchase.</Title>
      <Desc>이메일을 등록하고 할인을 놓치지 마세요.</Desc>
      <InputContainer>
        <Input placeholder="" />
        <Button>구독하기</Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
