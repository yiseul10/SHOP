import React from "react";
import { useState,useEffect } from "react"; 
import axios from "axios";
import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import CircularProgress from '@mui/material/CircularProgress';



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
            url:`http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shoppingmall/orders/approve`,
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
  if (loading) return <><CircularProgress/></>
  if (error) return <div>에러가 발생했습니다</div>;
  if (result) return <><p>결제가 완료되었습니다.!</p><Link to="/">메인으로 돌아가기</Link></>;
  return <p>결제 승인 중...</p>
}