import axios from 'axios';
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { media } from '../../responsive';

import Product from './Product';
import AppPagination from './AppPagination';

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
  const [products, setProduct] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await axios.get(
          // `http://pvpvpvpvp.gonetis.com:8080/sample/products?_page=${page}`
          // `http://pvpvpvpvp.gonetis.com:8080/sample/products?kind=${kind}`
          `http://pvpvpvpvp.gonetis.com:8080/sample/products`
        );
        console.log('데이터', response.data.products);
        setProduct(response.data.products);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchUsers();
  }, [cat]);

  return (
    <>
      <Container>
        {products.map(product => (
          <Product
            product={product}
            kind={product.kind}
            image={product.image}
            key={product.index}
            id={product.productNumber}
            product={product.product}
            price={product.price}
          />
        ))}
      </Container>
      <AppPagination onChange={(event, value) => setPage()} />
    </>
  );
};

export default Products;
