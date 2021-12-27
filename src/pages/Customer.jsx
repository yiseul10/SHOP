import React from "react";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { IoChatbubbles } from "react-icons/io5";
import styled from "styled-components";

export function Customer() {
  return (
    <Cover>
      {/* <p className="mainText"> 고객센터 </p> */}
      <p>
        <IoCallOutline size="50" />
        <Link to="/Customer/cs/Question">1대1 문의</Link>
      </p>
      <p>
        <IoChatbubbles size="50" />
        <Link to="/Customer/cs/CustomerCenter/NOTICE">공지 사항</Link>
      </p>
    </Cover>
  );
}

const Cover = styled.div`
  padding-top: 130px;
  text-align: center;
  .mainText {
    font-size: 60px;
    font-weight: bold;
  }
  svg {
    margin-right: 10px;
  }
`;
