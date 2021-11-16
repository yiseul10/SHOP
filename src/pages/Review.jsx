import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import axios from 'axios';

const ReviewItem = styled.div `
padding: 10rem`

const Review = () => {

    const [users, setUsers] = useState(""); // axios를 통해 json에서 데이터를 끄집어 내기 위한 곳
    const [loading, setLoading] = useState(false); //  로딩을 위한 변수와 함수 설정
    const [error, setError] = useState(null); // 에러를 위한 변수와 함수 설정

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

        <ReviewItem>

            <h1>
                상품평
            </h1>

            <hr/>

            <div>
                {
                    users
                        .reviews
                        .map(user => (<> 
                        < table border = "1px" > 
                        <th>테이블</th>
                 
                        <tr>
                            <td>번호 : {user.index}  ,  상품명 : {user.product}    </td>
                        </tr>
                        <tr>
                            <td>{user.content}</td>
                        </tr>
                        <tr>
                            <td> <img src={user.images.image}/></td>
                        </tr>

                    </table>

                </>
                ))
                        
                }
            </div>
            <hr/>
            <br/>
            <button>
                등록하기</button>
        </ReviewItem>

    );
};

export default Review;