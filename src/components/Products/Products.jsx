import Axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';

import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { media } from '../../responsive';

import Product from './Product';
import AppPagination from './AppPagination';
import { fetchProducts, getAllProducts } from '../../store/api-call';

const Container = styled.div`
  padding: 30px 58px 150px 50px;
  flex-wrap: wrap;
  position: relative;
  display: flex;
  gap: 1rem;
  ${media({
    padding: '15px 15px 80px 15px'
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

const Products = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort);
  // TODO
  const [products, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(10);

  // const products = useSelector(getAllProducts);
  // console.log(products);
  // const dispatch = useDispatch();
  // const keyword = '기모';

  // useEffect(() => {
  //   dispatch(fetchProducts(keyword));
  // }, [dispatch, keyword, page]);

  //FIXME
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await Axios.get(
        cat
          ? `?page=${page}&count=15&kind=${cat}`
          : `?page=1&count=30&product=${cat}`
        // `?page=${page}&count=30`
      );
      console.log('데이터', response.data.products);
      setProduct(response.data.products);
      setNumberOfPages(response.data.endPage);
    };
    fetchUsers();
  }, [cat, page]);

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
    <>
      <Container>
        {/* {products.products.map(product => ( */}
        {filteredProducts.map(product => (
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
        <Page>
          <AppPagination setPage={setPage} pageNumber={numberOfPages} />
        </Page>
      </Container>
    </>
  );
};

export default Products;
