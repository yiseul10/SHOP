import React from "react";
import styled from "styled-components";

export function PrimaryBtn({ label, onClick, type = "button" }) {
  return (
    <Cover onClick={onClick} type={type}>
      {label}
    </Cover>
  );
}

const Cover = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #70a1ff;
  font: bold;
  color: #fff;
  width: 50%;
  height: 38px;
  margin-bottom: 20px;
`;
