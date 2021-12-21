import React from "react";
import styled from "styled-components";
import { PostMain } from "./PostMain";


const CustSc = styled.div`
  margin: 20rem;
  text-align: center;
  background-color: brown;
`;

export const CustomerCenter = () => {
 

  
 
  return (
    <CustSc>
          <h2> 공지사항 </h2> 
          <hr/> 
       
     
          <div className="App">
       
            <PostMain/>
    </div>
    


    </CustSc>
  );
}
