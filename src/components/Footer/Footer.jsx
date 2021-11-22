import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* bottom: 0; */
  /* left: 0; */
  height: 100px;
  position: absolute;
  font-size: 0.7rem;
  font-weight: 500;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 0.5px solid gray;
`;
const InfoSet = styled.span``;
const Info = styled.span`
  padding: 1rem;
`;
const Copyright = styled.div`
  color: dimgrey;
  margin-top: 0.3rem;
`;

function Footer() {
  return (
    <Container>
      <InfoSet>
        <Info to="/">About Us</Info>
        <Info to="/">이용약관</Info>
        <Info to="/">고객지원</Info>
      </InfoSet>
      <Copyright>Copyright &copy; 2021 Team1</Copyright>
    </Container>
  );
}

export default Footer;
