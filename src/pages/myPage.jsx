import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { Input } from "reactstrap";
import { useHistory } from "react-router-dom";
// import { LoginInput } from "components/input";
import axios from "axios";
import { MyPageInput } from "components/input";
import { AddressSearch } from "components/modal/addressSearch";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { LoginBtn } from "components/Button/loginBtn";

export function MyPage() {
  const [userName, setUserName] = useState(""); //  이름
  const [id, setId] = useState(""); //  아이디
  const [nickName, setNickName] = useState(""); //  닉네임
  const [email, setEamil] = useState(""); //  이메일
  const [address, setAddress] = useState(""); //  주소
  const [phoneNum, setPhoneNum] = useState(""); //  핸드폰
  const [password, setPassword] = useState(""); //  비밀번호
  const [isAddressBtn, setIsAddressBtn] = useState(false);
  const history = useHistory();

  function isAddressModalClose() {
    setIsAddressBtn(false);
  }

  //  이름의 상태관리 함수
  function onUserNameChange(event) {
    setUserName(event.target.value);
  }
  //  아이디의 상태관리 함수
  function onIdChange(event) {
    setId(event.target.value);
  }
  //  닉네임의 상태관리 함수
  function onNickNameChange(event) {
    setNickName(event.target.value);
  }
  //  이메일의 상태관리 함수
  function onEmailChange(event) {
    setEamil(event.target.value);
  }
  //  주소의 상태관리 함수
  function onAddressChange(event) {
    setAddress(event.target.value);
  }
  //  주소 검색 버튼 함수
  function onAddressBtn() {
    setIsAddressBtn(true);
  }
  //  핸드폰의 상태관리 함수
  function onPhoneNumChange(event) {
    setPhoneNum(event.target.value);
  }
  //  비밀번호의 상태관리 함수
  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    if (
      id.length === 0 ||
      nickName.length === 0 ||
      email.length === 0 ||
      address.length === 0 ||
      phoneNum.length === 0 ||
      password.length === 0
    ) {
      window.alert("모든 값을 정확히 입력하세요");
    } else {
      console.log(event);
      history.push("/");
    }
  }

  const userData = async () => {
    const formdata = new FormData();
    formdata.append("name", userName); //  이름
    formdata.append("id", id); //  아이디
    formdata.append("userNumber", "1"); //  회원번호
    formdata.append("nickName", nickName); //  닉네임
    formdata.append("id", email); //  이메일
    formdata.append("address", address); //  주소
    formdata.append("phone", phoneNum); //  핸드폰
    formdata.append("password", password); //  비밀번호
    try {
      //비동기 통신 POST
      const send = await axios({
        method: "POST",
        url: `http://pvpvpvpvp.gonetis.com:8080/sample/user-privacy	`,
        data: formdata,
      });
      console.log(send.data);
      console.log(send.headers);
    } catch (e) {}
  };

  return (
    <>
      <AddressOpenModal isOpen={isAddressBtn}>
        <ModalContainer>
          <div className="btnclose">
            <button onClick={isAddressModalClose}>
              <IoIosClose />
            </button>
          </div>

          <AddressSearch />
        </ModalContainer>
      </AddressOpenModal>

      <Cover>
        <div className="addressBtn"></div>

        <div className="mypage">마이페이지</div>
        <div className="mypageContainer">
          <Link to="/orderlist">
            <div>주문내역</div>
          </Link>
          <Link to="/orderreview">
            <div>구매후기</div>
          </Link>
          <Link to="/QuestionOne">
            <div>1:1문의</div>
          </Link>
          <Link to="customerService">
            <div>고객센터</div>
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <MyPageInput
            id="userName"
            label="이름"
            onChange={onUserNameChange}
            placeholder="이름"
          />
          <MyPageInput
            id="id"
            label="아이디"
            onChange={onIdChange}
            placeholder="아이디(5~12자)"
          />
          <MyPageInput
            id="nickname"
            label="닉네임"
            onChange={onNickNameChange}
            placeholder="닉네임"
          />
          <MyPageInput
            id="email"
            label="이메일"
            onChange={onEmailChange}
            placeholder="이메일 형식에 맞게 작성해주세요"
          />
          <div className="address">
            <p>주소</p>
            <div>
              <Input
                className="addressInput"
                id="address"
                onChange={onAddressChange}
                placeholder="주소"
              />
              <button type="button" onClick={onAddressBtn}>
                <BiSearchAlt2 />
              </button>
            </div>
          </div>
          <MyPageInput
            id="phoneNum"
            label="핸드폰"
            onChange={onPhoneNumChange}
            placeholder="전화번호 형식에 맞게 작성해주세요"
          />
          <MyPageInput
            id="passowrd"
            label="비밀번호"
            type="password"
            onChange={onPasswordChange}
            placeholder="비밀번호(숫자, 영문을 포함한 8자리 이상)"
          />
          <LoginBtn label="수정하기" onClick={userData} type="submit" />
        </form>
      </Cover>
    </>
  );
}

const Cover = styled.div`
  padding: 10px;
  text-align: center;
  .mypageContainer {
    width: 20%;
    text-align: left;
    font-size: 16px;
  }
  .mypage {
    text-align: left;
    font-size: 24px;
    font-weight: bold;
  }
  .addressBtn {
    float: right;
  }
  .address {
    display: flex;
    width: 40%;
    height: 46px;
    margin: 0 auto;
    justify-content: space-between;
    p {
      line-height: 44px;
    }
    div {
      width: 80%;
      display: flex;

      .form-control {
        width: 85%;
      }
      button {
        width: 15%;
        border: none;
        border-radius: 0 10px 10px 0;
        background-color: #2cb5e8;
        svg {
          color: #fff;
        }
      }
    }
  }
`;

const AddressOpenModal = styled(Modal)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(22, 39, 53, 0.8);
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1031;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 520px;
  height: 600px;
  background-color: #fff;
  border-radius: 20px;
  border: solid 5px#416f99;
  padding: 16px;
  .btnclose {
    text-align: right;
  }
`;
