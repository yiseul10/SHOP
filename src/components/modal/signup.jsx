import React, { useState } from "react";
import styled from "styled-components";
// import { Input, FormFeedback } from "reactstrap";
import { useHistory } from "react-router-dom";
import { LoginInput } from "components/input";
import { PrimaryBtn } from "components/Button";
import axios from "axios";

export function SignUpPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isIdCheck, setIsIdCheck] = useState(true);
  const [isEmailCheck, setIsEmailCheck] = useState(true);
  const [isPassWordCheck, setIsPassWordCheck] = useState(true);
  const history = useHistory();

  const userData = async () => {
    if (
      id.length === 0 ||
      password.length === 0 ||
      email.length === 0 ||
      isPassWordCheck === 0
    ) {
      window.alert("모든 값을 정확히 입력해 주세요");
    } else {
      const formdata = new FormData();
      formdata.append("id", id);
      formdata.append("name", email);
      formdata.append("password", password);

      //비동기 통신 POST
      const send = await axios({
        method: "POST",
        url: `http://pvpvpvpvp.gonetis.com:8080/sample/user-join	`,
        data: formdata,
      }).catch((err) => Promise.reject(err));
      console.log(send.data);

      if (send.status === 200) {
        history.push("/");
      }
    }
  };

  // 아이디의 상태관리 함수
  function onIdChange(event) {
    setId(event.target.value);
    if (event.target.value === "idid") {
      setIsIdCheck(false);
    } else {
      setIsIdCheck(true);
    }
  }
  // 비밀번호의 상태관리 함수
  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function onPasswordChangeCheck(event) {
    setPassword(event.target.value);
    if (event.target.value === "idid") {
      setIsPassWordCheck(false);
    } else {
      setIsPassWordCheck(true);
    }
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
    if (event.target.value === "idid") {
      setIsEmailCheck(false);
    } else {
      setIsEmailCheck(true);
    }
  }

  return (
    <Cover>
      {/* {isIdCheck ? (
          <LoginInput
            id="id"
            label="아이디"
            value={id}
            placeholder="아이디(5~12자)" //  placeholder를 사용하려면 연결된 페이지에서 추가해줘야한다
            onChange={onIdChange}
            checkId={true}
          />
        ) : (
          <>
            <Input invalid value={id} onChange={onIdChange} />
            <FormFeedback>아이디가 중복되었습니다.</FormFeedback>
          </>
        )} */}
      <LoginInput
        // LoginInput페이지에서 내가 사용할 props들을 추가해줘야 사용이 가능하다
        id="id" //  props
        label="아이디"
        value={id}
        placeholder="아이디(5~12자)"
        onChange={onIdChange}
        checked={isIdCheck} //  컴포넌트의 재사용
        errorMsg="중복된 아이디입니다"
      />

      <LoginInput
        email="email"
        value={email}
        label="이메일"
        onChange={onEmailChange}
        placeholder="이메일"
        checked={isEmailCheck} //  컴포넌트의 재사용
        errorMsg="중복된 이메일입니다"
      />
      <LoginInput
        id="passowrd"
        label="비밀번호"
        placeholder="비밀번호(숫자, 영문을 포함한 8자리 이상)"
        type="password"
        onChange={onPasswordChange}
      />

      <LoginInput
        id="passowrd"
        label="비밀번호확인"
        placeholder="비밀번호 확인"
        checked={isPassWordCheck} //  컴포넌트의 재사용
        errorMsg="비밀번호가 일치하지 않습니다"
        type="password"
        onChange={onPasswordChangeCheck}
      />
      <PrimaryBtn label="회원가입" onClick={userData} type="button" />
      {/* <PrimaryBtn label="회원등록" onClick={userData} type="submit" /> */}
    </Cover>
  );
}

const Cover = styled.div`
  div {
  }
`;
