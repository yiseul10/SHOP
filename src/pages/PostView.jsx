import React, { useEffect, useState } from 'react';
import { getPostByNo } from  '../components/Table/Data';
import '../components/Table/Post.css';
import styled from 'styled-components'; 


const Button = styled.button`
  color: skyblue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid skyblue;
  border-radius: 2px;
`;


const Post = styled.div `
  background-color: whitesmoke;
  text-align: center;
  font-family: fantasy;
  font-size: 20px;
`


export const PostView = ({ history, location, match }) => {
    const [ data, setData ] = useState({});
   
    const { no } = match.params;
   
    useEffect(() => {
      setData(getPostByNo(no));
    }, [ ]);
   
    return (
       
       
      <Post>
      <>
        <h2 align="center">게시글 상세정보</h2>
   
        <div className="post-view-wrapper">
              <br/>              <br/>

          {
            data ? (
              <>
             
                <div className="post-view-row">
              
                  <div>
                    {
                      data.content
                    }
                  </div>
                </div>
              </>
            ) : '해당 게시글을 찾을 수 없습니다.'
          }
        
        </div>

      </>

      <br/> <br/>
          <Button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</Button>
          <br/> <br/>
      </Post>
    )
  }
   
 