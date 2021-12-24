import React, { useEffect, useState } from 'react';
import { getPostByNo } from  '../components/Table/Data';
import '../components/Table/Post.css';
import styled from 'styled-components'; 





const Post = styled.div `
  background-color: whitesmoke;
  text-align: center;
  font-family: fantasy;
  font-size: 20px;
`

const StyledButton = styled.button`
  font-size: 0.8rem;
  text-align: center;
  background-color: var(--main-color);
  color: var(--back-color);
  border-radius: 1.6rem;
  margin: 0;
  border: none;
  cursor: pointer;
  width: 10%;
  height: 2.8rem;
  padding: 5px;
  &:hover {
    opacity: 85%;
    transition: all 0.2ms ease;
  }
`;



export const PostView = ({ history, location, match }) => {
    const [ data, setData ] = useState({});
   
    const { no } = match.params;
   
    useEffect(() => {
      setData(getPostByNo(no));
    }, [ ]);
   
    return (
       
       
      <Post>
      <>
      <br/>
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
          <StyledButton className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</StyledButton>
          <br/> <br/>
      </Post>
    )
  }
   
 