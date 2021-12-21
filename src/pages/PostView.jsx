import React, { useEffect, useState } from 'react';
import { getPostByNo } from  '../components/Table/Data';
import '../components/Table/Post.css';
 
export const PostView = ({ history, location, match }) => {
    const [ data, setData ] = useState({});
   
    const { no } = match.params;
   
    useEffect(() => {
      setData(getPostByNo(no));
    }, [ ]);
   
    return (
      <>
        <h2 align="center">게시글 상세정보</h2>
   
        <div className="post-view-wrapper">
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
          <br/> <br/>
          <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
          <br/> <br/>
        </div>
      </>
    )
  }
   
 