import React from "react";
import { useState,useEffect } from "react"; 
import axios from "axios";
import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";



export function Approval() {
  const [uuid, setUuid] = useState("");
  const [result,setResult] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [pgToken, setPgToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const history = useHistory();
  setTimeout(() => {
    setOrderNumber(new URL(window.location.href).searchParams.get('orderNumber'));
    setPgToken(new URL(window.location.href).searchParams.get('pg_token'));
    setUuid(new URL(window.location.href).searchParams.get('uuid'));
  }, 0)
  useEffect(() => {
    const approve = async () => {
      try {    
        setError(null);
        const formdata = new FormData();
        formdata.append("uuid",uuid);
        formdata.append("userNumber",'1');
        formdata.append("orderNumber",orderNumber);
        formdata.append("pgToken",pgToken);
        setLoading(true);
        const response = await axios({
            method:'POST',
            url:`http://pvpvpvpvp.gonetis.com:8080/sample/orders/approve`,
            data:formdata,
        });
        console.log(response.data.result); 
        if(response.data.result=="Success")
        {
          setResult(response.data.result);
        }
      } catch (error) {
        console.error(error);
        setError(error);
      }
      setLoading(false);
    };
    approve();
  }, [uuid]);
  if (loading) return <><Circle></Circle><Outer><Middle><Inner></Inner></Middle></Outer></>
  if (error) return <div>에러가 발생했습니다</div>;
  if (result) return <><p>결제가 완료되었습니다.!</p><Link to="/">메인으로 돌아가기</Link></>;
  return <p>결제 승인 중...</p>
}
const bounce = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(0)
  }
  100% {
    transform: scale(1)
  }
`;
 
const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #ff7979;
  animation: ${bounce} 2s infinite;
`;

const cover = keyframes`
from {
  -webkit-transform: rotate(270deg);
}
to{
  -webkit-transform: rotate(630deg);
  }
  
`
const Outer = styled.div`
  margin: auto;
  margin-top: 15%;
  background: $main;
  height: 100px;
  width: 100px;
  border-radius: 15px;
  animation: ${cover} 2s infinite;`
const Middle = styled.div`
  height: 60px;
  width: 60px;
  margin:auto;
  position: relative;
  top:20px;
  border-radius: 50%;
  background-image: linear-gradient(150deg, transparent 50%, $sec 50%),linear-gradient(90deg, $sec 50%, $little-cursor 50%);
   -webkit-animation: rotation 1200ms infinite linear;
  transform-origin: 50% 50%;
  animation-timing-function: ease;
  animation: ${cover} 2s infinite;`
const Inner = styled.div`
  background: $main;
  height: 48px;
  width: 48px;
  margin:auto;
  position: relative;
  top:6px;
  border-radius: 50%;
  animation: ${cover} 2s infinite;`

