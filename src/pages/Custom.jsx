import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

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
        url: `http://localhost:8080/sample/customs`,
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
          break;
        default:
          break;
      }

    }
    catch (e) {
    }
  }

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
            method:'GET',
            url:`http://localhost:8080/sample/customs-user`,
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
  }, [insertImage,result]);
  return (<>
    <Cover id="browserboard" src="https://browserboard.com/whiteboard/9yAcLuQo4jwEm378zhstP5?key=ncXbudswBvXrJtHeya5HA6">
    </Cover>
    <Cover2>{customImage&&customImage.customs.map(img => (
      <>
        <img src={img.images.image} style={{ height: '30px', width: '100px' }} type='button' onClick={()=>setAddImage(img.images.image)}/>
      </>
    ))}</Cover2>

    <button onClick={() => sendBrowserboardMessage()}>이미지 등록</button>
    <input type="file" onChange={saveImage} />
    <button onClick={() => sendImage("insert")}>이미지 추가하기</button>
  </>
  )
}

const Cover = styled.iframe`
  width: 50%;
  height: 500px
`;
const Cover2 = styled.div`
  width: 20%
  height: 500px
`;