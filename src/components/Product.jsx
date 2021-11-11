import { FavoriteBorderOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { media } from "../responsive";

import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  ${media({ padding: "0px" })};
`;
const ImgView = styled(Link)`
  min-width: 275px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  /* background-color: mintcream; */
  &:hover {
    opacity: 70%;
    transition: all 0.5s ease;
    cursor: pointer;
  }
  ${media({ height: "100%" })}
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 0;
`;

const Icon = styled.div`
  position: absolute;
  /* z-index: 1; */
  cursor: pointer;
  top: 1rem;
  right: 1rem;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;

const Detail = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  line-height: normal;
  margin-bottom: 1rem;
  padding: 0.5rem 0.5rem;
`;
const ProductTitle = styled.span`
  letter-spacing: -1px;
  font-size: 12px;
`;

const PriceView = styled.div`
  display: flex;
`;

const ProductPrice = styled.span`
  display: block;
`;
const Currency = styled.span`
  font-size: 5px;
  color: grey;
  letter-spacing: -0.5px;
  padding: 0.1rem;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <ImgView to={`/products/${item.productNumber}`}>
        <Image src={item.image} />
      </ImgView>
      <Icon>
        <FavoriteBorderOutlined />
      </Icon>
      <Detail>
        <ProductTitle>{item.product}</ProductTitle>
        <PriceView>
          <ProductPrice>{item.price}</ProductPrice>
          <Currency>원</Currency>
        </PriceView>
      </Detail>
    </Container>
  );
};

export default Product;
