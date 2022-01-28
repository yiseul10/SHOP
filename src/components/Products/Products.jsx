import Axios from 'axios';

import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { media, mobile } from '../../responsive';

import Product from './Product';
import AppPagination from './AppPagination';

const Container = styled.div`
  padding: 10px 50px 150px 50px;
  flex-wrap: wrap;
  position: relative;
  display: flex;
  justify-content: center;
  ${media({
    padding: '20px 15px 80px 15px'
  })}
  ${mobile({
    padding: '0'
  })}
`;
const Page = styled.div`
  position: absolute;
  bottom: 0;
  height: 3rem;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 0%);
`;

const Products = ({ cat, filters, sort, keyword }) => {
  const [products, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await Axios.get(
          cat
            ? `?page=${page}&count=20&kind=${cat}`
            : `/` && keyword
            ? `?page=1&product=${keyword}`
            : `?page=${page}&count=20&kind=${cat}`
        );
        setProduct(response.data.products);
        setNumberOfPages(response.data.endPage);
      } catch (err) {}
    };
    fetchUsers();
  }, [cat, page, keyword]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter(item =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  useEffect(() => {
    if (sort === 'featured') {
      setFilteredProducts(prev => [...prev].sort((a, b) => a - b));
    } else if (sort === 'asc') {
      setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map(product => (
            <Product
              id={product.productNumber}
              kind={product.kind}
              image={product.image}
              key={product.index}
              product={product.product}
              price={product.price}
            />
          ))
        : products.map(product => (
            <Product
              id={product.productNumber}
              kind={product.kind}
              image={product.image}
              key={product.index}
              product={product.product}
              price={product.price}
            />
          ))}

      <Page>
        {numberOfPages > 1 && (
          <AppPagination setPage={setPage} pageNumber={numberOfPages} />
        )}
      </Page>
    </Container>
  );
};

export default Products;
