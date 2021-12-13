import styled from "styled-components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginInput } from "components/input";
import { PrimaryBtn } from "components/Button";
import { LoginBtn } from "components/Button/loginBtn";
import axios from "axios";

export function LoginPage({ signup, pwSearch, onPwSearchBtn }) {
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

  // function handleSubmit(event) {
  //   if (id.length === 0 || password.length === 0) {
  //     window.alert("아이디 혹은 비밀번호를 입력해 주세요");
  //   } else {
  //     console.log(event);
  //     history.push("/");
  //   }
  // }

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
        url: `http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shoppingmall/user-login	`,
        data: formdata,
      });
      console.log(send.data);
      console.log(send.headers);

      history.push("/");
    }
  };

  return (
    <Cover>
      <div className="text">
        <h3>로그인</h3>
        <br />
        <br />
      </div>
      <div className="loginInput">
        <LoginInput id="id" onChange={onIdChange} placeholder="Email" />
        <LoginInput
          id="passowrd"
          type="password"
          onChange={onPasswordChange}
          placeholder="PassWord"
        />
      </div>
      <div className="loginBtn">
        <LoginBtn label="로그인" onClick={userData} />
        <LoginBtn label="회원가입" onClick={signup} type="button" />
      </div>
      {/* <div className="signupBtn"> */}

      {/* </div> */}
      <div className="passwordSearchBtn">
        <PrimaryBtn
          label="비밀번호찾기"
          onClick={onPwSearchBtn}
          type="button"
        />
      </div>
      <div className="kakaologin">
        <PrimaryBtn label="카카오 로그인" type="button" />
      </div>
    </Cover>
  );
}

const Cover = styled.div`
  margin-top: 15%;
  width: 80%;
  text-align: center;
  .loginInput {
  }
  .text {
    margin-right: 100px;
  }
`;
