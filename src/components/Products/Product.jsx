import React, { useState, useEffect, useContext } from 'react';
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { media } from '../../responsive';
import { mobile } from '../../responsive';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addWish } from '../../store/wish-slice';
import MessageContext from '../MessageContext';

const Container = styled.div`
  position: relative;
  z-index: 1;
`;
const ImgView = styled.div`
  width: 275px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  &:hover {
    opacity: 70%;
    transition: all 0.5s ease;
    cursor: pointer;
  }
  ${media({
    width: '225px',
    height: '297px',
    maxWidth: 'auto'
  })}
  ${mobile({
    height: '456px',
    maxWidth: 'auto'
  })}
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
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
`;

const Detail = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  line-height: normal;
  margin-bottom: 3rem;
  padding: 0px 10px;
  ${media({
    margin: '12px 0px 30px 0px',
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
  color: var(--main-line-color);
  letter-spacing: -0.5px;
  padding: 0.1rem;
`;

const Product = ({ id, ...product }) => {
  const addFlashMessage = useContext(MessageContext);
  const [click, setClick] = useState(false);

  const dispatch = useDispatch();

  const handleAddToWish = product => {
    addFlashMessage('위시리스트에 담겼습니다!');
    dispatch(addWish({ id, ...product }));
    setClick(!click);
  };

  return (
    <Container>
      <Link to={`/${id}`}>
        <ImgView>
          <Image src={product.image} alt={product.product} />
        </ImgView>
      </Link>
      <Icon onClick={() => handleAddToWish({ id, ...product })}>
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
