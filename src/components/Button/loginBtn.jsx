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
  background-color: #2cb5e8;
  font: bold;
  color: #fff;
  width: 38%;
  height: 38px;
  margin-bottom: 20px;
`;
