import React from 'react'
import styled from 'styled-components'
import { ImUsers  } from "react-icons/im";
import { TiDocumentText  } from "react-icons/ti";
import { TiVolumeDown  } from "react-icons/ti";
import { Link, Route } from 'react-router-dom';



const CustSc = styled.div`
padding: 10rem`




export default function () {

    return (

        <CustSc>
        <div>

    
            <h2> 고객센터</h2>

            <hr/>
            <br/> <br/>

            <Route>
          <Link to="/customerService/QuestionOne">  <span> <ImUsers  size="130"/> 1대1 문의하기</span> </Link>
          <Link to="/customerService/FAQ">   <span> <TiVolumeDown size="130"/> FAQ - 자주묻는 질문</span> </Link>
          <Link to="/customerService/EventNotice">   <span> <TiDocumentText size="130"/> 이벤트 및 공지사항 </span> </Link>
            </Route>

        </div>
        </CustSc>
    )
}
