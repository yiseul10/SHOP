import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link, Route} from "react-router-dom";
import styled from "styled-components";

const TableStyle = styled.div `
	font-size: 1rem;
    background-color: whitesmoke;
    font-weight: 100;
    font-style: italic;
    width: 70;
    height: 130;
    border-radius: box-sizing;
    text-align: center;
    height: 100vh;
    line-height: 100vh;
`;

const Images = styled.td `
  
`;



const ButtonStyle = styled.div `
padding: 6px 12px;
 color: white; 
 font-size: 16px;
  border: none; 
  border-radius: 4px;
   background-color: #74b9ff; 
   :hover { background-color: #99c6f5; }
   text-align: center;
    height: 100vh;
    line-height: 100vh;

`;

const RedButton = styled.div `
 background-color: #f53e3e; 
 :hover { background-color: #ff7268; } 
 `;

const Review = () => {

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
                    'http://pvpvpvpvp.gonetis.com:8080/sample/reviews'
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
            <div>

                <h1>
                    상품평
                </h1>

                <hr/>

                <div>
                    {
                        users
                            .reviews
                            .map(user => (
                                <> < table > <tr>

                                    <p>번호 : {user.index}</p>
                                </tr>
                                <tr>
                                    <p>
                                        상품명 : {user.product}
                                    </p>

                                </tr>

                                <Images>
                                <td>
                                
                                    <p> 
                                        <img src={user.images.image}/>
                                      
                                    </p>
                                </td>
                                </Images>
                                <td>
                                    <p>
                                        {user.content}
                                    </p>
                                </td>
                                <input type="checkbox" id="cbd"></input>
                            </table>

                            <hr/><br/>

                        </>

                            ))

                    }
                </div>


                <Route>
                    <Link to="/review/ReviewInsert">

                        <ButtonStyle>
                            <button>
                                상품평 등록하기</button>
                        </ButtonStyle>

                    </Link>

                    <Link to="/review/ReviewUpdate">

                        <RedButton>
                            <button>
                                상품평 수정하기</button>
                        </RedButton>

                    </Link>

                </Route>

            </div>

        </TableStyle>
        
    );
};

export default Review;