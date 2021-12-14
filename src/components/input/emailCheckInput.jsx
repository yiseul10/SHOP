import React from "react";
import styled from "styled-components";
import { Input } from "reactstrap";

export function EmailCheckInput({
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
      <EmailInput
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        onClick={btnClick}
      />
      {btn && <button onClick={btnClick}>{btnName}</button>}
      <p className="errorMsg">{errorMsg}</p>
    </Cover>
  );
}

const Cover = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 20%;

  .errorMsg {
    display: ${({ msgDisplay }) => (msgDisplay ? "none" : "")};
    color: red;
  }
  p {
    height: 20px;
    width: 22%;
    line-height: 38px;
  }
  /* @media only screen and (max-width: 1000px) {
    display: none;
  } */
`;

const EmailInput = styled(Input)`
  width: 400px;
`;
