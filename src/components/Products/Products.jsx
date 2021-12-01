import axios from 'axios';
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import Product from './Product';
import { media } from '../../responsive';
import Pagination from './Pagination';

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

const Products = () => {
  // console.log(cat, filters, sort);
  // TODO
  const [products, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await axios.get(
        `http://pvpvpvpvp.gonetis.com:8080/sample/products`
      );
      setProduct(response.data.products);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  //GET CURRENT POSTS
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProduct = products.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentProduct);
  return (
    <Container>
      {products.map(product => (
        <Product
          product={currentProduct}
          image={product.image}
          key={product.index}
          id={product.productNumber}
          title={product.product}
          price={product.price}
        />
      ))}
      <Pagination postsPerPage={postsPerPage} totalPosts={products.length} />
    </Container>
  );
};

export default Products;
