import { FavoriteBorderOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;
const ImgView = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 75%;
  display: flex;
`;

const Icon = styled.div`
  position: absolute;
  z-index: 1;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
`;

const Detail = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  line-height: normal;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
`;
const ProductTitle = styled.span``;

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
      <ImgView>
        <Image src={item.img} />
      </ImgView>

      <Icon>
        <FavoriteBorderOutlined />
      </Icon>
      <Detail>
        <ProductTitle>{item.title}</ProductTitle>
        <PriceView>
          <ProductPrice>{item.price}</ProductPrice>
          <Currency> {item.currency} </Currency>
        </PriceView>
      </Detail>
    </Container>
  );
};

export default Product;
