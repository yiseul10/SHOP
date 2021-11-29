import styled from "styled-components";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 13rem 17rem;
  font-size: 11px;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  padding: 2rem 0rem;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 170px;
`;
const Details = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const Title = styled.div`
  font-weight: 500;
`;

const PriceDetail = styled.div`
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Delete = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin-top: 4.3rem;
`;
const ProductTitle = styled(Link)`
  padding: 0.2rem 0rem;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;

const WishList = ({ product }) => {
  const wish = useSelector(state => state.wish);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>위시리스트({wish.quantity})</Title>
          {wish.products.map(product => (
            <>
              <Product>
                <ProductDetail>
                  <Image src={product.image} />
                  <Details>
                    <ProductTitle>{product.product}</ProductTitle>
                    <p>{product.kind}</p>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <p>{product.price}원</p>
                  <Delete>삭제</Delete>
                </PriceDetail>
              </Product>
              <Hr />
            </>
          ))}
        </Left>
      </Wrapper>
    </Container>
  );
};

export default WishList;
