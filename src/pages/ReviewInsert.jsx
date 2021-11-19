import React from 'react'
import {post} from 'axios'
import styled from "styled-components";

const Review = styled
    .div `
padding: 10rem`

    class ReviewInsert extends React
    .Component {

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

            const url = 'http://pvpvpvpvp.gonetis.com:8080/sample/reviews';

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

            return (<Review>

                <form onSubmit={this.handleFormSubmit}>

                    <h1>리뷰 등록</h1>

                        이미지:
                    <input
                        type="file"
                        name="image"
                        file={this.state.file}
                        value={this.state.fileName}
                        onChange={this.handleFileChange}/>
                      
                        이름:
                        <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleValueChange}/><br/>

                    내용:
                    <textarea
                        cols="50"
                        rows="10"
                        type="text"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleValueChange}/><br/>

                    상품넘버:
                    <input
                        type="text"
                        name="productNumber"
                        value={this.state.productNumber}
                        onChange={this.handleValueChange}/><br/>

                    <button type="submit">추가하기</button>

                </form>

            </Review>
            )

        }

    }

    export default ReviewInsert