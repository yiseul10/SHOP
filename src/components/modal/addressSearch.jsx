import React from "react";
import styled from "styled-components";
import { Input } from "reactstrap";
import { LoginBtn } from "components/Button/loginBtn";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import DaumPostCode from "react-daum-postcode";

export function AddressSearch() {
  const Postcode = () => {
    const [full, setFull] = useState("");
    const [disable, setDisable] = useState(false);
    const [detail, setDetail] = useState("");
    const [extra, setExtra] = useState("");
    const handleComplete = (data) => {
      let fullAddress = [];
      fullAddress.push(data.zonecode);
      fullAddress.push(data.roadAddress);
      fullAddress.push(data.jibunAddress);
      setFull(fullAddress);
      console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
      setDisable(false);
    };
    const disablePostCode = () => {
      setDisable(true);
    };
    const saveDataAdressDetail = (event) => {
      setDetail(event.target.value);
    };
    // const saveDataAdressExtra = (event) => {
    //   setExtra(event.target.value);
    // };
    //추후에 가입자폼에 데이터를 모아서 axios 통신..
    const sendDataAddress = () => {
      if (full.length > 1 && detail.length > 1) {
        const jsonAddress = `{
           "postcode":${full[0]},
           "roadAddress:${full[1]},
           "jibunAddress":${full[2]},
           "detailAddress":${detail},
           "extraAddress":${extra}
         }`;
        alert(jsonAddress);
      }
      if (full.length < 1 || detail.length < 1)
        alert("주소를 바르게 입력해 주세요");
    };
    return (
      <>
        <AddressCover>
          <div className="addressinput">
            <Input
              type="text"
              id="postcode"
              value={full[0]}
              placeholder="우편번호"
            />
            <button type="button" onClick={disablePostCode}>
              <BiSearchAlt2 />
            </button>
          </div>

          <Input
            type="text"
            id="roadAddress"
            value={full[1]}
            placeholder="도로명주소"
          />
          <br />
          <span id="guide"></span>
          <Input
            type="text"
            id="detailAddress"
            onChange={saveDataAdressDetail}
            placeholder="상세주소"
          />
          <br />
          <div className="submitBtn">
            <LoginBtn
              type="button"
              id="sendAdress"
              onClick={sendDataAddress}
              label="보내기"
            />
          </div>
          {disable && <DaumPostCode onComplete={handleComplete} />}
        </AddressCover>
      </>
    );
  };

  return (
    <Cover>
      <Postcode></Postcode>
    </Cover>
  );
}

const Cover = styled.div`
  .submitBtn {
    text-align: right;
  }
`;

const AddressCover = styled.div`
  margin-top: 10%;

  .addressinput {
    text-align: right;
  }
  button {
    width: 10%;
    border: none;
    border-radius: 10px;
    background-color: #2cb5e8;
    svg {
      color: #fff;
    }
  }
`;
