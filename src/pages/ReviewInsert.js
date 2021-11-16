import React from 'react'
import styled from 'styled-components'
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';




const Inserting = styled.div `
padding: 10rem`



const ReviewInsert = () => {
    
   //https://www.youtube.com/watch?v=t12a6z090AU
   const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );


    return (
        <Inserting>
        <div>       
           
           <h2> 여기는  리뷰 등록을 위한 곳입니다. </h2>
        </div>
            <hr/>

            <Editor editorState={editorState} onChange={setEditorState} />



        


        </Inserting>






    )
}
 

export default ReviewInsert