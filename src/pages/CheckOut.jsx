import React, { useState } from 'react';
import { media } from '../responsive';

import styled from 'styled-components';
import StyledButton from '../components/Button/Button';
import { Radio } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Container = styled.div`
  padding: 13rem 10rem;
  font-size: 11px;
  ${media({ padding: '120px 25px 80px 25px' })}
`;
const Wrapper = styled.div`
  display: flex;
  ${media({ flexDirection: 'column' })}
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
  padding: 5px 0px;
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
  background-color: #42493a;
  border: none;
  height: 1px;
`;
const Right = styled.div`
  flex: 2;
  margin-left: 5rem;
  ${media({ margin: '30px 0px' })}
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.5rem;
  font-weight: ${props => props.type === 'total' && '500'};
  ${media({ margin: '10px 0px' })}
`;
const SummaryItemText = styled.div`
  padding: 1rem 0rem;
  ${media({ padding: '0.5rem 0rem' })}
`;

const Info = styled.div`
  width: 30%;
  height: 20px;
  padding: 10px;
  position: relative;
`;
const MediaLine = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  display: none;
  ${media({ display: 'block', marginTop: '9px' })}
`;

export const CheckOut = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState('');

  // const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const auth = useSelector(state => state.authorization);

  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  const payment = () => {
    const paydata = async () => {
      try {
        const formdata = new FormData();
        let product = '';
        let quantity = '';
        let id = '';
        let price = '';
        let customNumber = '';
        let color = '';
        let size = '';
        if (cart.products.length == 1) {
          cart.products.map(
            pr => (
              (product += pr.product),
              (quantity += pr.quantity),
              (id += pr.id),
              (price += pr.quantity * pr.price),
              (customNumber += pr.customNumber),
              (color += pr.color),
              (size += pr.size)
            )
          );
        }

        if (cart.products.length > 1) {
          cart.products.map(
            pr => (
              (product += pr.product + ','),
              (quantity += pr.quantity + ','),
              (id += pr.id + ','),
              (price += pr.quantity * pr.price + ','),
              (customNumber += pr.customNumber + ','),
              (color += pr.color + ','),
              (size += pr.size + ',')
            )
          );
        }

        formdata.append('price', price);
        formdata.append('product', product);
        formdata.append('quantity', quantity);
        formdata.append('size', size);
        formdata.append('color', color);
        formdata.append('productsNumber', id);
        formdata.append('productCustomNumber', customNumber);
        formdata.append('productCount', cart.products.length);

        console.log(cart.products[0].id);
        console.log(formdata.get('product'));
        setError(null);
        setLoading(true);
        const response = await axios({
          method: 'POST',
          url: `http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shopApp/orders`,
          data: formdata,
          headers: {
            authorization: auth.authorization
          }
        });
        console.log(response.data);
        if (response.data.result == 'PaymentDone');
        {
          setResult(response.data.paymentURL);
        }
      } catch (error) {
        console.error(error);
        setError(error);
      }
      setLoading(false);
    };
    paydata();
  };
  if (result) return (window.location.href = `${result}`);
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Title>배송주소</Title>
          <Hr />
          <Info>
            <form>
              <input></input>
            </form>
          </Info> */}
          <Title>배송정보</Title>
          <Hr />
          <label>
            <Radio type='radio' value='disabled' size='small' disabled />
            우체국택배 | 2 - 3일 소요
          </label>
          <Title>결제정보</Title>
          <Hr />
          <form>
            <label>
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
            </label>
            <label>
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
            </label>
          </form>
          <Title>주문정보</Title>
          <Hr />
          {cart.products.map(product => (
            <div key={product.index} id={product.id}>
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

          <MediaLine />
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
          <StyledButton onClick={payment}>주문</StyledButton>
        </Right>
      </Wrapper>
    </Container>
  );
};
