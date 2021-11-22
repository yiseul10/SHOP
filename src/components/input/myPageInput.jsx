import React from "react";
import styled from "styled-components";
import { Input } from "reactstrap";

export function MyPageInput({
  label,

  onChange,
  type = "text",
  placeholder,
  value,
  checked = true,
  errorMsg,
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
      <p className="errorMsg">{errorMsg}</p>
    </Cover>
  );
}

const Cover = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;

const IdInput = styled(Input)`
  width: 50%;
  margin: 0 auto;
`;
