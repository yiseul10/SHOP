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

const Products = ({ filters, sort }) => {
  console.log(filters, sort);
  //   // TODO
  const [products, setProduct] = useState([]);
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

        console.log("데이터", response.data.products);
        setProduct(response.data.products);
        // console.log(response.data.products);
      } catch (error) {
        console.error(error);
        setError(error);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);
  if (!products) return null;

  console.log(products);
  return (
    <Container>
      {products.map(product => (
        <Product
          image={product.image}
          key={product.productNumber}
          id={product.productNumber}
          title={product.product}
          price={product.price}
          cat={product.kind}
        />
      ))}
    </Container>
  );
};
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);

//   const getProducts = async () => {
//     const json = await (
//       await fetch(`http://pvpvpvpvp.gonetis.com:8080/sample/products/`)
//     ).json();
//     setProducts(json.data.products);
//     setLoading(false);
//   };
//   useEffect(() => {
//     getProducts();
//   }, []);
//   console.log(products);

//   return (
//     <Container>
//       {products.products.map(product => (
//         <Product
//           image={product.image}
//           key={product.productNumber}
//           id={product.productNumber}
//           title={product.product}
//           price={product.price}
//           cat={product.kind}
//         />
//       ))}
//     </Container>
//   );
// };

export default Products;
