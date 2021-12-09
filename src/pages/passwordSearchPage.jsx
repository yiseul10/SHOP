import React, { useState } from "react";
import styled from "styled-components";
import { EmailCheckInput } from "components/input/emailCheckInput";

export function PasswordSearchPage() {
  const [email, setEamil] = useState(""); //  이메일

  function onEmailChange(event) {
    setEamil(event.target.value);
  }
  function onEmailBtn() {
    console.log("test");
  }
  return (
    <Cover>
      <div className="checkemailbtn">
        <EmailCheckInput
          email="email"
          onChange={onEmailChange}
          placeholder="이메일 형식에 맞게 작성해주세요"
          btn="true"
          btnName="전송"
          btnClick={onEmailBtn}
        />
      </div>
    </Cover>
  );
}

const Cover = styled.div``;
