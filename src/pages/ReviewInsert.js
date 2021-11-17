import React, {useState} from 'react'
import styled from 'styled-components'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const MyBlock = styled.div `
    .wrapper-class{
        width: 50%;
        margin: 0 auto;
        margin-bottom: 4rem;
    }
  .editor {
    height: 500px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;





const ReviewInsert = () => {

 

    return (
        <MyBlock>
        <h1> 리뷰등록</h1>
        <h1> 리뷰등록</h1>

        <h1> 리뷰등록</h1>
        <h1> 리뷰등록</h1>
        <h1> 리뷰등록</h1>
        <h1> 리뷰등록</h1>
        <h1> 리뷰등록</h1>
        <h1> 리뷰등록</h1>

          <div className='form-wrapper'>
        <input className="title-input" type='text' placeholder='제목' 
        

        />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className="submit-button">입력</button>



        </MyBlock>
    );

}

export default ReviewInsert