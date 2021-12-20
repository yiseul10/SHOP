import React from 'react'
import {post} from 'axios'
import styled from "styled-components";

const Review = styled.div `
    padding: auto;
    margin: auto;
    background-color: whitesmoke;
    text-align: center;
    `;

const Button = styled.button`
  color: skyblue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid skyblue;
  border-radius: 3px;
`;



    export class ReviewInsert extends React.Component {


        
      
        constructor(props) {

            super(props);

            this.state = {

                file: '',
                fileName: '',

                productNumber: '',      

                title: '',

                content: ''

            }

            this.handleFormSubmit = this
                .handleFormSubmit
                .bind(this)

            this.handleFileChange = this
                .handleFileChange
                .bind(this)

            this.handleValueChange = this
                .handleValueChange
                .bind(this)

            this.addCustomer = this
                .addCustomer
                .bind(this)
        }

        handleFormSubmit(e) {

            e.preventDefault()

            this
                .addCustomer()
                .then((response) => {

                    console.log(response.data);

                })
                alert("리뷰 등록이 완료되었습니다. 뒤로 돌아가주세요.")

        }

        handleFileChange(e) {

            this.setState({

                file: e
                    .target
                    .files[0],

                fileName: e.target.value

            });

        }

        handleValueChange(e) {

            let nextState = {};

            nextState[e.target.name] = e.target.value;

            this.setState(nextState);

        }

        addCustomer() {

            const url = 'http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shoppingmall/reviews';

            const formData = new FormData();

            formData.append('image', this.state.file)

            formData.append('title', this.state.title)

            formData.append('content', this.state.content)

            formData.append('productNumber', this.state.productNumber)

            const config = {

                headers: {

                    'content-type': 'multipart/form-data'

                }

            }
                            
            return post(url, formData, config)

        }

        render() {

            return (
                
            <Review>

                <form onSubmit={this.handleFormSubmit}>

                    <h1>상품평 등록</h1>

                    상품넘버:
                    <input
                        type="text"
                        name="productNumber"
                        value={this.state.productNumber}
                        onChange={this.handleValueChange}/><br/>
                      
                      <br/>
                        리뷰제목:
                        <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleValueChange}/><br/>
                        <br/>
                    
                    <textarea
                        cols="50"
                        rows="10"
                        type="text"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleValueChange}/><br/>



                     리뷰할 사진:
                    <input
                        type="file"
                        name="image"
                        file={this.state.file}
                        value={this.state.fileName}
                        onChange={this.handleFileChange}/>
                  
                 
                    <Button type="submit">
                    상품평 등록하기
                    </Button>
                

                </form>

            </Review>
            )

        }

    }

    export default ReviewInsert

