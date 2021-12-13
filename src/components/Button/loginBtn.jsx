import React from "react";
import styled from "styled-components";

export function LoginBtn({ label, onClick, type = "button" }) {
  return (
    <Cover onClick={onClick} type={type}>
      {label}
    </Cover>
  );
}

const Cover = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #2f3542;
  font: bold;
  color: #fff;
  width: 140px;
  height: 38px;
  margin-bottom: 20px;
`;
