import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import StyledButton from '../components/Button/Button';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useContext } from 'react';
import { addWish } from '../store/wish-slice';
import ExampleContext from '../components/ExampleContext';

import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart
} from '../store/cart-slice';

const Container = styled.div`
  padding: 13rem 10rem;
  font-size: 11px;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Message = styled.div`
  text-align: center;
  padding-top: 5rem;
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
  padding: 3rem;
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
const Pointer = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin-top: 1.8rem;
`;
const DeleteAll = styled.div`
  cursor: pointer;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;
const Total = styled.div`
  padding: 2rem 0rem;
  height: 10vh;
`;

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const addFlashMessage = useContext(ExampleContext);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleDecreaseCart = product => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = product => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleAddToWish = product => {
    addFlashMessage('위시리스트에 담겼습니다!');
    dispatch(addWish(product));
  };
  const handleIncreaseCart = product => {
    dispatch(addToCart(product));
  };
  return (
    <Container>
      {cart.products.length === 0 ? (
        <Message>장바구니가 비었습니다.</Message>
      ) : (
        <Wrapper>
          <Left>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Title>쇼핑백({cart.quantity})</Title>
              <DeleteAll onClick={handleClearCart}>모두삭제</DeleteAll>
            </div>
            {cart.products.map(product => (
              <div id={product.id} key={product.index}>
                <Product>
                  <ProductDetail>
                    <Image src={product.image} />
                    <Details>
                      <div>
                        <Link to={`/${product.id}`}>
                          <b>{product.product}</b>
                        </Link>
                        <p>{product.kind}</p>
                      </div>
                      <div>사이즈: {product.size}</div>
                      <ProductColor color={product.color} />
                      <Pointer onClick={() => handleAddToWish(product)}>
                        위시리스트로 이동
                      </Pointer>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <AmountContainer>
                      <Remove
                        style={{ fontSize: '13px' }}
                        onClick={() => handleDecreaseCart(product)}
                      />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Add
                        style={{ fontSize: '13px' }}
                        onClick={() => handleIncreaseCart(product)}
                      />
                    </AmountContainer>
                    <p>{product.price * product.quantity}원</p>
                    <Pointer onClick={() => handleRemoveFromCart(product)}>
                      삭제
                    </Pointer>
                  </PriceDetail>
                </Product>
                <Hr />
              </div>
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
              <Link to='/checkout'>
                <StyledButton>주문결제로 이동</StyledButton>
              </Link>
            </Total>
          </Right>
        </Wrapper>
      )}
    </Container>
  );
};

export default Cart;
