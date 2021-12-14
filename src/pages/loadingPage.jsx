import React from "react";
import { useState,useEffect } from "react"; 
import axios from "axios";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { LoginInput } from "components/input";
import { PrimaryBtn } from "components/Button";
import CircularProgress from '@mui/material/CircularProgress';
import { useHistory } from "react-router-dom";


export function LoadingPage() {
  const [authorization, setAuthorization] = useState("");
  const [result,setResult] = useState("");
  const [id, setId] = useState("");
  const [isIdCheck, setIsIdCheck] = useState(true);
  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const history = useHistory();
  setTimeout(() => {
    setCode(new URL(window.location.href).searchParams.get('code'));
  }, 0)
  useEffect(() => {
    console.log("code is "+code);
    const getKakao = async () => {
      try {    
        setError(null);
        setAuthorization(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios({
            method:'GET',
            url:`http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shoppingmall/user-kakao?code=${code}`,
        });
        console.log(response.headers.authorization);
        console.log(response.data); 
        setAuthorization(response.headers.authorization);
        if(response.data.kakaoNumber)
        {
          setResult(response.data.kakaoNumber);
        }
      } catch (error) {
        console.error(error);
        setError(error);
      }
      setLoading(false);
    };
    getKakao();
  }, [code]);


  const userData = async () => {
    if (
      id.length === 0
    ) {
      window.alert("id 값을 정확히 입력해 주세요");
    } else {
      const formdata = new FormData();
      formdata.append("name", id);
      formdata.append("kakaoNumber",result);

      //비동기 통신 POST
      const send = await axios({
        method: "POST",
        url: `http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shoppingmall/user-join-social`,
        data: formdata,
      }).catch((err) => Promise.reject(err));
      console.log(send.data);
      console.log(send.headers);  
      setAuthorization(send.headers.authorization);
      if (send.status === 200) {
        // history.push("/");
      }
    }
  };

  function onIdChange(event) {
    setId(event.target.value);
    if (event.target.value === "idid") {
      setIsIdCheck(false);
    } else {
      setIsIdCheck(true);
    }
  }
  if ((!result&&!authorization)||loading&&!authorization) return <div><CircularProgress /></div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!authorization) return (
  <Cover>
    <LoginInput
      // LoginInput페이지에서 내가 사용할 props들을 추가해줘야 사용이 가능하다
      id="id" //  props
      label="아이디"
      value={id}
      placeholder="아이디(5~12자)"
      onChange={onIdChange}
      checked={isIdCheck} //  컴포넌트의 재사용
      errorMsg="중복된 아이디입니다"
    />
    <PrimaryBtn label="카카오톡으로 회원가입" onClick={userData} type="button" />
  </Cover>
  );

  
  return <Redirect to="/"></Redirect>;
}

const Cover = styled.div``;
