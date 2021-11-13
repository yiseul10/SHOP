import axios from "axios";
import { useState, useEffect } from "react";

import styled from "styled-components";
import Product from "./Product";
import { media } from "../responsive";
import { TodayOutlined } from "@material-ui/icons";

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

const Products = ({ cat, filters, sort }) => {
  console.log(filters, sort, cat);
  //   // TODO
  //   const [products, setProduct] = useState("");
  //   // const [filteredProducts, setFilteredProducts] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);
  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         setError(null);
  //         setLoading(true);
  //         const response = await axios.get(
  //           `http://pvpvpvpvp.gonetis.com:8080/sample/products/`
  //           // `http://pvpvpvpvp.gonetis.com:8080/sample/products?kind=${kind}`
  //         );

  //         setProduct(response.data);
  //         console.log(response.data);
  //       } catch (error) {
  //         setError(error);
  //       }
  //       setLoading(false);
  //     };
  //     fetchUsers();
  //   }, []);
  //   if (!products) return null;

  //   return (
  //     <Container>
  //       {products.products.map(item => (
  //         <Product item={item} key={[item.index]} id={item.id} cat={item.kind} />
  //       ))}
  //     </Container>
  //   );
  // };
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const json = await (
      await fetch(`http://pvpvpvpvp.gonetis.com:8080/sample/products/`)
    ).json();
    setProducts(json.data.products);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <Container>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        products.map(product => (
          <Product
            image={products.image}
            title={products.product}
            price={products.price}
            key={products.productNumber}
            id={products.productNumber}
          />
        ))
      )}
    </Container>
  );
};

export default Products;
