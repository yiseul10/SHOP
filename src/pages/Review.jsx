import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link, Route} from "react-router-dom";
import styled from "styled-components";






const TableStyle = styled.div `

    background-color: whitesmoke;
   
    font-style: italic;
    padding: 10rem;
    
`

export const Review = () => {

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

    return (

        <TableStyle>
         

                 <h1>
                    상품평
                </h1>

                <select name="choice">
  <option value="">리뷰 하나만 보기</option>
  <option value="apple">특정 제품 기준으로 보기</option>
</select>



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
                            
                               
                         

                            <hr/><br/>

                        </>

                            ))

                    }
                

                <Route>
                    <Link to="/review/ReviewInsert">

                        
                            <button>
                                상품평 등록하기</button>
                       

                    </Link>

                    <Link to="/review/Reviewcheck">

                       
                            <button>
                                상품평 수정하기</button>
                        

                    </Link>

                </Route>


</TableStyle>
        
    );
};

export default Review;