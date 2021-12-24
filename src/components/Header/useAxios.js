import React, { useEffect } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shopApp",
});

export function useAxios() {
  useEffect(() => {
    const accessToken = localStorage.getItem("authorization");
    console.log(accessToken);
    const interceptor = axiosInstance.interceptors.request.use((config) => {
      return {
        ...config, //  config 주소값(공간)을 그대로 가져오고
        headers: {
          ...config.headers, //  가져온 공간의 헤더를 바꾼다는 표시?
          authorization: accessToken,
        },
      };
    });
  }, []);

  return axiosInstance;
}
