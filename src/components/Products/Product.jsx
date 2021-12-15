import React, { useState, useEffect, useContext } from 'react';
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { media } from '../../responsive';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addWish } from '../../store/wish-slice';
import ExampleContext from '../ExampleContext';

const Container = styled.div`
  position: relative;
`;
const ImgView = styled.div`
  max-width: 275px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  &:hover {
    opacity: 70%;
    transition: all 0.5s ease;
    cursor: pointer;
  }
  ${media({
    width: '219.5px',
    height: '330px'
  })}
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 0;
  ${media({
    objectFit: 'cover',
    width: '100%'
  })}
`;

const Icon = styled.div`
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
  ${media({
    display: 'none'
  })}
`;

const Detail = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  line-height: normal;
  margin-bottom: 3rem;
  padding: 0.5rem 0rem;
  ${media({
    margin: '12px 0px 30px 0px',
    padding: '0',
    flexDirection: 'column'
  })}
`;
const ProductTitle = styled.span`
  letter-spacing: -1px;
  font-size: 12px;
`;

const PriceView = styled.div`
  display: flex;
  ${media({
    paddingTop: '8px'
  })}
`;

const ProductPrice = styled.span`
  display: block;
  ${media({
    fontSize: '11px'
  })}
`;
const Currency = styled.span`
  font-size: 5px;
  color: grey;
  letter-spacing: -0.5px;
  padding: 0.1rem;
`;

const Product = ({ id, ...product }) => {
  const [click, setClick] = useState(false);
  const addFlashMessage = useContext(ExampleContext);

  const dispatch = useDispatch();

  const handleAddToWish = product => {
    // addFlashMessage('위시리스트에 담겼습니다!');
    dispatch(addWish(product));
    setClick(!click);
  };

  return (
    <Container>
      <Link to={`/${id}`}>
        <ImgView>
          <Image src={product.image} alt={product.product} />
        </ImgView>
      </Link>
      <Icon onClick={() => handleAddToWish(product)}>
        {click ? <Favorite /> : <FavoriteBorderOutlined />}
      </Icon>
      <Detail>
        <ProductTitle>{product.product}</ProductTitle>
        <PriceView>
          <ProductPrice>{product.price}</ProductPrice>
          <Currency>원</Currency>
        </PriceView>
      </Detail>
    </Container>
  );
};

export default Product;
