import React, { useState } from 'react';
import styled from 'styled-components';
import StyledButton from '../components/Button/Button';

import { Radio } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div`
  padding: 13rem 10rem;
  font-size: 11px;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  padding: 2rem 0rem;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 100px;
`;
const Details = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const Title = styled.div`
  font-weight: 500;
  padding: 20px 0px;
`;
const ProductColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;
const PriceDetail = styled.div`
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin: 2rem 0rem;
`;
const ProductAmount = styled.div`
  margin: 0rem 1rem;
  font-size: 13px;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Right = styled.div`
  flex: 2;
  margin-left: 5rem;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.5rem;
  font-weight: ${props => props.type === 'total' && '500'};
  margin-top: ${props => props.type === 'total' && '10px'};
`;
const SummaryItemText = styled.div`
  padding: 1rem 0rem;
`;
const Wish = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin-top: 1.8rem;
`;
const Total = styled.div`
  padding: 2rem 0rem;
  height: 10vh;
`;

const RadioLabel = styled.label``;
const Info = styled.div`
  width: 30%;
  height: 20px;
  padding: 10px;
  position: relative;
`;

const CheckOut = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>배송주소</Title>
          <Info>
            <input></input>
          </Info>
          <Hr />
          <Title>배송정보</Title>
          <RadioLabel>
            <Radio type='radio' value='disabled' size='small' disabled />
            우체국택배 | 2 - 3일 소요
          </RadioLabel>
          <Hr />
          <Title>결제정보</Title>
          <form>
            <RadioLabel>
              <Radio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                color='default'
                size='small'
                value='a'
                name='radio-buttons'
                inputProps={{ 'aria-label': 'A' }}
              />
              체크카드/신용카드
            </RadioLabel>
            <RadioLabel>
              <Radio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                color='default'
                size='small'
                value='b'
                name='radio-buttons'
                inputProps={{ 'aria-label': 'B' }}
              />
              간편결제
            </RadioLabel>
          </form>
          <Hr />
          <Title>주문정보</Title>
          {cart.products.map(product => (
            <div key={product.index}>
              <Product>
                <ProductDetail>
                  <Image src={product.image} />
                  <Details>
                    <div>
                      <b>{product.product}</b>
                      <p>{product.kind}</p>
                    </div>
                    <div>사이즈: {product.size}</div>
                    <ProductColor color={product.color} />
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <AmountContainer>
                    <ProductAmount>{product.quantity}</ProductAmount>
                  </AmountContainer>
                  <p>{product.price * product.quantity}원</p>
                </PriceDetail>
              </Product>
              <Hr />
            </div>
          ))}
        </Left>
        <Right>
          <Title>결제확인</Title>
          <Total>
            <SummaryItemText>
              <SummaryItem>
                <span>가격</span>
                <span>{cart.total}원</span>
              </SummaryItem>
              <SummaryItem>
                <span>배송비</span>
                <span>0원</span>
              </SummaryItem>
            </SummaryItemText>
            <Hr />
            <SummaryItemText>
              <SummaryItem type='total'>
                <span>합계</span>
                <span>{cart.total}원</span>
              </SummaryItem>
            </SummaryItemText>

            <StyledButton>주문</StyledButton>
          </Total>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default CheckOut;
