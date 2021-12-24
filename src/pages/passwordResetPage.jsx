import axios from "axios";
import { LoginBtn } from "components/Button/loginBtn";
import React, { useState } from "react";
import styled from "styled-components";

export function PasswordResetPage() {
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");
  const [id, setId] = useState("");
  const [passwd, setPasswd] = useState("");
  const [isPassWordCheck, setIsPassWordCheck] = useState(false);

  setTimeout(() => {
    setId(new URL(window.location.href).searchParams.get('id'));
    setKey(new URL(window.location.href).searchParams.get('key'));
    console.log(id + key);
  }, 0)

  const onPasswordChange = (event) => {
    setPasswd(event.target.value);
  }
  const onPasswdCheck = (event) => {
    if (passwd == event.target.value) {
      setIsPassWordCheck(true);
    }
    if (passwd != event.target.value) {
      setIsPassWordCheck(false);
    }
  }

  const onSend = async() =>{
    if(!isPassWordCheck)
    {
      window.alert("비밀번호가 일치하지 않습니다.");
    }else{
      const formdata = new FormData();
      formdata.append("id", id);
      formdata.append("key", key);
      formdata.append("password", passwd);
      const send = await axios({
        method: "POST",
        url: `http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shoppingmall/user/reset	`,
        data: formdata,
      }).catch((err) => Promise.reject(err));
      console.log(send.data);
    }
  }


  return (
    <Cover>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <div className="container">
        <input class="input" placeholder="변경할 비밀번호" onChange={onPasswordChange} />

        <input class="input" placeholder="변경할 비밀번호 확인" onChange={onPasswdCheck} />
      </div>
      <LoginBtn label="비밀번호변경" onClick={onSend} />
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
