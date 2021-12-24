import React from 'react';
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { IoChatbubbles } from "react-icons/io5";


export function Customer() {



    return (
        
        <div>
                                 

               <h1> 고객센터 </h1>
                    <br/> <hr/>

                    <span>
                    <IoCallOutline  size="180"/>
                    <Link to="/Customer/cs/Question">
                            1대1 문의
                  </Link> 
                  </span>
                            
        

                    <span>
                    <IoChatbubbles  size="180"/>
                  <Link to="/Customer/cs/CustomerCenter/NOTICE">
                            공지 사항
                  </Link> 
                    </span>



        </div>
    )
}



