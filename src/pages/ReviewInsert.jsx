import React from 'react'
import {post} from 'axios'
import styled from "styled-components";



const Review = styled.div `
    padding: auto;
    margin: auto;
    background-color: whitesmoke;
    text-align: center;
    font-family: fantasy;
   `;



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



    export class ReviewInsert extends React.Component {

        handleGoBack = () => {
            this.props.history.goBack();
          };
        
      
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
              
                
                    
            if(this.state.productNumber.length == 0){
                alert('제품 번호를 입력하세요.');
                return ;
            }

            if( this.state.productNumber<1 ||  this.state.productNumber>232 ){
                alert('올바른 제품번호를 입력하세요.');
                return ;
            }

            if(this.state.content.length==0){
                alert('리뷰 내용을 입력하세요.');
                return ;
            }
            
            if(this.state.file.length == 0){
                alert('리뷰할 사진을 넣어주세요.');
                return ;
            }




            this
                .addCustomer()
                .then((response) => {

                    console.log(response.data);

                })
           

                alert(" 등록이 완료 되었습니다.");
                this.props.history.goBack();

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
                <br/> 
                    <h1>상품평 등록</h1>
                        <br/> <br/>
                    제품 번호:
                    <input
                        type="text"
                        name="productNumber"
                        placeholder='제품 번호를 입력하세요.'
                        value={this.state.productNumber}
                        onChange={this.handleValueChange}/><br/>
                      
                      <br/>
                        리뷰제목:
                        <input
                        type="text"
                        name="title"
                        placeholder='리뷰 제목'
                        value={this.state.title}
                        onChange={this.handleValueChange}/><br/>
                        <br/>
                    
                    <textarea
                        cols="50"
                        rows="10"
                        type="text"
                        name="content"
                        placeholder='내용을 입력하세요.'
                        value={this.state.content}
                        onChange={this.handleValueChange}/><br/>



                     사진: 
                    <input
                        type="file"
                        accept='image/*' 
                        name="image"
                        file={this.state.file}
                        value={this.state.fileName}
                        onChange={this.handleFileChange}/>



                 
                    <StyledButton type="submit">
                    상품평 등록하기
                    </StyledButton>
                

                </form>


                <StyledButton onClick={this.handleGoBack}>뒤로 가기 </StyledButton> 
             
            </Review>
            )

        }

    }

    export default ReviewInsert

