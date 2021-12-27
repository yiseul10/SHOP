import React from "react";
import styled from "styled-components";
import { Input } from "reactstrap";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import DaumPostCode from "react-daum-postcode";
import { useDispatch } from "react-redux";
import { addressAdd } from "store/addressReduce";

export function AddressSearch({ setModalVisible }) {
  const dispatch = useDispatch();
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
        // alert(jsonAddress);
        dispatch(
          addressAdd({
            postCode: full[0],
            roadName: full[1],
            detailName: detail,
          }),
        );
        if (typeof setModalVisible === "function") {
          setModalVisible(false);
        }
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
          <div className="address2input">
            <Input
              type="text"
              id="roadAddress"
              value={full[1]}
              placeholder="도로명주소"
            />
          </div>
          <span id="guide"></span>
          <div className="submitinput">
            <Input
              type="text"
              id="detailAddress"
              onChange={saveDataAdressDetail}
              placeholder="상세주소"
            />
            <button type="button" onClick={sendDataAddress}>
              전송
            </button>
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
  .submitinput {
    display: flex;
    width: 80%;
    height: 38px;
    margin: 0 auto;
    justify-content: space-between;
  }
  button {
    color: #fff;
  }

  .addressinput {
    display: flex;
    width: 80%;
    height: 38px;
    margin: 0 auto;
    justify-content: space-between;
  }
  .form-control {
    width: 85%;
  }
  button {
    width: 15%;
    border: none;
    border-radius: 0 10px 10px 0;
    background-color: #222;
    svg {
      color: #fff;
    }
  }
  .address2input {
    display: flex;
    width: 80%;
    height: 38px;
    margin: 0 auto;
    justify-content: space-between;
  }
`;
