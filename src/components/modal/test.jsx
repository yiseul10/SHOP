import React from "react";
import styled from "styled-components";

export function TestInput({
  label,
  value,
  placeholder,
  onChange,
  btnLabel,
  btnClick,
}) {
  return (
    <Cover>
      <p>{label}</p>
      <InputContainer>
        <input onChange={onChange} value={value} placeholder={placeholder} />
        <button onClick={btnClick}>{btnLabel}</button>
      </InputContainer>
    </Cover>
  );
}

const Cover = styled.div``;

const InputContainer = styled.div`
  width: 70%;
  height: 40px;
  padding: 5px;
  border: solid 1px #2bbcff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  input {
    width: 80%;
    border: none;
    border-right: 0px;
    border-top: 0px;
    border-left: 0px;
    border-bottom: 0px;
  }
  button {
    border: none;
    outline: 0;
    background-color: transparent;
  }
`;
