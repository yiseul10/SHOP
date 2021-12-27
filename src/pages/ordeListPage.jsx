import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";

export function OrderListPage() {

  const auth = useSelector((state) => state.authorization);

  useEffect(() => {
    console.log(typeof auth + " : " + auth.authorization);
    const userdataload = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shopApp/orders/user`,
          headers: {
            authorization: auth.authorization,
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    userdataload();
  }, []);

  return (
    <Cover>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      주문내역페이지
    </Cover>
  );
}

const Cover = styled.div``;
