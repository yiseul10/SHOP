import axios from "axios";
import React, { useState } from "react";
import { Input } from "reactstrap";
import styled from "styled-components";

// import { EmailCheckInput } from "components/input/emailCheckInput";

export function PasswordSearchPage() {
  const [email, setEamil] = useState(""); //  이메일

  function onEmailChange(event) {
    setEamil(event.target.value);
  }
  const onEmailBtn = async () => {
    window.alert("전송 되었습니다. 이메일을 확인하세요.(전송시 까지 최대 1~2분 걸립니다.)")
    const send = await axios({
      method: "GET",
      url: `http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shopApp/user/reset?id=${email}	`,
    }).catch((err) => Promise.reject(err));
    console.log(send.data);
  }
  return (
    <Cover>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="checkemailbtn">
        <Input
          className="addressInput"
          id="address"
          onChange={onEmailChange}
          placeholder="Email"
        />
        <button type="button" onClick={onEmailBtn}>
          전송
        </button>
      </div>
    </Cover>
  );
}

const Cover = styled.div`
  div {
    width: 50%;
    display: flex;
    margin: auto;
    .form-control {
      width: 100%;
    }
    button {
      width: 10%;
      border: none;
      border-radius: 10px;
      background-color: #2cb5e8;
      color: #fff;
    }
  }
`;
