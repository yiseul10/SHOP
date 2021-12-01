import React, { useEffect } from 'react';

import Product from './Product';

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

  return (
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
  );
};

export default Products;
