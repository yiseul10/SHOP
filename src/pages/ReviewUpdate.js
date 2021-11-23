import React from 'react'
import styled from 'styled-components'


const Review = styled.div `
font-size: 1rem;
    background-color: whitesmoke;
    font-weight: 100;
    font-style: italic;
`



export default function ReviewUpdate() {
    return (

        <Review>
        
        <h1> 수정하기</h1>
        <h1> 수정하기</h1>

        <h1> 수정하기</h1>
        <h1> 수정하기</h1>
        <h1> 수정하기</h1>
        <h1> 수정하기</h1>

            

<form>

    <h1>리뷰 등록</h1>

        이미지:
    <input
        type="file"
        name="image"
        />
      
        이름:
        <input
        type="text"
        name="title"
      /><br/>

    내용:
    <textarea
        cols="50"
        rows="10"
        type="text"
        name="content"
      /><br/>

    상품넘버:
    <input
        type="text"
        name="productNumber"
      /><br/>

    <button type="submit">수정하기</button>

</form>

</Review>


    
    )
}
