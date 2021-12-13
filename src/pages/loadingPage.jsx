import React from "react";
import { useState,useEffect } from "react"; 
import axios from "axios";
import styled from "styled-components";
import { Redirect } from "react-router-dom";


export function LoadingPage() {
  const [authorization, setAuthorization] = useState("");
  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  setTimeout(() => {
    setCode(new URL(window.location.href).searchParams.get('code'));
  }, 0)
  useEffect(() => {
    // setCode(new URL(window.location.href).searchParams.get('code'));
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
        setAuthorization(response.headers.authorization);
      } catch (error) {
        console.error(error);
        setError(error);
      }
      setLoading(false);
    };
    getKakao();
  }, [code]);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!authorization) return <p>{authorization}</p>;
  return <Redirect to="/"></Redirect>;
}

const Cover = styled.div``;
