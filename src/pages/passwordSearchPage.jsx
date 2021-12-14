import React, { useState } from "react";
import { Input } from "reactstrap";
import styled from "styled-components";
// import { EmailCheckInput } from "components/input/emailCheckInput";

export function PasswordSearchPage() {
  const [email, setEamil] = useState(""); //  이메일

  function onEmailChange(event) {
    setEamil(event.target.value);
  }
  function onEmailBtn() {
    console.log("전송되었습니다");
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
