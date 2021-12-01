import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import StyledButton from '../components/Button/Button';

import { useSelector } from 'react-redux';

const Container = styled.div`
  padding: 13rem 10rem;
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
const ProductColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;
const PriceDetail = styled.div`
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin: 2rem 0rem;
`;
const ProductAmount = styled.div`
  margin: 0rem 1rem;
  font-size: 13px;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Right = styled.div`
  flex: 2;
  margin-left: 5rem;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.5rem;
  font-weight: ${props => props.type === 'total' && '500'};
  margin-top: ${props => props.type === 'total' && '10px'};
`;
const SummaryItemText = styled.div`
  padding: 1rem 0rem;
`;
const Wish = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin-top: 1.8rem;
`;
const Total = styled.div`
  padding: 2rem 0rem;
  height: 10vh;
`;

const Cart = () => {
  const cart = useSelector(state => state.cart);
  // const dispatch = useDispatch();
  const handleDelete = () => {
    //   dispatch(removeProducts(id));
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>쇼핑백({cart.quantity})</Title>
          {cart.products.map(product => (
            <>
              <Product>
                <ProductDetail>
                  <Image src={product.image} />
                  <Details>
                    <div>
                      <Link to={`/product/${product.id}`}>
                        <b>{product.product}</b>
                      </Link>
                      <p>{product.kind}</p>
                    </div>
                    <div>사이즈: {product.size}</div>
                    <ProductColor color={product.color} />
                    <Wish>위시리스트로 이동</Wish>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <AmountContainer>
                    <Add style={{ fontSize: '13px' }} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove style={{ fontSize: '13px' }} />
                  </AmountContainer>
                  <p>{product.price * product.quantity}원</p>
                  <Wish onClick={handleDelete}>삭제</Wish>
                </PriceDetail>
              </Product>
              <Hr />
            </>
          ))}
        </Left>
        <Right>
          <Title>결제 </Title>
          <Total>
            <SummaryItemText>
              <SummaryItem>
                <span>가격</span>
                <span>{cart.total}원</span>
              </SummaryItem>
              <SummaryItem>
                <span>배송비</span>
                <span>0원</span>
              </SummaryItem>
            </SummaryItemText>
            <Hr />
            <SummaryItemText>
              <SummaryItem type='total'>
                <span>합계</span>
                <span>{cart.total}원</span>
              </SummaryItem>
            </SummaryItemText>

            <StyledButton>주문결제로 이동</StyledButton>
          </Total>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Cart;
