import React from 'react'
import axios from 'axios'
import styled from 'styled-components'



const ReviewI = styled.div `
padding: 10rem`

const baseURL = "http://pvpvpvpvp.gonetis.com:8080/sample/reviews";

export default function ReviewInsert() {
   
    const [post, setPost] = React.useState("");

  
  
    function createPost() {


        console.log("작동함");
        const form = new FormData();
        form.append('title',"qwe");
        form.append('content','qweaaaa');
        form.append('productNumber','100');
    
    
        axios({
          method:'POST',
          url:baseURL,
          data:form,
      }).then((response) => {
          setPost(response.data);
        });
    }
   if(!post)
    return (
       <ReviewI>

      <button onClick={createPost}>Create Post</button>

    </ReviewI>
    )

    return(<ReviewI><p>성공{post.result}</p></ReviewI>)
}
