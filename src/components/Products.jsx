import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { media } from "../responsive";

const Container = styled.div`
  padding: 0 20px;
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
  return (
    <Container>
      {popularProducts.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
