import React from "react";
import { useState,useEffect } from "react"; 
import axios from "axios";
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';



export function EmailCerified() {
    const [id, setId] = useState("");
    const [result,setResult] = useState("");
    const [key, setKey] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const history = useHistory();
    setTimeout(() => {
      setId(new URL(window.location.href).searchParams.get('id'));
      setKey(new URL(window.location.href).searchParams.get('key'));
    }, 0)
    useEffect(() => {
      const cerified = async () => {
        try {    
          setError(null);
          setLoading(true);
          const response = await axios({
              method:'GET',
              url:`http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shoppingmall/user-join-email?id=${id}&key=${key}`,
          });
          console.log(response.data.result); 
          if(response.data.result=="success")
          {
            setResult(response.data.result);
          }
        } catch (error) {
          console.error(error);
          setError(error);
        }
        setLoading(false);
      };
      cerified();
    }, [key]);
    if (loading) return <><CircularProgress/>이메일 인증 중..</>
    if (error) return <div>에러가 발생했습니다</div>;
    if (result) return <><p>인증이 완료되었습니다.!</p><Link to="/">메인으로 돌아가기</Link></>;
    return <p><CircularProgress/>이메일 인증 중...</p>
  }