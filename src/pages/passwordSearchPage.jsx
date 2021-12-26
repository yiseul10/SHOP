import axios from "axios";
import React, { useState } from "react";
import { LoginInput } from "components/input";
import styled from "styled-components";

// import { EmailCheckInput } from "components/input/emailCheckInput";

export function PasswordSearchPage() {
  const [email, setEamil] = useState(""); //  이메일

  function onEmailChange(event) {
    setEamil(event.target.value);
  }
  const onEmailBtn = async () => {
    window.alert(
      "전송 되었습니다. 이메일을 확인하세요.(전송시 까지 최대 1~2분 걸립니다.)",
    );
    const send = await axios({
      method: "GET",
      url: `http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shoppingmall/user/reset?id=${email}	`,
    }).catch((err) => Promise.reject(err));
    console.log(send.data);
  };
  return (
    <Cover>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="checkemailbtn">
        <LoginInput
          label="비밀번호 찾기"
          id="address"
          onChange={onEmailChange}
          placeholder="Email"
          btn={true}
          btnName="전송"
          btnClick={onEmailBtn}
        />
      </div>
    </Cover>
  );
}

const Cover = styled.div`
  .checkemailbtn {
    margin: 15px auto;
    width: 40%;
    height: 100%;
  }
`;
