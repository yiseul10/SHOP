import axios from "axios";
import { useState, useEffect } from "react";

import styled from "styled-components";
import Product from "./Product";
// import { popularProducts } from "../data";
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

const Products = ({ kind, filters, sort }) => {
  // const [fproducts, setFproducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [products, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await axios.get(
          kind
            ? `http://pvpvpvpvp.gonetis.com:8080/sample/products/?kind=${kind}`
            : "http://pvpvpvpvp.gonetis.com:8080/sample/products/"
        );
        setProduct(response.data);
        console.log(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, [kind]);
  useEffect(async () => {
    kind &&
      (await setFilteredProducts(
        products.filter(item =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      ));
  }, [products, kind, filters]);
  if (!products) return null;
  return (
    <Container>
      {filteredProducts.map(item => (
        <Product item={item} key={[item.index]} />
      ))}
    </Container>
  );
};

export default Products;
