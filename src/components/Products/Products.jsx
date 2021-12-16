import Axios from 'axios';

import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { media } from '../../responsive';

import Product from './Product';
import AppPagination from './AppPagination';

const Container = styled.div`
  /* padding: 30px 58px 150px 50px; */
  padding: 10px 50px 150px 50px;
  flex-wrap: wrap;
  position: relative;
  display: flex;
  justify-content: space-between;
  ${media({
    padding: '20px 15px 80px 15px'
  })}
`;
const Page = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 999;
  height: 3rem;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 0%);
`;

const Products = ({ cat, filters, sort, keyword }) => {
  // console.log(cat, filters, sort);
  // TODO
  const [products, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        //FIXME전체URL안에 page, count, kind, product / kind값안에 전체데이터까지 포괄하는
        // switch문? if문?? 조건에 따라 렌더링해주는 방법??

        const response = await Axios.get(
          cat
            ? `?page=${page}&count=20&kind=${cat}`
            : `/` && keyword
            ? `?page=1&product=${keyword}`
            : `?page=${page}&count=20&kind=${cat}`
        );
        console.log('데이터', response.data);
        setProduct(response.data.products);
        const num = response.data.endPage;
        setNumberOfPages(response.data.endPage);
        console.log(num);
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
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === 'featured') {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
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
              product={product}
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
              product={product}
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
