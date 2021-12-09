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
  ${media({ padding: '0px' })};
`;
const ImgView = styled.div`
  min-width: 275px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  /* background-color: mintcream; */
  &:hover {
    opacity: 70%;
    transition: all 0.5s ease;
    cursor: pointer;
  }
  ${media({ height: '100%' })}
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 0;
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
`;

const Detail = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  line-height: normal;
  margin-bottom: 1rem;
  padding: 0.5rem 0.5rem;
`;
const ProductTitle = styled.span`
  letter-spacing: -1px;
  font-size: 12px;
`;

const PriceView = styled.div`
  display: flex;
`;

const ProductPrice = styled.span`
  display: block;
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
    addFlashMessage('위시리스트에 담겼습니다!');
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
