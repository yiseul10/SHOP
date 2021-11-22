import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { LoginInput } from "components/input";
import { PrimaryBtn } from "components/Button";
import axios from "axios";
// import { SignUpPage } from "page";

export function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // 아이디의 상태관리 함수
  function onIdChange(event) {
    setId(event.target.value);
  }
  // 비밀번호의 상태관리 함수
  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    if (id.length === 0 || password.length === 0) {
      window.alert("아이디 혹은 비밀번호를 입력해 주세요");
    } else {
      console.log(event);
      history.push("/");
    }
  }

  function onSignUpBtn(event) {
    history.push("/signup");
  }

  const userData = async () => {
    const formdata = new FormData();
    formdata.append("id", id);
    formdata.append("password", password);
    try {
      //비동기 통신 POST
      const send = await axios({
        method: "POST",
        url: `http://pvpvpvpvp.gonetis.com:8080/sample/user-login	`,
        data: formdata,
      });
      console.log(send.data);
      console.log(send.headers);
    } catch (e) {}
  };

  return (
    <Cover>
      <form onSubmit={handleSubmit}>
        <LoginInput id="id" label="아이디" onChange={onIdChange} />
        <LoginInput
          id="passowrd"
          label="비밀번호"
          type="password"
          onChange={onPasswordChange}
        />
        <PrimaryBtn label="로그인" onClick={userData} type="submit" />
        <PrimaryBtn label="회원가입" onClick={onSignUpBtn} type="submit" />
      </form>
    </Cover>
  );
}

const Cover = styled.div`
  div {
  }
`;
