import React from "react";
import styled from "styled-components";
import { useState } from "react";
import DaumPostCode from "react-daum-postcode";

export function AddressSearch() {
  return (
    <Cover>
      <Postcode></Postcode>
    </Cover>
  );
}

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
        <input
          type="text"
          id="postcode"
          value={full[0]}
          placeholder="우편번호"
        />
        <div className="searchBtn">
          <input
            type="button"
            value="우편번호 찾기"
            onClick={disablePostCode}
          />
        </div>
        <br />
        <input
          type="text"
          id="roadAddress"
          value={full[1]}
          placeholder="도로명주소"
        />
        <br />
        <span id="guide"></span>
        <input
          type="text"
          id="detailAddress"
          onChange={saveDataAdressDetail}
          placeholder="상세주소"
        />
        <br />
        {/* <input
        type="text"
        id="extraAddress"
        onChange={saveDataAdressExtra}
        placeholder="참고항목"
      /> */}
        <br />
        <br />
        <br />
        <div className="submitBtn">
          <input
            type="button"
            id="sendAdress"
            onClick={sendDataAddress}
            value="보내기"
          />
        </div>
        {disable && <DaumPostCode onComplete={handleComplete} />}
      </AddressCover>
    </>
  );
};

const Cover = styled.div``;

const AddressCover = styled.div`
  text-align: center;
  .submitBtn {
    text-align: right;
  }
  .searchBtn {
    text-align: right;
  }
`;
