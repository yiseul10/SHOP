import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { removeWish, clearWish } from '../store/wish-slice';
import { media } from '../responsive';

const Container = styled.div`
  padding: 13rem 17rem;
  font-size: 11px;
  ${media({ padding: '150px 25px 80px 25px' })}
`;
const Wrapper = styled.div`
  display: flex;
`;
const Message = styled.div`
  text-align: center;
  ${media({ flexDirection: 'row' })}
`;
const Left = styled.div`
  flex: 3;
`;
const LeftSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
  background-color: var(--main-line-color);
  border: none;
  height: 1px;
`;

const Delete = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin-top: 4.3rem;
`;
const DeleteAll = styled.div`
  cursor: pointer;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;
const ProductTitle = styled(Link)`
  padding: 0.2rem 0rem;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;

export const WishList = () => {
  const dispatch = useDispatch();
  const wish = useSelector(state => state.wish);

  const handleDelete = () => {
    dispatch(removeWish(wish));
  };
  const handleClear = () => {
    dispatch(clearWish(wish));
  };

  return (
    <Container>
      {wish.products.length === 0 ? (
        <Message>위시리스트가 없습니다.</Message>
      ) : (
        <Wrapper>
          <Left>
            <LeftSection>
              <Title>위시리스트({wish.quantity})</Title>
              <DeleteAll onClick={handleClear}>모두삭제</DeleteAll>
            </LeftSection>
            {wish.products.map(product => (
              <div key={product.index} id={product.id}>
                <Product>
                  <ProductDetail>
                    <Image src={product.image} />
                    <Details>
                      <ProductTitle to={`/${product.id}`}>
                        {product.product}
                      </ProductTitle>
                      <p>{product.kind}</p>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <p>{product.price}원</p>
                    <Delete onClick={handleDelete}>삭제</Delete>
                  </PriceDetail>
                </Product>
                <Hr />
              </div>
            ))}
          </Left>
        </Wrapper>
      )}
    </Container>
  );
};
