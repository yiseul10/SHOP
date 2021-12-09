import { LoginBtn } from "components/Button/loginBtn";
import React from "react";
import styled from "styled-components";

export function PasswordResetPage() {
  return (
    <Cover>
      <div className="container">
        <input class="input" placeholder="변경할 비밀번호" />

        <input class="input" placeholder="변경할 비밀번호 확인" />
      </div>
      <LoginBtn label="비밀번호변경" />
    </Cover>
  );
}

const Cover = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .input {
    width: 150px;
    margin: 3px 0;
  }
`;
