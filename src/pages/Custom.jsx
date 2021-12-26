import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import StyledButton from '../components/Button/Button';


export function Custom() {
  const [sendImageBlob, setSendImageBlob] = useState("");
  const [result, setResult] = useState("");
  const [load, setLoad] = useState("");
  const [image, setImage] = useState("");
  const [insertImage, setInsertImage] = useState("");
  const [sendImageA, setSendImageA] = useState("");
  const auth = useSelector((state) => state.authorization);
  const [iframeElement, setIframeElement] = useState("");
  const [customImage, setCustomImage] = useState(null);
  const [addImage, setAddImage] = useState("");
  const [board, setBoard] = useState(null);
  const [uploadImage ,setUploadImage] = useState(null);

  setTimeout(() => {
    setIframeElement(document.getElementById("browserboard"));
  }, 0);
  console.log(iframeElement);
  const sendBrowserboardMessage = () => {
    console.log("요청!");
    iframeElement.contentWindow.postMessage({ "action": "downloadImage" }, "https://browserboard.com");
    setTimeout(() => {
      setLoad("load on");
    }, 1000);
  }

  const saveImage = (event) => {
    setImage(event.target.files[0]);
  }


  const sendImage = async (message) => { //데이터를 비동기로 보내는 함수
    const formdata = new FormData();
    switch (message) {
      case "insert":
        console.log("insert 실행");
        formdata.append('image', image);
        break;
      case "send":
        console.log("send 실행");
        formdata.append('image', sendImageBlob);
        break;
      default:
        break;
    }
    console.log(formdata.get('image'));
    // 파일(img)는 FormData() 사용해 선언 후 데이터를 넣어야 전송가능.!
    try {
      //비동기 통신 POST
      const send = await axios({
        method: 'POST',
        url: `http://3.37.117.153:8080/shopApp/customs`,
        data: formdata,
        headers: {
          authorization: auth.authorization
        }
      });
      console.log(send);
      switch (message) {
        case "insert":
          setInsertImage(send.data.url);
          break;
        case "send":
          setResult(send.data);
          setUploadImage(send.data.url);
          break;
        default:
          break;
      }

    }
    catch (e) {
    }
  }

  useEffect(() => {
    sendImage("insert");
  }, [image]);

  useEffect(() => {
    const insertImageEffect = async () => {
      if (insertImage)
        await iframeElement.contentWindow.postMessage({
          action: "insertImage",
          url: insertImage,
        },
          "https://browserboard.com");
    };
    insertImageEffect();
  }, [insertImage]);
  useEffect(() => {
    const insertImageEffect = async () => {
      if (addImage)
        await iframeElement.contentWindow.postMessage({
          action: "insertImage",
          url: String(addImage),
        },
          "https://browserboard.com");
    };
    insertImageEffect();
    setAddImage("");
  }, [addImage]);

  useEffect(() => {
    fetch(sendImageA)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "filename.jpeg");
        setSendImageBlob(file);
      })
  }, [sendImageA]);

  useEffect(() => {
    sendImage('send');
  }, [load]);

  window.addEventListener("message", (e) => {
    switch (e.data.action) {
      case "updateDownloadImageProgress":
        console.log(e.data);
        break; /* handle the action */
      case "downloadImageComplete":
        setSendImageA(e.data.url);
        console.log(e.data);
        break; /* handle the action */
      /* the rest of this file will explain what actions exist and how to handle them. */
    }
  });
  useEffect(() => {
    const imageLoad = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: `http://3.37.117.153:8080/shopApp/customs-user`,
          headers: {
            authorization: auth.authorization
          }
        });
        console.log(response.data);
        setCustomImage(response.data);
      } catch (error) {
      }
    };
    imageLoad();
  }, [insertImage, result]);

  useEffect(() => {
    const boardLoad = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: `http://3.37.117.153:8080/shopApp/user-board`,
          headers: {
            authorization: auth.authorization
          }
        });
        console.log(response.data);
        setBoard(response.data.url);
      } catch (error) {
      }
    };
    boardLoad();
  }, []);
  if (!board) return <><br /><br /><br /><br /><br /><CircularProgress />그림판 불러오는중...</>
  return (<>
    <Div>
      <Cover id="browserboard" src={board} sandbox="allow-pointer-lock allow-same-origin allow-scripts allow-forms" >
        
      </Cover>

      <Cover2 src="https://shoppingmal.s3.ap-northeast-2.amazonaws.com/review/04b82323-b83a-4adc-af1f-6739616aedf7" >

      </Cover2>
      <Test src={uploadImage}/>

    </Div>
    <Div>
      <BtnCover><StyledButton onClick={() => sendBrowserboardMessage()}>이미지 등록</StyledButton></BtnCover>
      <InputCover>파일 추가하기<InputFile type="file" onChange={saveImage} /></InputCover>
    </Div>
    {customImage && customImage.customs.map(img => (
      <>
        <ImgList src={img.images.image} type='button' onClick={() => setAddImage(img.images.image)} />
      </>
    ))}


  </>
  )
}

const Div = styled.div`
  display: flex;
  padding: 0px 0px 0px 25px;
`;
const Test = styled.img`
  padding: 5px 10px;
  text-align: center;
  position: absolute;
  top: 60%;
  left: 74%;
  transform: translate( -50%, -50% );
  width: 20%;
  height: 40%;
`
const InputFile = styled.input`
  display: none;
`;
const InputCover = styled.div`
  position: relative;
  overflow: hidden;
  width: 220px;
  height: 60px;
  font-size: 0.8rem;
  text-align: center;
  background-color: var(--main-color);
  color: var(--back-color);
  border-radius: 1.6rem;
  margin: 0;
  border: none;
  cursor: pointer;
  height: 2.8rem;
  padding: 5px;
  &:hover {
    opacity: 85%;
    transition: all 0.2ms ease;
  }
  input[type=file] {
    position: absolute;
    top: 0;
        right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
`

const BtnCover = styled.div`
  width: 220px;
  height: 60px;
`

const Cover = styled.iframe`
  flex:1;
  width: 50%;
  padding: 100px 20px 5px 0px;
`;
const Cover2 = styled.img`
  flex:1;
  width: 50%;
  padding: 100px 20px 20px 20px;
  height: 10%;
`;
const ImgList = styled.img`
  width: 120px;
  height: 90px;
  margin: 0 auto;
  padding: 10px 20px 20px 20px;
`;
