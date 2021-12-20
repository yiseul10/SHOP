import React from "react";
import styled from "styled-components";
import { TiDocumentText } from "react-icons/ti";
import { Link, Route } from "react-router-dom";

const CustSc = styled.div`
  padding: 10rem;
`;

export const CustomerCenter = () => {
  return (
    <CustSc>
      <div>
        <h2> 고객센터</h2>
        <hr />
        <br /> <br />
      
        <Route>
          
    
          <Link to="/customerService/EventNotice">
            {" "}
            <span>
              {" "}
              <TiDocumentText size="130" /> 이벤트 및 공지사항{" "}
            </span>{" "}
          </Link>
   
        </Route>
      </div>
    </CustSc>
  );
}
