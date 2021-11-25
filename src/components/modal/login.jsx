import styled from "styled-components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginInput } from "components/input";
import { PrimaryBtn } from "components/Button";
import axios from "axios";

export function LoginPage({ test }) {
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

  // function onSignUpBtn(event) {
  //   history.push("/signup");
  // }

  const userData = async () => {
    if (id.length === 0 || password.length === 0) {
      window.alert("아이디 혹은 비밀번호를 입력해 주세요");
    } else {
      const formdata = new FormData();
      formdata.append("id", id);
      formdata.append("password", password);

      //비동기 통신 POST
      const send = await axios({
        method: "POST",
        url: `http://pvpvpvpvp.gonetis.com:8080/sample/user-login	`,
        data: formdata,
      });
      console.log(send.data);
      console.log(send.headers);

      history.push("/");
    }
  };

  return (
    <Cover>
      <LoginInput id="id" label="아이디" onChange={onIdChange} />
      <LoginInput
        id="passowrd"
        label="비밀번호"
        type="password"
        onChange={onPasswordChange}
      />
      <PrimaryBtn label="로그인" onClick={userData} />
      <PrimaryBtn label="회원가입" onClick={test} type="button" />
    </Cover>
  );
}

const Cover = styled.div`
  div {
  }
`;
