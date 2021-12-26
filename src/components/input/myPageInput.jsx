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
    <InputContainer>
      <p>{label}</p>
      <IdInput
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </InputContainer>
  );
}
const InputContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100% !important;
  height: 46px;
  padding: 0;
  margin: 15px auto;
  justify-content: space-between;
  line-height: 32px;

  p {
    margin-top: 6px;
  }
`;

const IdInput = styled(Input)`
  width: 80% !important;
  margin: 0;
`;
