import Axios from 'axios';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { media } from '../../responsive';

import Product from './Product';
import AppPagination from './AppPagination';
import { fetchProducts, getAllProducts } from '../../store/api-call';

const Container = styled.div`
  padding: 30px 50px 150px 50px;
  flex-wrap: wrap;
  position: relative;
  display: flex;
  justify-content: space-between;
  ${media({
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '50px 30px'
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
  // console.log(cat, filters, sort);
  // TODO
  const [products, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(10);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const products = useSelector(getAllProducts);
  // console.log(products);
  // const dispatch = useDispatch();
  // const keyword = '아우터';

  // useEffect(() => {
  //   dispatch(fetchProducts(keyword));
  // }, [dispatch, keyword, page]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await Axios.get(
          cat ? `?page=${page}&count=30` : `?page=1&kind=${cat}`
        );
        console.log('데이터', response.data.products);
        setProduct(response.data.products);
        setNumberOfPages(response.data.endPage);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchUsers();
  }, [cat, page]);

  return (
    <>
      <Container>
        {/* {products.products.map(product => ( */}
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
        <Page>
          <AppPagination setPage={setPage} pageNumber={numberOfPages} />
        </Page>
      </Container>
    </>
  );
};

export default Products;
