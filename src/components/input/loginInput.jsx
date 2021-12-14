import React from "react";
import styled from "styled-components";
import { Input } from "reactstrap";

export function LoginInput({
  label,
  onChange,
  type = "text",
  placeholder,
  value,
  checked = true,
  errorMsg,
  btn = false,
  btnName,
  btnClick,
}) {
  return (
    <Cover msgDisplay={checked}>
      <p>{label}</p>
      <IdInput
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
      />
      {btn && <button onClick={btnClick}>{btnName}</button>}
      <p className="errorMsg">{errorMsg}</p>
    </Cover>
  );
}

const Cover = styled.div`
  display: flex;
  margin-bottom: 24px;
  justify-content: left;

  .errorMsg {
    display: ${({ msgDisplay }) => (msgDisplay ? "none" : "")};
    color: red;
  }
  p {
    height: 20px;
    width: 22%;
    line-height: 38px;
  }

  button {
    border: 0;
    outline: 0;
    background-color: #2cb5e8;
    color: #fff;
    font: bold;
    border-radius: 10px;
  }
  /* @media only screen and (max-width: 1000px) {
    display: none;
  } */
`;

const IdInput = styled(Input)`
  width: 80%;
  margin-left: 16px;
`;
