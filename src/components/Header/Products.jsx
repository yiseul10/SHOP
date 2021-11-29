import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';
import Product from './Product';
import Loader from '../loader/Loader';

import styled from 'styled-components';
import { media } from '../../responsive';

const Container = styled.div`
  padding: 30px 50px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  ${media({
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '50px 30px'
  })}
`;

const Products = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort);
  // TODO

  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Container>
          {products.map(product => (
            <Product
              product={product}
              image={product.image}
              key={product.index}
              id={product.productNumber}
              title={product.product}
              price={product.price}
            />
          ))}
        </Container>
      )}
    </>
  );
};

export default Products;
