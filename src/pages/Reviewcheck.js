import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link, Route} from "react-router-dom";
import styled from "styled-components";

const TableStyle = styled.div `
padding: 10rem   `



export export default function Reviewcheck() {
  
    const [users, setUsers] = useState(""); // axios를 통해 json에서 데이터를 끄집어 내기 위한 곳
    const [loading, setLoading] = useState(false); //  로딩을 위한 변수와 함수 설정
    const [error, setError] = useState(null); // 에러를 위한 변수와 함수 설정   1111111

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setUsers(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                    'http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shoppingmall/reviews'
                );
                setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchUsers();
    }, []);

    if (loading) 
        return <div>로딩중..</div>;
    if (error) 
        return <div>에러가 발생했습니다</div>;
    if (!users) 
        return null;
    
    console.log(users);


    function checkOnlyOne(element) {
  
        const checkboxes 
            = document.getElementsByName("animal");
        
        checkboxes.forEach((cb) => {
          cb.checked = false;
        })
        
        element.checked = true;
      }



    return (

        <TableStyle>
         

                 <h1>
                    상품평
                </h1>
              
                               
                
               <hr/>

              
               
                
                    {
                        users
                            .reviews
                            .map(user => (
                                <> 
                                   
                                <span> 
                                        <img src={user.images.image}/>
                                      
                                    </span>

                                    <span>
                                        상품명 : {user.product}
                                    </span>

                               
                                
                                    <span>
                                        {user.content}
                                    </span>
                            
                               <div>
                                    <span>
                                    <input type="checkbox"
                                            name = 'product'
                                            onClick='checkOnlyOne(this)'
                                    
                                     />
                                    </span>
                                    
                            
                                </div>
                            <hr/><br/>

                        </>

                            ))

                    }
                

                <Route>
                

                    <Link to="/review/ReviewInsert">

                       
                            <button>
                                상품평 수정하기</button>
                        

                    </Link>

                </Route>


</TableStyle>
        
    );
};

