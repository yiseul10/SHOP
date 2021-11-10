import axios from "axios";
import { useState, useEffect } from "react";

import styled from "styled-components";
import Product from "./Product";
import { media } from "../responsive";

const Container = styled.div`
  padding: 30px 50px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  ${media({
    justifyContent: "center",
    flexDirection: "column",
    padding: "50px 30px"
  })}
`;

const Products = () => {
  const [products, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await axios.get(
          `http://pvpvpvpvp.gonetis.com:8080/sample/products/`
        );
        setProduct(response.data);
        console.log(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);
  if (!products) return null;

  return (
    <Container>
      {products.products.map(item => (
        <Product item={item} key={[item.index]} />
      ))}
    </Container>
  );
};
export default Products;
